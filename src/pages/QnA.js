import React, { useState, useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";

// ===== styles import =====
import FlexBox from "../styles/FlexStyle";

// ===== components import =====
import QuestionField from "../components/QnA/QuestionField";
import AnswerField from "../components/QnA/AnswerField";

// ===== recoil import =====
import { latestQuestionIdxState } from "../recoil/latestQuestionIdxState";

// ===== component =====
const QnA = () => {
  // === params ===
  const { idx } = useParams(); // 백엔드 통신 시 사용

  // === state & recoil ===
  const [answerData, setAnswerData] = useState([]);
  const latestQuestionIdx = useRecoilValue(latestQuestionIdxState); // 백엔드 통신 시 사용

  useEffect(() => {
    // 문답 내용 불러오기 성공 시, 답변 여부에 따른 출력
    // 문답 내용 불러오기 실패 시, modal 출력

    // 백엔드 통신 시 조건부로 idx 혹은 latestQuestionIdx 사용

    const data = {
      myNickname: "메롱",
      partnerNickname: "바보",
      idx: 1,
      question: "좋아하는 노래는?",
      myAnswer: null,
      partnerAnswer: "메롱",
    };

    setAnswerData(data);
  }, []);

  return (
    <>
      <FlexBox FlexBox $row="center" $width="100%">
        <FlexBox
          $dir="col"
          $col="center"
          $width="64.063rem"
          $height="100vh;"
          $backgroundColor="#FBE8E7"
        >
          {/* 문답 질문 영역 */}
          <QuestionField questionIdx={answerData.idx} question={answerData.question} />

          {/* 내 답변 영역 */}
          <AnswerField
            isMyAnswerField={true}
            myNickname={answerData.myNickname}
            myAnswer={answerData.myAnswer}
          />

          {/* 상대 답변 영역 */}
          <AnswerField
            loverNickname={answerData.partnerNickname}
            loverAnswer={answerData.partnerAnswer}
          />
        </FlexBox>
      </FlexBox>
    </>
  );
};

export default QnA;
