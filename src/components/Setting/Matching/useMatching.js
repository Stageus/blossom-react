import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// ===== utils & hook import =====
import { isIdValid } from "../../../utils/validation";
import useAxios from "../../../hooks/useAxios";

// ===== custom hook =====
const useMatching = () => {
  // === ref ===
  const idRef = useRef("");
  const submitRef = useRef(null);

  // === state ===
  const [inquiryError, setInquiryError] = useState(false);
  const [matchingError, setMatchingError] = useState(false);
  const [hasLoverId, setHasLoverId] = useState(false);
  const [tokenErrorModalOpen, setTokenErrorModalOpen] = useState(false);
  const [findData, setFindData] = useState([]);

  // === navigate ===
  const navigate = useNavigate();

  // === api ===
  // 1) 상대방 아이디 조회 API
  const {
    data: inquiryData,
    statusCode: inquiryStatusCode,
    fetchData: fetchInquiryData,
  } = useAxios("/couple/find/partner", "POST", {}, true, false);

  // 2) 커플 매칭 API (partnerIdx는 어디서 가져오는지?)
  const {
    data: matchingData,
    statusCode: matchingStatusCode,
    fetchData: fetchMatchingData,
  } = useAxios("/couple/${partnerIdx}", "POST", {}, true, false);

  // === useEffect ===
  useEffect(() => {
    if (hasLoverId) {
      setFindData(inquiryData); // 데이터 저장
    }

    if (inquiryStatusCode === 200) {
      setInquiryError("");
      setHasLoverId(true);
    } else if (inquiryStatusCode === 400 || inquiryStatusCode === 404) {
      setInquiryError("존재하지 않는 아이디입니다.");
    } else if (inquiryStatusCode === 401) {
      setInquiryError("");
      setTokenErrorModalOpen(true);
    } else if (inquiryStatusCode === 500) {
      setInquiryError("서버 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
    }

    if (matchingStatusCode === 200) {
      setMatchingError("");
      navigate("/setup");
    } else if (matchingStatusCode === 400 || matchingStatusCode === 409) {
      setMatchingError("매칭이 불가한 아이디입니다.");
    } else if (matchingStatusCode === 401) {
      setMatchingError("");
      setTokenErrorModalOpen(true);
    } else if (matchingStatusCode === 500) {
      setInquiryError("서버 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
    }
  }, [hasLoverId, inquiryStatusCode, matchingStatusCode, inquiryData, navigate]);

  // 상대방 아이디 조회 버튼 클릭 시, 실행되는 이벤트 함수
  const handleClickInquiryLoverIdButton = async () => {
    const id = idRef.current.value;

    if (!isIdValid(id)) {
      setInquiryError("존재하지 않는 아이디입니다");
    } else {
      setInquiryError("");
      await fetchInquiryData({
        body: {
          partnerId: id,
        },
      });
    }
  };

  // 매칭하기 버튼 클릭 시, 실행되는 이벤트 함수
  const handleClickMatchingButton = async () => {
    // 커플 매칭 API 호출
    await fetchMatchingData({});
  };

  return {
    idRef,
    submitRef,
    inquiryError,
    matchingError,
    hasLoverId,
    tokenErrorModalOpen,
    findData,
    handleClickInquiryLoverIdButton,
    handleClickMatchingButton,
  };
};

export default useMatching;
