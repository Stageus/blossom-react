import React, { useState, useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";

// ===== styles import =====
import FlexBox from "../styles/FlexStyle";

// ===== recoil import =====
import { selectedQuestionState } from "../recoil/selectedQuestionState";
import { latestQuestionState } from "../recoil/selectedQuestionState";

// ===== components import =====
import QuestionField from "../components/QnA/QuestionField";
import AnswerField from "../components/QnA/AnswerField";

// ===== component =====
const QnA = () => {
  // === params ===
  const { id } = useParams();

  // === state & recoil ===
  const [answerData, setAnswerData] = useState([]);
  const selectedQuestion = useRecoilValue(selectedQuestionState);
  const latestQuestion = useRecoilValue(latestQuestionState);

  useEffect(() => {
    // 문답 내용 불러오기 성공 시, 답변 여부에 따른 출력
    // 문답 내용 불러오기 실패 시, modal 출력

    const data = {
      myAnswer: null,
      partnerAnswer: "qqwwqwq", // 상대 답변
    };

    setAnswerData(data);
  }, []);

  // 개별 문답
  if (id) {
    return (
      <>
        <FlexBox $row="center" $width="100%">
          <FlexBox
            $dir="col"
            $col="center"
            $width="64.063rem"
            $height="100vh;"
            $backgroundColor="#FBE8E7"
          >
            {/* 문답 질문 영역 */}
            <QuestionField id={selectedQuestion.id} question={selectedQuestion.question} />

            {/* 내 답변 영역 */}
            <AnswerField isMyAnswer={true} myAnswer={answerData.myAnswer} />

            {/* 상대 답변 영역 */}
            <AnswerField LoverAnswer={answerData.partnerAnswer} />
          </FlexBox>
        </FlexBox>
      </>
    );
  }

  // 오늘의 문답
  else {
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
            <QuestionField id={latestQuestion.id} question={latestQuestion.question} />

            {/* 내 답변 영역 */}
            <AnswerField isMyAnswer={true} myAnswer={answerData.myAnswer} />

            {/* 상대 답변 영역 */}
            <AnswerField LoverAnswer={answerData.partnerAnswer} />
          </FlexBox>
        </FlexBox>
      </>
    );
  }
};

export default QnA;
