import React from "react";
import styled from "styled-components";

// ===== styles import =====
import { Img } from "../../../styles/ImgStyle";
import Div from "../../../styles/LayoutStyle";
import { Button } from "../../../styles/ButtonStyle";

// ===== components import =====
import ImageUploader from "../../Common/ImageUploader/ImageUploader";
import AlertModal from "../../Modal/Alert/AlertModal";

// ===== hook import =====
import useEditThumbnail from "./useEditThumbnail";

// ===== style =====
const StyledRelativeDiv = styled(Div)`
  position: relative;
`;

const StyledAbsoluteButton = styled(Button)`
  position: absolute;
  bottom: ${(props) => props.$bottom || null};
  right: ${(props) => props.$right || null};

  background-color: ${(props) => props.$backgroundColor || "transparent"};
  &:hover {
    background-color: ${(props) => props.$hoverColor || "transparent"};
  }
`;

// ===== component =====
const Thumbnail = ({ thumbnail }) => {
  // === useEditThumbnail ===
  const {
    ourThumbnail,
    isThumbnailEditMode,
    isToggledEditButton,
    uploadErrorModalOpen,
    setUploadErrorModalOpen,
    tokenErrorModalOpen,
    message,
    navigate,
    handleClickEditModeButton,
    handleClickCancelButton,
    handleClickSaveButton,
    handleFile,
  } = useEditThumbnail(thumbnail);

  return (
    <>
      {tokenErrorModalOpen && (
        <AlertModal
          hasFunc={true}
          message="로그인이 필요합니다."
          onClick={() => navigate("/login")}
        />
      )}

      {uploadErrorModalOpen && <AlertModal message={message} setIsOpen={setUploadErrorModalOpen} />}

      <>
        <StyledRelativeDiv $width="36.75rem" $height="36.75rem" $margin="10px 0 0 0">
          <Img $width="36.75rem" $height="36.75rem" $borderRadius="0.75rem" src={ourThumbnail} />
          {isToggledEditButton.isThumbnailEditButtonVisible && (
            <ImageUploader
              onSelectImage={handleFile}
              onClick={handleClickEditModeButton}
              isEditMode={isThumbnailEditMode}
            />
          )}

          {isThumbnailEditMode && (
            <>
              <StyledAbsoluteButton
                $bottom="4px"
                $right="54px"
                $fontSize="24px"
                $backgroundColor="#ffffff"
                onClick={handleClickSaveButton}
              >
                확인
              </StyledAbsoluteButton>
              <StyledAbsoluteButton
                $bottom="4px"
                $right="4px"
                $fontSize="24px"
                $backgroundColor="#ffffff"
                onClick={handleClickCancelButton}
              >
                취소
              </StyledAbsoluteButton>
            </>
          )}
        </StyledRelativeDiv>
      </>
    </>
  );
};

export default Thumbnail;
