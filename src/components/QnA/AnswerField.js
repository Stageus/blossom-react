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
const AnswerField = ({ isMyAnswer, myNickname, myAnswer, loverNickname, loverAnswer }) => {
  // === ref ===
  const textAreaRef = useRef("");

  // === state & recoil ===
  const [answer, setAnswer] = useState(false);
  const [hasMyAnswer, setHasMyAnswer] = useState(!!myAnswer);
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
        setAnswer(true);
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

      {isMyAnswer ? (
        <FlexBox $dir="col" $width="100%">
          <P $fontSize="24px" $margin="0 0 10px 35px">
            {myNickname}
          </P>
          {myAnswer ? (
            <>
              <FlexBox $width="95%">
                <P>{myAnswer}</P>
              </FlexBox>
            </>
          ) : (
            <>
              {answer ? (
                <P>{textAreaRef.current.value}</P>
              ) : (
                <>
                  <FlexBox $dir="col" $col="center" $width="100%">
                    <TextArea $width="95%" ref={textAreaRef} />
                    <FlexBox $width="95%" $margin="10px 0 0 0">
                      <ErrorMessage message={answerError} />
                    </FlexBox>

                    <FlexBox $row="end" $width="95%" $margin="10px 0 0 0">
                      <Button onClick={handleClickAnswerButton}>답변하기</Button>
                    </FlexBox>
                  </FlexBox>
                </>
              )}
            </>
          )}
        </FlexBox>
      ) : (
        <>
          <P>{loverNickname}</P>
          {loverAnswer ? (
            <P $blur={hasMyAnswer ? "none" : "blur(5px)"}>{loverAnswer}</P>
          ) : (
            <P>연인의 답변을 기다리는 중...</P>
          )}
        </>
      )}
    </>
  );
};

export default AnswerField;
