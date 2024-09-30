import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// ===== styles import =====
import P from "../../styles/TextStyle";
import { TextArea } from "../../styles/InputStyle";
import { Button } from "../../styles/ButtonStyle";
import FlexBox from "../../styles/FlexStyle";

// ===== utils & recoil import =====
import { isAnswerValid } from "../../utils/validation";
import ErrorMessage from "../Common/ErrorMessage";

// ===== components import =====
import AlertModal from "../Modal/AlertModal";

// ===== component =====
const AnswerField = ({ isMyAnswerField, myNickname, myAnswer, loverNickname, loverAnswer }) => {
  // === ref ===
  const textAreaRef = useRef("");

  // === state & recoil ===
  const [isAnswered, setIsAnswered] = useState(false);
  const [hasMyAnswer, setHasMyAnswer] = useState(!!myAnswer); // !!myAnswer: 자바스크립트에서 "이중 부정"을 사용하여 값을 boolean으로 변환하는 방식
  const [answerError, setAnserError] = useState("");
  const [tokenErrorModalOpen, setTokenErrorModalOpen] = useState(false);

  // === navigate ===
  const navigate = useNavigate();

  useEffect(() => {
    // 문답 답변 성공 시, 답변 내용 출력
    // 문답 답변 실패 시, Error Message 출력
  }, [hasMyAnswer]);

  const handleClickAnswerButton = () => {
    const textArea = textAreaRef.current.value;

    if (!isAnswerValid(textArea)) {
      setAnserError("답변 내용을 다시 확인해 주세요.");
    } else {
      // 문답 답변 작성하기 API 호출 코드
      const status = 200;

      if (status === 400) {
        setAnserError("답변 내용을 다시 확인해 주세요.");
      } else if (status === 401) {
        setAnserError("");
        setTokenErrorModalOpen(true);
      } else if (status === 403) {
        // 권한 오류
        return;
      } else if (status === 404) {
        setAnserError("존재하지 않는 문답입니다.");
      } else if (status === 500) {
        return;
      } else {
        setAnserError("");
        setIsAnswered(true);
        setHasMyAnswer(true);
      }
    }
  };

  return (
    <>
      {tokenErrorModalOpen && (
        <AlertModal
          hasFunc={true}
          message="로그인이 필요합니다."
          onClick={() => navigate("/login")}
        />
      )}

      {isMyAnswerField ? (
        <FlexBox $dir="col" $width="100%" $margin="10px 0 0 0">
          {/* 내 닉네임 */}
          <P $fontSize="24px" $margin="0 0 10px 35px">
            {myNickname}
          </P>

          <FlexBox $dir="col" $col="center" $width="100%">
            {myAnswer ? (
              // 답변이 있을 시, 내 답변
              <FlexBox $width="93%" $margin="10px 0 0 0">
                <P>{myAnswer}</P>
              </FlexBox>
            ) : isAnswered ? (
              // 답변이 없었고, 입력 후, 내 답변
              <FlexBox $width="93%" $margin="10px 0 0 0">
                <P>{textAreaRef.current?.value}</P>
              </FlexBox>
            ) : (
              <>
                {/* 내 답변 입력 field */}
                <TextArea $width="93%" ref={textAreaRef} />
                <FlexBox $width="93%" $margin="10px 0 0 0">
                  <ErrorMessage message={answerError} />
                </FlexBox>

                <FlexBox $row="end" $width="95%" $margin="10px 0 0 0">
                  <Button onClick={handleClickAnswerButton}>답변하기</Button>
                </FlexBox>
              </>
            )}
          </FlexBox>
        </FlexBox>
      ) : (
        <FlexBox
          $dir="col"
          $width="100%"
          $margin={
            myAnswer ? "30px 0 0 0" : "10px 0 0 0" || isAnswered ? "30px 0 0 0" : "10px 0 0 0"
          }
        >
          <P $fontSize="24px" $margin="0 0 10px 35px">
            {loverNickname}
          </P>

          <FlexBox $dir="col" $col="center" $width="100%">
            {loverAnswer ? (
              <FlexBox $width="93%" $margin="10px 0 0 0">
                <P $blur={isAnswered ? "none" : "blur(5px)"}>{loverAnswer}</P>
              </FlexBox>
            ) : (
              <FlexBox $width="93%" $margin="10px 0 0 0">
                <P>연인의 답변을 기다리는 중...</P>
              </FlexBox>
            )}
          </FlexBox>
        </FlexBox>
      )}
    </>
  );
};

export default AnswerField;
