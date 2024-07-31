import React, { useState, useEffect, useRef } from "react";

// ===== styles import =====
import P from "../../styles/TextStyle";
import { TextArea } from "../../styles/InputStyle";
import { Button } from "../../styles/ButtonStyle";

// ===== component =====
const AnswerField = ({ isMyAnswer, myAnswer, LoverAnswer }) => {
  // isMyAnswer : Boolean
  // myAnswer : String
  // LoverAnswer : String

  // === ref ===
  const textAreaRef = useRef("");

  // === state ===
  const [answer, setAnswer] = useState(false);
  const [hasMyAnswer, setHasMyAnswer] = useState(!!myAnswer);

  useEffect(() => {
    console.log(hasMyAnswer);
  }, [hasMyAnswer]);

  const handleClickAnswerButton = () => {
    setAnswer(true);
    setHasMyAnswer(true);
  };

  return (
    <>
      {isMyAnswer ? (
        <>
          {myAnswer ? (
            <P>{myAnswer}</P>
          ) : (
            <>
              {answer ? (
                <P>{textAreaRef.current.value}</P>
              ) : (
                <>
                  <TextArea ref={textAreaRef} />
                  <Button onClick={handleClickAnswerButton}>답변하기</Button>
                </>
              )}
            </>
          )}
        </>
      ) : (
        <>
          {LoverAnswer ? (
            <P $blur={hasMyAnswer ? "none" : "blur(5px)"}>{LoverAnswer}</P>
          ) : (
            <P>연인의 답변을 기다리는 중...</P>
          )}
        </>
      )}
    </>
  );
};

export default AnswerField;
