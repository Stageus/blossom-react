import React from "react";
import { Link } from "react-router-dom";

// ===== styles import =====
import FlexBox from "../../../styles/FlexStyle";
import Div from "../../../styles/LayoutStyle";
import { Span } from "../../../styles/TextStyle";
import { Button } from "../../../styles/ButtonStyle";

// ===== components import =====
import ErrorMessage from "../../Common/ErrorMessage/ErrorMessage";
import InputField from "../../Common/InputField/InputField";

// ===== hooks import =====
import useFindId from "./useFindId";

// ===== component =====
const FindIdForm = () => {
  // === useFindId ===
  const {
    nameRef,
    submitRef,
    userId,
    hasUserId,
    findIdError,
    handleSendPhonenumber,
    handleFindId,
  } = useFindId();

  // === return ===
  return (
    <>
      {hasUserId ? (
        <>
          {/* 아이디 출력부 */}
          <FlexBox $margin="30px 0 0 0">
            <Span $textColor="#FFC4D0">회원님의 아이디는</Span>
            <Span $margin="0 10px 0 10px">{userId}</Span>
            <Span $textColor="#FFC4D0">입니다.</Span>
          </FlexBox>

          {/* 로그인, 비밀번호 찾기 페이지 이동 */}
          <FlexBox
            $row="between"
            $width="25.625rem"
            $margin="50px 0 0 0"
            $borderTop="2px solid white"
          >
            {/* 로그인 Link Button */}
            <Div $margin="10px 0 0 0">
              <Span $fontSize="12px" $textColor="#FFFFFF" $margin="0 5px 0 0">
                Blossom 회원이라면?
              </Span>
              <Link to="/login">
                <Span $fontSize="12px">로그인하기</Span>
              </Link>
            </Div>

            {/* 비밀번호 찾기 Link Button */}
            <Div $margin="10px 0 0 0">
              <Span $fontSize="12px" $textColor="#FFFFFF" $margin="0 5px 0 0">
                비밀번호를 잊으셨나요?
              </Span>
              <Link to="/findpw">
                <Span $fontSize="12px">비밀번호 찾기</Span>
              </Link>
            </Div>
          </FlexBox>
        </>
      ) : (
        <>
          {/* 아이디 찾기 Input Field */}
          <FlexBox $dir="col" $row="between" $width="25.625rem" $height="15rem">
            <InputField
              hasLabel="true"
              labelMessage="이름"
              padding="0 0 0 10px"
              borderRadius="12px"
              fontSize="18px"
              type="text"
              inputRef={nameRef}
            />
            <InputField
              hasLabel="true"
              labelMessage="전화번호"
              padding="0 0 0 10px"
              borderRadius="12px"
              fontSize="18px"
              inputType="phone"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  submitRef.current.click();
                }
              }}
              onValidateAndSend={handleSendPhonenumber}
            />
            {findIdError && <ErrorMessage message={findIdError} />}
          </FlexBox>

          {/* 아이디 찾기 Button */}
          <Button
            $width="25.625rem"
            $height="5rem"
            $margin="30px 0 50px 0"
            $borderRadius="12px"
            ref={submitRef}
            onClick={handleFindId}
          >
            확인
          </Button>

          {/* 로그인 페이지로 이동 */}
          <FlexBox $row="center" $width="25.625rem">
            <Div
              $width="20.813rem"
              $textAlign="center"
              $borderTop="2px solid white"
              $borderBottom="2px solid white"
              $padding="20px 0 20px 0"
            >
              <Span $margin="0 5px 0 0" $textColor="#FFFFFF" $fontSize="16px">
                아이디가 생각나셨나요?
              </Span>
              <Link to="/login">
                <Span $fontSize="16px">로그인하기</Span>
              </Link>
            </Div>
          </FlexBox>
        </>
      )}
    </>
  );
};

export default FindIdForm;
