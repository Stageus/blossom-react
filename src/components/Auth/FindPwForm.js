import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// ===== styles import =====
import FlexBox from "../../styles/FlexStyle";
import Div from "../../styles/LayoutStyle";
import { Span } from "../../styles/TextStyle";
import { Button } from "../../styles/ButtonStyle";

// ===== utils import =====
import { isIdValid, isNameValid, isPhoneNumberValid } from "../../utils/validation";

// ===== components import =====
import ErrorMessage from "../Common/ErrorMessage";
import InputField from "../Common/InputField";

// ===== component =====
const FindPwForm = () => {
  // === ref ===
  const idRef = useRef("");
  const nameRef = useRef("");

  // === state ===
  const [phonenumber, setPhonenumber] = useState("");
  const [findPwError, setFindPwError] = useState(false);

  // === navigate ===
  const navigate = useNavigate();

  useEffect(() => {
    // 비밀번호 찾기 성공 시, 비밀번호 변경 페이지로 이동
    // 비밀번호 찾기 실패 시, Error Message 출력
  }, []);

  // props를 통해 전화번호 받아오고, state에 저장
  const handleSendPhonenumber = (phone) => {
    setPhonenumber(phone);
  };

  const handleFindPw = () => {
    const id = idRef.current.value;
    const name = nameRef.current.value;

    if (!isIdValid(id) || !isNameValid(name) || !isPhoneNumberValid(phonenumber)) {
      setFindPwError("입력하신 정보를 확인해 주세요.");
    } else {
      // 비밀번호 찾기 API 호출 코드
      const status = 200;

      if (status === 400) {
        setFindPwError("입력하신 정보를 확인해 주세요.");
      } else if (status === 404) {
        setFindPwError("해당 정보가 존재하지 않습니다.");
      } else {
        // 비밀번호 변경 페이지로 이동
        navigate("/changepw");
      }
    }
  };

  return (
    <>
      {/* 비밀번호 찾기 Input Field */}
      <FlexBox $dir="col" $row="between" $width="25.625rem" $height="22rem">
        <InputField
          hasLabel="true"
          labelMessage="아이디"
          fontSize="18px"
          type="text"
          inputRef={idRef}
        />
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
        {findPwError && <ErrorMessage message={findPwError} />}
      </FlexBox>

      {/* 비밀번호 찾기 Button */}
      <Button $width="25.625rem" $height="5rem" $margin="30px 0 30px 0" onClick={handleFindPw}>
        확인
      </Button>

      {/* 로그인, 아이디 찾기 페이지로 이동 */}
      <FlexBox $row="between" $width="25.625rem" $margin="15px 0 0 0">
        <Div
          $width="20.813rem"
          $textAlign="center"
          $borderTop="2px solid white"
          $borderBottom="2px solid white"
          $padding="20px 0 20px 0"
        >
          <Span $fontSize="12px" $textColor="#FFFFFF" $margin="0 5px 0 0">
            비밀번호가 생각나셨나요?
          </Span>
          <Link to="/login">
            <Span $fontSize="12px">로그인하기</Span>
          </Link>
        </Div>

        {/* 비밀번호 찾기 Link Button */}
        <Div
          $width="20.813rem"
          $textAlign="center"
          $borderTop="2px solid white"
          $borderBottom="2px solid white"
          $padding="20px 0 20px 0"
        >
          <Span $fontSize="12px" $textColor="#FFFFFF" $margin="0 5px 0 0">
            아이디를 잊으셨나요?
          </Span>
          <Link to="/findid">
            <Span $fontSize="12px">아이디 찾기</Span>
          </Link>
        </Div>
      </FlexBox>
    </>
  );
};

export default FindPwForm;
