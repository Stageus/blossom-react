import { useState, useRef } from "react";

// ===== utils & hooks import =====
import { isNameValid, isPhoneNumberValid } from "../../../utils/validation";
import useAxios from "../../../hooks/useAxios";

// ===== custom hook =====
const useFindId = () => {
  // === ref ===
  const nameRef = useRef("");
  const submitRef = useRef(null);
  // === state ===
  const [phonenumber, setPhonenumber] = useState("");
  const [userId, setUserId] = useState("");
  const [hasUserId, setHasUserId] = useState(false);
  const [findIdError, setFindIdError] = useState("");
  // === api ===
  const { data, statusCode, fetchData } = useAxios(
    "/account/find/id", // 아이디 찾기 api 주소, 추후 백엔드 서버 구축 후 연결
    "GET",
    {},
    false,
    false,
  );

  // props를 통해 전화번호 받아오고, state에 저장
  const handleSendPhonenumber = (phone) => {
    setPhonenumber(phone);
  };

  const handleFindId = async () => {
    const name = nameRef.current.value;

    // 아이디, 전화번호 유효성 검사
    if (!isNameValid(name) || !isPhoneNumberValid(phonenumber)) {
      setFindIdError("이름 혹은 전화번호를 확인해 주세요.");
    } else {
      setFindIdError("");

      // 아이디 찾기 API 호출
      await fetchData({
        body: { name, tel: phonenumber },
      });

      console.log("들어옴");

      // 아이디 찾기 성공 및 실패 처리
      if (statusCode === 200) {
        setHasUserId(true);
        setUserId(data.id);
      } else if (statusCode === 400) {
        setFindIdError("이름 혹은 전화번호를 확인해 주세요.");
      } else if (statusCode === 404) {
        setFindIdError("해당 정보가 존재하지 않습니다.");
      } else if (statusCode === 500) {
        setFindIdError("서버 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
      }
    }
  };

  // === return ===
  return {
    nameRef,
    submitRef,
    userId,
    hasUserId,
    findIdError,
    handleSendPhonenumber,
    handleFindId,
  };
};

export default useFindId;
