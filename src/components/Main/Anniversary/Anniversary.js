import React from "react";

// ===== stlyes import =====
import { Button } from "../../../styles/ButtonStyle";
import FlexBox from "../../../styles/FlexStyle";
import P from "../../../styles/TextStyle";
import { EditIcon } from "../../../styles/IconStyle";

// ===== components import =====
import InputField from "../../Common/InputField/InputField";
import ErrorMessage from "../../Common/ErrorMessage/ErrorMessage";
import AlertModal from "../../Modal/Alert/AlertModal";

// ===== hook import =====
import useAnniversary from "./useEditAnniversary";

// ===== component =====
const Anniversary = ({ anniversary }) => {
  // === useAnniversary ===
  const {
    firstDayRef,
    isAnniversaryEditMode,
    isToggledEditButton,
    anniversaryError,
    tokenErrorModalOpen,
    ourAnniversary,
    navigate,
    handleClickEditModeButton,
    handleClickCancelButton,
    handleClickSaveButton,
  } = useAnniversary(anniversary);

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

      {isAnniversaryEditMode ? (
        <>
          <FlexBox $width="30.625rem" $row="between" $col="center">
            <FlexBox $width="18.75rem">
              <InputField type="date" inputRef={firstDayRef} />
            </FlexBox>

            <FlexBox $width="10.625rem" $row="between">
              <Button
                $width="5rem"
                $height="4.375rem"
                $fontSize="20px"
                onClick={handleClickSaveButton}
              >
                저장
              </Button>
              <Button
                $width="5rem"
                $height="4.375rem"
                $fontSize="20px"
                $backgroundColor="#d9d9d9"
                onClick={handleClickCancelButton}
              >
                취소
              </Button>
            </FlexBox>
          </FlexBox>

          <FlexBox $width="30.625rem">
            {anniversaryError && <ErrorMessage message={anniversaryError} />}
          </FlexBox>
        </>
      ) : (
        <>
          <FlexBox $width="12rem" $height="3rem" $row="between" $col="center">
            <P $fontSize="36px">D + {ourAnniversary}</P>
            {isToggledEditButton.isAnniversaryEditButtonVisible && (
              <Button
                $backgroundColor="transparent"
                $hoverColor="transparent"
                onClick={handleClickEditModeButton}
              >
                <EditIcon width="28px" height="28px" />
              </Button>
            )}
          </FlexBox>
        </>
      )}
    </>
  );
};

export default Anniversary;
