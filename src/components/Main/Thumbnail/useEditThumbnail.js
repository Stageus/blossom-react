import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

// ===== recoil import =====
import { isClickedEditButtonState } from "../../../recoil/editButtonState";

// ===== custom hook =====
const useEditThumbnail = (thumbnail) => {
  // ===== state =====
  const [ourThumbnail, setOurThumbnail] = useState("");
  const [isThumbnailEditMode, setIsThumbnailEditMode] = useState(false);
  const [isToggledEditButton, setIsToggledEditButton] = useRecoilState(isClickedEditButtonState);
  const [uploadErrorModalOpen, setUploadErrorModalOpen] = useState(false);
  const [tokenErrorModalOpen, setTokenErrorModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  // ===== navigate =====
  const navigate = useNavigate();

  useEffect(() => {
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
    setOurThumbnail(thumbnail);
    setIsThumbnailEditMode(false);
    setIsToggledEditButton((prevState) => ({
      ...prevState,
      isAnniversaryEditButtonVisible: true,
      isNicknameEditButtonVisible: true,
    }));
  };

  // 저장 버튼 클릭 시
  const handleClickSaveButton = () => {
    const status = 400;

    if (status === 400) {
      setUploadErrorModalOpen(true);
      setMessage("업로드한 대표 사진을 다시 확인해 주세요");
    } else if (status === 401) {
      setTokenErrorModalOpen(true);
    } else if (status === 403) {
      setUploadErrorModalOpen(true);
      setMessage("우리의 대표 사진만 수정 가능합니다.");
    } else if (status === 404) {
      setUploadErrorModalOpen(true);
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

  // 파일 업로드 시
  const handleFile = (preview) => {
    if (preview) {
      setOurThumbnail(preview);
    } else {
      setOurThumbnail(thumbnail);
    }
  };

  return {
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
  };
};

export default useEditThumbnail;
