import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

// ===== utils import =====
import { isIdValid, isNameValid, isPhoneNumberValid } from "../../../utils/validation";
import useAxios from "../../../hooks/useAxios";

// ===== custom hook =====
const useFindPw = () => {
  // === ref ===
  const idRef = useRef("");
  const nameRef = useRef("");
  const submitRef = useRef(null);
  // === state ===
  const [phonenumber, setPhonenumber] = useState("");
  const [findPwError, setFindPwError] = useState("");
  // === navigate ===
  const navigate = useNavigate();
  // === api ===
  const { data, statusCode, fetchData } = useAxios(
    "/account/find/pw", // 비밀번호 찾기 api 주소, 추후 백엔드 서버 구축 후 연결
    "GET",
    {},
    false,
    false,
  );

  // props를 통해 전화번호 받아오고, state에 저장
  const handleSendPhonenumber = (phone) => {
    setPhonenumber(phone);
  };

  const handleFindPw = async () => {
    const id = idRef.current.value;
    const name = nameRef.current.value;

    // 아이디, 이름, 전화번호 유효성 검사
    if (!isIdValid(id) || !isNameValid(name) || !isPhoneNumberValid(phonenumber)) {
      setFindPwError("입력하신 정보를 확인해 주세요.");
    } else {
      setFindPwError("");

      // 비밀번호 찾기 API 호출
      await fetchData({
        body: { id, tel: phonenumber, name },
      });

      // 비밀번호 찾기 성공 및 실패 처리
      if (statusCode === 200) {
        setFindPwError("");
        navigate("/changepw");
      } else if (statusCode === 400) {
        setFindPwError("입력하신 정보를 확인해 주세요.");
      } else if (statusCode === 404) {
        setFindPwError("해당 정보가 존재하지 않습니다.");
      } else if (statusCode === 500) {
        setFindPwError("서버 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
      }
    }
  };

  // === return ===
  return { idRef, nameRef, submitRef, findPwError, handleSendPhonenumber, handleFindPw };
};

export default useFindPw;
