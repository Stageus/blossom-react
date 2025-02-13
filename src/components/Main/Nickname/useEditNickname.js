import { useState, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

// ===== recoil & utils import =====
import { isClickedEditButtonState } from "../../../recoil/editButtonState";
import { isNameValid } from "../../../utils/validation";

// ===== custom hook =====
const useEditNickname = (myNickname, loverNickname) => {
  // === ref ===
  const myNicknameRef = useRef("");
  const loverNicknameRef = useRef("");

  // === state & recoil ===
  const [isNicknameEditMode, setIsNicknameEditMode] = useState(false);
  const [isToggledEditButton, setIsToggledEditButton] = useRecoilState(isClickedEditButtonState);
  const [nicknameError, setNicknameError] = useState("");
  const [tokenErrorModalOpen, setTokenErrorModalOpen] = useState(false);
  const [fixedMyNickname, setFixedMyNickname] = useState("");
  const [fixedLoverNickname, setFixedLoverNickname] = useState("");

  // === navigate ===
  const navigate = useNavigate();

  useEffect(() => {
    // 애칭 수정 성공 시, 수정된 애칭 출력
    // 애칭 수정 실패 시, Error Message 출력

    setFixedMyNickname(myNickname);
    setFixedLoverNickname(loverNickname);
  }, [myNickname, loverNickname]);

  // 수정 버튼 클릭 시
  const handleClickEditModeButton = () => {
    setIsNicknameEditMode(true);
    setFixedMyNickname(myNickname);
    setFixedLoverNickname(loverNickname);
    setIsToggledEditButton((prevState) => ({
      ...prevState,
      isAnniversaryEditButtonVisible: false,
      isThumbnailEditButtonVisible: false,
    }));
  };

  // 취소 버튼 클릭 시
  const handleClickCancelButton = () => {
    const inputMyNickname = myNicknameRef.current.value;
    const inputLoverNickname = loverNicknameRef.current.value;

    if (!isNameValid(inputMyNickname) || !isNameValid(inputLoverNickname)) {
      setNicknameError("입력한 애칭을 다시 확인해 주세요.");
    } else {
      setIsNicknameEditMode(false);
      setIsToggledEditButton((prevState) => ({
        ...prevState,
        isAnniversaryEditButtonVisible: true,
        isThumbnailEditButtonVisible: true,
      }));
    }
  };

  // 저장 버튼 클릭 시
  const handleClickSaveButton = () => {
    const inputMyNickname = myNicknameRef.current.value;
    const inputLoverNickname = loverNicknameRef.current.value;

    if (!isNameValid(inputMyNickname) || !isNameValid(inputLoverNickname)) {
      setNicknameError("입력한 애칭을 다시 확인해 주세요.");
    } else {
      const status = 200;

      if (status === 400) {
        setNicknameError("입력한 애칭을 다시 확인해 주세요.");
      } else if (status === 401) {
        setTokenErrorModalOpen(true);
      } else if (status === 403) {
        setNicknameError("우리의 애칭만 수정 가능합니다.");
      } else if (status === 404) {
        setNicknameError("입력한 애칭을 다시 확인해 주세요.");
      } else if (status === 500) {
        return;
      } else {
        setIsNicknameEditMode(false);
        setFixedMyNickname(inputMyNickname);
        setFixedLoverNickname(inputLoverNickname);
        setIsToggledEditButton((prevState) => ({
          ...prevState,
          isAnniversaryEditButtonVisible: true,
          isThumbnailEditButtonVisible: true,
        }));
      }
    }
  };

  return {
    myNicknameRef,
    loverNicknameRef,
    isNicknameEditMode,
    isToggledEditButton,
    nicknameError,
    tokenErrorModalOpen,
    fixedMyNickname,
    fixedLoverNickname,
    navigate,
    handleClickEditModeButton,
    handleClickCancelButton,
    handleClickSaveButton,
  };
};

export default useEditNickname;
