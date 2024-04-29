import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// ===== styles import =====
import FlexBox from "../../styles/FlexStyle";
import P from "../../styles/TextStyle";
import { Button } from "../../styles/ButtonStyle";

// ===== utils import =====
import { isIdValid } from "../../utils/validation";

// ===== components import =====
import InputField from "../Common/InputField";
import ErrorMessage from "../Common/ErrorMessage";
import AlertModal from "../Modal/AlertModal";

// ===== component =====
const MatchingForm = () => {
  // === ref ===
  const idRef = useRef("");

  // === state ===
  const [inquiryError, setInquiryError] = useState(false);
  const [matchingError, setMatchingError] = useState(false);
  const [hasLoverId, setHasLoverId] = useState(false);
  const [tokenErrorModalOpen, setTokenErrorModalOpen] = useState(false);
  const [data, setData] = useState([]);

  // === navigate ===
  const navigate = useNavigate();

  useEffect(() => {
    // 상대방 아이디 조회 성공 시, 상대방 아이디 출력
    if (hasLoverId === true) {
      const userData = {
        id: "jephpp",
        name: "김해원",
      };
      setData(userData);
    }
    // 상대방 아이디 조회 실패 시, Error Message 출력
    // 매칭 성공 시, 초기 설정 페이지로 이동
    // 매칭 실패 시, 페이지 새로고침
  }, [hasLoverId]);

  const handleClickCancelButton = () => {
    window.location.reload();
  };

  const handleCloseErrorModal = () => {
    navigate("/login");
  };

  const handleClickInquiryLoverIdButton = () => {
    const id = idRef.current.value;

    if (!isIdValid(id)) {
      setInquiryError("존재하지 않는 아이디입니다");
    } else {
      // 상대방 아이디 조회 API 호출 코드
      const status = 200;

      if (status === 400) {
        setInquiryError("존재하지 않는 아이디입니다.");
      } else if (status === 401) {
        setInquiryError("");
        setTokenErrorModalOpen(true);
      } else if (status === 404) {
        setInquiryError("존재하지 않는 아이디입니다.");
      } else if (status === 500) {
        return;
      } else {
        setInquiryError("");
        setHasLoverId(true);
      }
    }
  };

  const handleClickMatchingButton = () => {
    // 커플 매칭 API 호출 코드
    const status = 401;

    if (status === 400) {
      setMatchingError("매칭이 불가한 아이디입니다.");
    } else if (status === 401) {
      setMatchingError("");
      setTokenErrorModalOpen(true);
    } else if (status === 409) {
      setMatchingError("매칭이 불가한 아이디입니다.");
    } else if (status === 500) {
      return;
    } else {
      setMatchingError("");
      navigate("/setup");
    }
  };

  return (
    <>
      {tokenErrorModalOpen && (
        <AlertModal hasFunc={true} message="로그인이 필요합니다." onClick={handleCloseErrorModal} />
      )}

      {hasLoverId ? (
        <>
          <FlexBox
            $dir="col"
            $row={matchingError ? "between" : "center"}
            $width="25.625rem"
            $height="3rem"
          >
            <FlexBox $width="25.625rem">
              <P $textColor="#E9B2BC">
                {data.name} ({data.id})
              </P>
              <P $margin="0 0 0 5px">님을 연인으로 지정합니다.</P>
            </FlexBox>

            {matchingError && <ErrorMessage message={matchingError} />}
          </FlexBox>

          <FlexBox $row="between" $width="25.625rem" $margin="30px 0 0 0">
            <Button $width="12rem" onClick={handleClickMatchingButton}>
              확인
            </Button>
            <Button $width="12rem" $backgroundColor="#D6D6D6" onClick={handleClickCancelButton}>
              취소
            </Button>
          </FlexBox>
        </>
      ) : (
        <>
          <FlexBox $dir="col" $row="between" $width="25.625rem" $height="8rem">
            <InputField hasLabel="true" labelMessage="아이디" fontSize="18px" inputRef={idRef} />

            {inquiryError && <ErrorMessage message={inquiryError} />}
          </FlexBox>

          <Button
            $width="25.625rem"
            $height="5rem"
            $margin="30px 0 0 0"
            onClick={handleClickInquiryLoverIdButton}
          >
            조회
          </Button>
        </>
      )}
    </>
  );
};

export default MatchingForm;
