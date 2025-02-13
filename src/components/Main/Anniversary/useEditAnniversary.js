import { useState, useRef, useEffect } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

// ===== recoil & utils import =====
import { isClickedEditButtonState } from "../../../recoil/editButtonState";
import { calculateAnniversary } from "../../../utils/calculation";

// ===== custom hook =====
const useAnniversary = (anniversary) => {
  // === ref ===
  const firstDayRef = useRef("");

  // === state ===
  const [isAnniversaryEditMode, setIsAnniversaryEditMode] = useState(false);
  const [anniversaryError, setAnniversaryError] = useState("");
  const [tokenErrorModalOpen, setTokenErrorModalOpen] = useState(false);
  const [ourAnniversary, setOurAnniversary] = useState("");
  const [isToggledEditButton, setIsToggledEditButton] = useRecoilState(isClickedEditButtonState); // recoil

  // === navigate ===
  const navigate = useNavigate();

  useEffect(() => {
    setOurAnniversary(anniversary);
  }, [anniversary]);

  const handleClickEditModeButton = () => {
    setIsAnniversaryEditMode(true);
    setIsToggledEditButton((prevState) => ({
      ...prevState,
      isNicknameEditButtonVisible: false,
      isThumbnailEditButtonVisible: false,
    }));
  };

  const handleClickCancelButton = () => {
    const firstDay = firstDayRef.current.value;

    if (firstDay.trim() === "") {
      setAnniversaryError("입력한 기념일을 다시 확인해 주세요.");
    } else {
      setIsAnniversaryEditMode(false);
      setIsToggledEditButton((prevState) => ({
        ...prevState,
        isNicknameEditButtonVisible: true,
        isThumbnailEditButtonVisible: true,
      }));
    }
  };

  const handleClickSaveButton = () => {
    const today = new Date().toISOString().slice(0, 10);
    const firstDay = firstDayRef.current.value;
    const daysUntilAnniversary = calculateAnniversary(firstDay, today);

    if (firstDay.trim() === "") {
      setAnniversaryError("입력한 기념일을 다시 확인해 주세요.");
    } else {
      const status = 200; // API 응답 시뮬레이션

      if (status === 400) {
        setAnniversaryError("입력한 기념일을 다시 확인해 주세요.");
      } else if (status === 401) {
        setTokenErrorModalOpen(true);
      } else if (status === 403) {
        setAnniversaryError("우리의 기념일만 수정 가능합니다.");
      } else if (status === 404) {
        setAnniversaryError("입력한 기념일을 다시 확인해 주세요.");
      } else if (status === 500) {
        return;
      } else {
        setIsAnniversaryEditMode(false);
        setOurAnniversary(daysUntilAnniversary);
        setIsToggledEditButton((prevState) => ({
          ...prevState,
          isNicknameEditButtonVisible: true,
          isThumbnailEditButtonVisible: true,
        }));
      }
    }
  };

  return {
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
  };
};

export default useAnniversary;
