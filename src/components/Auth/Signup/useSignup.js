import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// ===== utils & hook import =====
import { isIdValid, isPwValid, isNameValid, isPhoneNumberValid } from "../../../utils/validation";
import useAxios from "../../../hooks/useAxios";

// ===== custom hook =====
const useSignup = () => {
  // === ref ===
  const idRef = useRef("");
  const pwRef = useRef("");
  const confirmPwRef = useRef("");
  const nameRef = useRef("");
  const birthdayRef = useRef("");
  const submitRef = useRef(null);
  // === state ===
  const [phonenumber, setPhonenumber] = useState(""); // 전화번호 저장하는 state
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
  // === api ===
  const { data, statusCode, fetchData } = useAxios(
    "/account/login", // 로그인 api 주소, 추후 백엔드 서버 구축 후 연결
    "POST",
    {},
    false,
    false,
  );

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
  const handleValidatePhonenumber = (phone) => {
    setPhonenumber(phone);
    if (!isPhoneNumberValid(phone)) {
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

  // 중복 확인 성공 후, 아이디 사용 버튼 클릭 시, 실행되는 이벤트 함수
  const handleUseId = () => {
    setIsDuplicationModalOpen(false); // 중복 확인 Modal 닫기
    setIsDisable(true); // input, button disabled 설정
    setIsIdAvailable(true); // id 사용 가능
  };

  // 회원가입 버튼 클릭 시, 실행되는 이벤트 함수
  const handleSignup = async () => {
    const id = idRef.current.value;
    const pw = pwRef.current.value;
    const name = nameRef.current.value;
    const birthday = birthdayRef.current.value;

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
      setBirthdayError("");

      // 회원가입 API 호출 코드
      await fetchData({
        body: {
          id, // 아이디
          pw, // 비밀번호
          name, // 이름
          tel: phonenumber, // 전화번호
          birth: birthday, // 생일
        },
      });

      // 회원가입 성공 및 실패 처리
      if (statusCode === 200) {
        navigate("/login");
      } else if (statusCode === 400 || statusCode === 409) {
        setIsAlertModalOpen(true);
      } else if (statusCode === 500) {
        setBirthdayError("서버 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
      }
    } else {
      setBirthdayError("");
      setIsAlertModalOpen(true);
    }
  };

  return {
    idRef,
    pwRef,
    confirmPwRef,
    nameRef,
    birthdayRef,
    submitRef,
    idError,
    passwordError,
    confirmPwError,
    nameError,
    phonenumberError,
    birthdayError,
    isDuplicationModalOpen,
    setIsDuplicationModalOpen,
    isAlertModalOpen,
    setIsAlertModalOpen,
    isDisable,
    handleValidateId,
    handleValidatePassword,
    handleConfirmPassword,
    handleValidateName,
    handleValidatePhonenumber,
    handleValidateBirthday,
    handleDuplicateId,
    handleUseId,
    handleSignup,
  };
};

export default useSignup;
