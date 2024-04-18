import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// ===== styles import =====
import FlexBox from "../../styles/FlexStyle";
import { Button } from "../../styles/ButtonStyle";
import { P } from "../../styles/TextStyle";
import { Tr, Td } from "../../styles/LayoutStyle";

// ===== utils import =====
import { isIdValid, isPwValid, isNameValid, isPhoneNumberValid } from "../../utils/validation";

// ===== components & images import =====
import InputField from "../../components/Common/InputField";
import ErrorMessage from "../../components/Common/ErrorMessage";
import ConfirmModal from "../../components/Modal/ConfirmModal";
import AlertModal from "../../components/Modal/AlertModal";

// ===== component =====
const SignupForm = () => {
  // === ref ===
  const idRef = useRef("");
  const pwRef = useRef("");
  const confirmPwRef = useRef("");
  const nameRef = useRef("");
  const birthdayRef = useRef("");

  // === state ===
  // (에러 메세지 관련)
  const [idError, setIdError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPwError, setConfirmPwError] = useState("");
  const [nameError, setNameError] = useState("");
  const [phonenumberError, setPhonenumberError] = useState("");
  const [birthdayError, setBirthdayError] = useState("");

  const [isIdAvailable, setIsIdAvailable] = useState(false); // id 사용 가능 설정 state
  const [isDuplicationModalOpen, setIsDuplicationModalOpen] = useState(false); // 중복 확인 modal state
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false); // 회원가입 실패 modal state
  const [isDisable, setIsDisable] = useState(false); // 중복 확인 후 input, button disable 설정 state

  // === navigate ===
  const navigate = useNavigate();

  useEffect(() => {
    // 중복확인
    // 성공 시, Confirm Modal 출력
    // 실패 시, Error Message 출력
    // =====
    // 회원가입
    // 성공 시, 로그인 페이지로 이동
    // 실패 시, Alert Modal 출력
  }, []);

  // 아이디 유효성 검사
  const handleValidateId = () => {
    const id = idRef.current.value;

    if (!isIdValid(id)) {
      setIdError("아이디 형식이 올바르지 않습니다.");
    } else {
      setIdError("");
    }
  };

  // 비밀번호 유효성 검사
  const handleValidatePassword = () => {
    const password = pwRef.current.value;

    if (!isPwValid(password)) {
      setPasswordError("비밀번호 형식이 올바르지 않습니다.");
    } else {
      setPasswordError("");
    }
  };

  // 비밀번호 일치 검사
  const handleConfirmPassword = () => {
    const password = pwRef.current.value;
    const confirmPassword = confirmPwRef.current.value;

    if (password !== confirmPassword || confirmPassword.trim() === "") {
      setConfirmPwError("비밀번호가 일치하지 않습니다.");
    } else {
      setConfirmPwError("");
    }
  };

  // 이름 유효성 검사
  const handleValidateName = () => {
    const name = nameRef.current.value;

    if (!isNameValid(name)) {
      setNameError("이름 형식이 올바르지 않습니다.");
    } else {
      setNameError("");
    }
  };

  // 전화번호 유효성 검사
  const handleValidatePhonenumber = (phonenumber) => {
    if (!isPhoneNumberValid(phonenumber)) {
      setPhonenumberError("전화번호 형식이 올바르지 않습니다.");
    } else {
      setPhonenumberError("");
    }
  };

  // 생년월일 유효성 검사
  const handleValidateBirthday = () => {
    const birthday = birthdayRef.current.value;

    if (birthday.trim() === "") {
      setBirthdayError("생년월일 형식이 올바르지 않습니다.");
    } else {
      setBirthdayError("");
    }
  };

  // 중복 확인 버튼 클릭 시, 실행되는 이벤트 함수
  const handleDuplicateId = () => {
    const id = idRef.current.value;

    if (!isIdValid(id)) {
      setIdError("아이디 형식이 올바르지 않습니다.");
    } else {
      // 중복 확인 API 호출 코드
      const status = 200;

      if (status === 400) {
        setIdError("사용 불가한 아이디입니다.");
      } else {
        setIsDuplicationModalOpen(true);
      }
    }
  };

  const handleUseId = () => {
    setIsDuplicationModalOpen(false); // 중복 확인 Modal 닫기
    setIsDisable(true); // input, button disabled 설정
    setIsIdAvailable(true); // id 사용 가능
  };

  // 회원가입 버튼 클릭 시, 실행되는 이벤트 함수
  const handleSignup = () => {
    // input 유효성 검사 통과 및 중복 확인 통과 확인
    if (
      !idError &&
      !passwordError &&
      !confirmPwError &&
      !nameError &&
      !phonenumberError &&
      !birthdayError &&
      isIdAvailable
    ) {
      // 회원가입 API 호출 코드
      const status = 200;

      if (status === 400) {
        setIsAlertModalOpen(true);
      } else if (status === 500) {
        return;
      } else {
        navigate("/login");
      }
    } else {
      setIsAlertModalOpen(true);
    }
  };

  return (
    <>
      {/* 아이디 중복 확인 Modal */}
      {isDuplicationModalOpen && (
        <ConfirmModal
          message={["사용 가능한 아이디입니다.", "사용하시겠습니까?"]}
          setIsOpen={setIsDuplicationModalOpen}
          onClick={handleUseId}
        />
      )}

      {/* 회원가입 실패 알림 Modal */}
      {isAlertModalOpen && (
        <AlertModal message="회원가입에 실패했습니다." setIsOpen={setIsAlertModalOpen} />
      )}

      {/* 회원가입 입력칸 */}
      <table>
        <tbody>
          <>
            <Td>
              <P $fontSize="32px">아이디</P>
            </Td>
            <Td>
              <FlexBox $row="between" $width="38.5rem">
                <InputField
                  margin="0 0 10px 0"
                  width="29rem"
                  placeholderMessage="4 ~ 11자를 입력해 주세요."
                  inputRef={idRef}
                  onBlur={handleValidateId}
                  disabled={isDisable}
                />
                <Button
                  $width="7.75rem"
                  $height="4.375rem"
                  $size="24px"
                  disabled={isDisable}
                  onClick={handleDuplicateId}
                >
                  중복 확인
                </Button>
              </FlexBox>
              {idError && <ErrorMessage message={idError} />}
            </Td>
          </>
          <Tr>
            <Td>
              <P $fontSize="32px">비밀번호</P>
            </Td>
            <Td>
              <InputField
                margin="15px 0 10px 0"
                placeholderMessage="영어, 숫자를 필수 포함한 8자 ~ 15자를 입력해 주세요."
                type="password"
                inputRef={pwRef}
                onBlur={handleValidatePassword}
              />
              {passwordError && <ErrorMessage message={passwordError} />}
            </Td>
          </Tr>
          <Tr>
            <Td>
              <P $fontSize="32px" $margin="0 20px 0 0">
                비밀번호 확인
              </P>
            </Td>
            <Td>
              <InputField
                margin="15px 0 10px 0"
                placeholderMessage="입력하신 비밀번호와 동일하게 입력해 주세요."
                type="password"
                inputRef={confirmPwRef}
                onBlur={handleConfirmPassword}
              />
              {confirmPwError && <ErrorMessage message={confirmPwError} />}
            </Td>
          </Tr>
          <Tr>
            <Td>
              <P $fontSize="32px">이름</P>
            </Td>
            <Td>
              <InputField
                margin="15px 0 10px 0"
                placeholderMessage="2자 ~ 30자를 입력해 주세요"
                inputRef={nameRef}
                onBlur={handleValidateName}
              />
              {nameError && <ErrorMessage message={nameError} />}
            </Td>
          </Tr>
          <Tr>
            <Td>
              <P $fontSize="32px">전화번호</P>
            </Td>
            <Td>
              <InputField
                inputType="phone"
                margin="15px 0 10px 0"
                onValidateAndSend={handleValidatePhonenumber}
              />
              {phonenumberError && <ErrorMessage message={phonenumberError} />}
            </Td>
          </Tr>
          <Tr>
            <Td>
              <P $fontSize="32px">생년월일</P>
            </Td>
            <Td>
              <InputField
                margin="15px 0 10px 0"
                type="date"
                inputRef={birthdayRef}
                onBlur={handleValidateBirthday}
              />
              {birthdayError && <ErrorMessage message={birthdayError} />}
            </Td>
          </Tr>
        </tbody>
      </table>

      {/* 회원가입 버튼 */}
      <FlexBox $width="52rem" $row="center" $margin="30px 0 0 0">
        <Button $width="38.5rem" $height="4.375rem" onClick={handleSignup}>
          가입하기
        </Button>
      </FlexBox>
    </>
  );
};

export default SignupForm;
