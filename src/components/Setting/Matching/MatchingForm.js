import React from "react";
import { useNavigate } from "react-router-dom";

// ===== styles import =====
import FlexBox from "../../../styles/FlexStyle";
import P from "../../../styles/TextStyle";
import { Button } from "../../../styles/ButtonStyle";
// ===== components import =====
import InputField from "../../Common/InputField/InputField";
import ErrorMessage from "../../Common/ErrorMessage/ErrorMessage";
import AlertModal from "../../Modal/AlertModal";
// ===== hooks import =====
import useMatching from "./useMatching";

// ===== component =====
const MatchingForm = () => {
  // === navigate ===
  const navigate = useNavigate();
  // === useMatching ===
  const {
    idRef,
    submitRef,
    inquiryError,
    matchingError,
    hasLoverId,
    tokenErrorModalOpen,
    findData,
    handleClickInquiryLoverIdButton,
    handleClickMatchingButton,
  } = useMatching();
  // === return ===
  return (
    <>
      {tokenErrorModalOpen && (
        <AlertModal
          hasFunc={true}
          message="로그인이 필요합니다."
          onClick={() => navigate("/login")}
        />
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
                {findData.name} ({findData.id})
              </P>
              <P $margin="0 0 0 5px">님을 연인으로 지정합니다.</P>
            </FlexBox>

            {matchingError && <ErrorMessage message={matchingError} />}
          </FlexBox>

          <FlexBox $row="between" $width="25.625rem" $margin="30px 0 0 0">
            <Button $width="12rem" onClick={handleClickMatchingButton}>
              확인
            </Button>
            <Button
              $width="12rem"
              $backgroundColor="#D6D6D6"
              onClick={() => window.location.reload()}
            >
              취소
            </Button>
          </FlexBox>
        </>
      ) : (
        <>
          <FlexBox $dir="col" $row="between" $width="25.625rem" $height="8rem">
            <InputField
              hasLabel="true"
              labelMessage="아이디"
              padding="0 0 0 10px"
              border="3px solid #FFC4D0"
              borderRadius="8px"
              fontSize="18px"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  submitRef.current.click();
                }
              }}
              inputRef={idRef}
            />

            {inquiryError && <ErrorMessage message={inquiryError} />}
          </FlexBox>

          <Button
            $width="25.625rem"
            $height="5rem"
            $margin="30px 0 0 0"
            $borderRadius="8px"
            ref={submitRef}
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
