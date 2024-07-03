import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// ===== styles import =====
import FlexBox from "../styles/FlexStyle";
import P, { H1 } from "../styles/TextStyle";

// ===== component =====
const QnAList = () => {
  // === state ===
  const [initialData, setInitialData] = useState([]);

  // === navigate ===
  const navigate = useNavigate();

  useEffect(() => {
    // 문답 목록 불러오기 성공 시, 각 컴포넌트에 데이터 뿌리기
    // 문답 목록 불러오기 실패 시, modal 출력

    const data = [
      {
        id: 1,
        question: "좋아하는 노래는?",
      },
      {
        id: 2,
        question: "좋아하는 음식은?",
      },
    ];

    setInitialData(data);
  }, []);

  const handleClickDetailPage = (questionId) => {
    navigate(`/qna/${questionId}`);
  };

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
          <FlexBox $col="center" $dir="col" $width="58.438rem" $margin="30px 0 30px 0">
            <H1 $fontSize="36px" $margin="0 0 10px 0">
              우리의 문답
            </H1>
            <P $fontSize="16px">매일 주고 받는 우리의 소중한 기록들</P>
          </FlexBox>

          {/* 문답 목록 */}
          <FlexBox $dir="col" $width="58.438rem" $margin="0 0 30px 0">
            {sortedData?.map((data, index) => (
              <FlexBox key={index} onClick={() => handleClickDetailPage(data.id)}>
                <P $margin="0 10px 0 0">#{data.id}</P>
                <P>{data.question} </P>
              </FlexBox>
            ))}
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </>
  );
};

export default QnAList;
