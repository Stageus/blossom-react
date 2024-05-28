import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ===== styles import =====
import { Img } from "../../styles/ImgStyle";
import Div from "../../styles/LayoutStyle";
import { Button } from "../../styles/ButtonStyle";

import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"; // 수정 아이콘

// ===== components import =====
import ImageUploader from "../Common/ImageUploader";
import AlertModal from "../Modal/AlertModal";

// ===== recoil import =====
import { isClickedEditButton } from "../../recoil/editButtonState";

// ===== style =====
const StyledRelativeDiv = styled(Div)`
  position: relative;
`;

const StyledAbsoluteButton = styled(Button)`
  position: absolute;
  top: 4px;
  right: 4px;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: 24px;
  height: 24px;
  color: #d9d9d9;
`;

// ===== component =====
const Thumbnail = ({ thumbnail }) => {
  // === state ===
  const [ourThumbnail, setOurThumbnail] = useState("");
  const [isThumbnailEditMode, setIsThumbnailEditMode] = useState(false);
  const [isToggledEditButton, setIsToggledEditButton] = useRecoilState(isClickedEditButton);
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

  const handleFile = (image) => {
    setOurThumbnail(image);
  };

  const handleCloseErrorModal = () => {
    navigate("/login");
  };

  return (
    <>
      {tokenErrorModalOpen && (
        <AlertModal hasFunc={true} message="로그인이 필요합니다." onClick={handleCloseErrorModal} />
      )}

      {uploadErrorModalOpen && <AlertModal message={message} setIsOpen={setUploadErrorModalOpen} />}

      {isThumbnailEditMode ? (
        <ImageUploader
          onSelectImage={handleFile}
          onSaveButtonClick={handleClickSaveButton}
          onCancelButtonClick={handleClickCancelButton}
        />
      ) : (
        <StyledRelativeDiv $width="36.75rem" $height="36.75rem" $margin="10px 0 0 0">
          <Img $width="36.75rem" $height="36.75rem" src={ourThumbnail} />
          {isToggledEditButton.isThumbnailEditButtonVisible && (
            <StyledAbsoluteButton
              $backgroundColor="transparent"
              $hoverColor="transparent"
              onClick={handleClickEditModeButton}
            >
              <StyledFontAwesomeIcon icon={faPenToSquare} />
            </StyledAbsoluteButton>
          )}
        </StyledRelativeDiv>
      )}
    </>
  );
};

export default Thumbnail;
