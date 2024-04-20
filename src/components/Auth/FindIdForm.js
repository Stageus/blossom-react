import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// ===== styles import =====
import FlexBox from "../../styles/FlexStyle";
import Div from "../../styles/LayoutStyle";
import { Span } from "../../styles/TextStyle";
import { Button } from "../../styles/ButtonStyle";

// ===== utils import =====
import { isNameValid, isPhoneNumberValid } from "../../utils/validation";

// ===== components import =====
import ErrorMessage from "../Common/ErrorMessage";
import InputField from "../Common/InputField";

// ===== component =====
const FindIdForm = () => {
  // === ref ===
  const nameRef = useRef("");

  // === state ===
  const [phonenumber, setPhonenumber] = useState("");
  const [userId, setUserId] = useState("");
  const [hasUserId, setHasUserId] = useState(false);
  const [findIdError, setFindIdError] = useState("");

  useEffect(() => {
    // 아이디 찾기 성공 시, 아이디 출력
    // 아이디 찾기 실패 시, Error Message 출력
  }, []);

  // props를 통해 전화번호 받아오고, state에 저장
  const handleSendPhonenumber = (phone) => {
    setPhonenumber(phone);
  };

  const handleFindId = () => {
    const name = nameRef.current.value;
    const id = "jephpp";

    if (!isNameValid(name) || !isPhoneNumberValid(phonenumber)) {
      setFindIdError("이름 혹은 전화번호를 확인해 주세요.");
    } else {
      setFindIdError(""); // 아이디 찾기 에러 메세지 초기화

      // 아이디 찾기 API 호출 코드
      const status = 200;

      if (status === 400) {
        setFindIdError("이름 혹은 전화번호를 확인해 주세요.");
      } else if (status === 404) {
        setFindIdError("해당 정보가 존재하지 않습니다.");
      } else if (status === 500) {
        return;
      } else {
        setHasUserId(true);
        setUserId(id);
      }
    }
  };

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
              fontSize="18px"
              type="text"
              inputRef={nameRef}
            />
            <InputField
              hasLabel="true"
              labelMessage="전화번호"
              fontSize="18px"
              inputType="phone"
              onValidateAndSend={handleSendPhonenumber}
            />
            {findIdError && <ErrorMessage message={findIdError} />}
          </FlexBox>

          {/* 아이디 찾기 Button */}
          <Button $width="25.625rem" $height="5rem" $margin="30px 0 50px 0" onClick={handleFindId}>
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
