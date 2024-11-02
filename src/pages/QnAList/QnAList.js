import React, { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

// ===== styles import =====
import FlexBox from "../../styles/FlexStyle";
import P, { H1 } from "../../styles/TextStyle";
import { Button } from "../../styles/ButtonStyle";
import { Img } from "../../styles/ImgStyle";
import WhiteArrow from "../../assets/images/icon_park_left.png";

// ===== recoil import =====
import { latestQuestionIdxState } from "../../recoil/latestQuestionIdxState";

// ===== component =====
const QnAList = () => {
  // === state & recoil ===
  const [initialData, setInitialData] = useState([]);
  const setLatestQuestionIdx = useSetRecoilState(latestQuestionIdxState);

  // === navigate ===
  const navigate = useNavigate();

  useEffect(() => {
    // 문답 목록 불러오기 성공 시, 각 컴포넌트에 데이터 뿌리기
    // 문답 목록 불러오기 실패 시, modal 출력

    const data = [
      {
        idx: 1,
        question: "좋아하는 노래는?",
      },
      {
        idx: 2,
        question: "좋아하는 음식은?",
      },
    ];

    setInitialData(data);
    if (data && data.length > 0) {
      const latestQuestion = data[data.length - 1]; // 최신 문답 찾기 (배열의 마지막 요소)
      setLatestQuestionIdx(latestQuestion.idx);
    }
  }, []);

  // 최신순으로 출력하기 위해 데이터 재정렬
  const sortedData = initialData.slice().reverse();

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
          {/* 문답 목록 Header */}
          <FlexBox $width="64.063rem">
            <Button
              $backgroundColor="transparent"
              $hoverColor="null"
              $margin="0 0 0 30px"
              onClick={() => navigate("/")}
            >
              <Img src={WhiteArrow} />
            </Button>
            <FlexBox $col="center" $dir="col" $width="58.438rem" $margin="30px 100px 30px 0">
              <H1 $fontSize="36px" $margin="0 0 10px 0">
                우리의 문답
              </H1>
              <P $fontSize="16px">매일 주고 받는 우리의 소중한 기록들</P>
            </FlexBox>
          </FlexBox>

          {/* 문답 목록 */}
          <FlexBox $dir="col" $width="58.438rem" $margin="0 0 30px 0">
            {sortedData?.map((sortedData, index) => (
              <FlexBox key={index} onClick={() => navigate(`/qna/${sortedData.idx}`)}>
                <P $margin="0 10px 0 0">#{sortedData.idx}</P>
                <P>{sortedData.question} </P>
              </FlexBox>
            ))}
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </>
  );
};

export default QnAList;
