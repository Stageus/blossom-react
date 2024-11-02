import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

// ===== styles import =====
import { Img } from "../../styles/ImgStyle";
import Div from "../../styles/LayoutStyle";
import { Button } from "../../styles/ButtonStyle";

// ===== recoil import =====
import { isClickedEditButtonState } from "../../recoil/editButtonState";

// ===== components import =====
import ImageUploader from "../Common/ImageUploader/ImageUploader";
import AlertModal from "../Modal/AlertModal";

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
  // === state & recoil ===
  const [ourThumbnail, setOurThumbnail] = useState("");
  const [isThumbnailEditMode, setIsThumbnailEditMode] = useState(false);
  const [isToggledEditButton, setIsToggledEditButton] = useRecoilState(isClickedEditButtonState);
  const [uploadErrorModalOpen, setUploadErrorModalOpen] = useState(false);
  const [tokenErrorModalOpen, setTokenErrorModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  // === navigate ===
  const navigate = useNavigate();

  useEffect(() => {
    // 대표 사진 업로드 성공 시,
    // 대표 사진 업로드 실패 시,
    setOurThumbnail(thumbnail);
  }, [thumbnail]);

  // 수정 버튼 클릭 시
  const handleClickEditModeButton = () => {
    setIsThumbnailEditMode(true);

    setIsToggledEditButton((prevState) => ({
      ...prevState,
      isAnniversaryEditButtonVisible: false,
      isNicknameEditButtonVisible: false,
    }));
  };

  // 취소 버튼 클릭 시
  const handleClickCancelButton = () => {
    setOurThumbnail(thumbnail); // 기존 이미지 할당
    setIsThumbnailEditMode(false);

    setIsToggledEditButton((prevState) => ({
      ...prevState,
      isAnniversaryEditButtonVisible: true,
      isNicknameEditButtonVisible: true,
    }));
  };

  // 저장 버튼 클릭 시
  const handleClickSaveButton = () => {
    // 대표 사진 수정하기 API 호출 코드
    const status = 200;

    if (status === 400) {
      setMessage("업로드한 대표 사진을 다시 확인해 주세요");
    } else if (status === 401) {
      setTokenErrorModalOpen(true);
    } else if (status === 403) {
      setMessage("우리의 대표 사진만 수정 가능합니다.");
    } else if (status === 404) {
      setMessage("업로드한 대표 사진을 다시 확인해 주세요");
    } else if (status === 500) {
      return;
    } else {
      setIsThumbnailEditMode(false);

      setIsToggledEditButton((prevState) => ({
        ...prevState,
        isAnniversaryEditButtonVisible: true,
        isNicknameEditButtonVisible: true,
      }));
    }
  };

  const handleFile = (preview) => {
    if (preview) {
      setOurThumbnail(preview);
    } else {
      setOurThumbnail(thumbnail);
    }
  };

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
          <Img $width="36.75rem" $height="36.75rem" src={ourThumbnail} />
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
