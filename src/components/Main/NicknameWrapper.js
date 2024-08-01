import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ===== styles import =====
import FlexBox from "../../styles/FlexStyle";
import P from "../../styles/TextStyle";
import { Button } from "../../styles/ButtonStyle";
import Div from "../../styles/LayoutStyle";

import { faHeart } from "@fortawesome/free-solid-svg-icons"; // 하트 아이콘
import { faUserPen } from "@fortawesome/free-solid-svg-icons"; // 수정 아이콘

// ===== recoil & utils import =====
import { isClickedEditButtonState } from "../../recoil/editButtonState";
import { isNameValid } from "../../utils/validation";

// ===== components import =====
import InputField from "../Common/InputField";
import ErrorMessage from "../Common/ErrorMessage";
import AlertModal from "../Modal/AlertModal";

// ===== style =====
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: 65px;
  height: 65px;
  color: #ff6c6c;
`;

// ===== component =====
const NicknameWrapper = ({ myNickname, loverNickname }) => {
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
      // 애칭 수정 API 호출 코드
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

  return (
    <>
      {tokenErrorModalOpen && <AlertModal />}

      {isNicknameEditMode ? (
        <>
          <FlexBox $width="36.75rem" $row="between" $margin="10px 0 0 0">
            {/* 내 닉네임 입력칸 */}
            <FlexBox $dir="col">
              <InputField
                width="15rem"
                fontSize="18px"
                inputRef={myNicknameRef}
                defaultValue={fixedMyNickname}
              />
              <P $textColor="#d9d9d9" $fontSize="12px">
                내 애칭을 입력해 주세요.
              </P>
            </FlexBox>

            <StyledFontAwesomeIcon icon={faHeart} />

            {/* 연인 닉네임 입력칸 */}
            <FlexBox $dir="col">
              <InputField
                width="15rem"
                fontSize="18px"
                inputRef={loverNicknameRef}
                defaultValue={fixedLoverNickname}
              />
              <P $textColor="#d9d9d9" $fontSize="12px">
                연인 애칭을 입력해 주세요.
              </P>
            </FlexBox>

            {nicknameError && <ErrorMessage message={nicknameError} />}
          </FlexBox>

          <FlexBox $width="15rem" $row="between" $margin="15px 0 0 0">
            <Button $width="7rem" $height="3rem" $fontSize="20px" onClick={handleClickSaveButton}>
              저장
            </Button>
            <Button
              $width="7rem"
              $height="3rem"
              $fontSize="20px"
              $backgroundColor="#d9d9d9"
              onClick={handleClickCancelButton}
            >
              취소
            </Button>
          </FlexBox>
        </>
      ) : (
        <FlexBox $width="36.75rem" $row="between" $margin="10px 0 0 0">
          {/* 내 닉네임 */}
          <FlexBox
            $width="12.188rem"
            $row="center"
            $col="center"
            $borderBottom="2px solid black"
            $margin="10px 0 0 0"
          >
            {isToggledEditButton.isNicknameEditButtonVisible && (
              <Button
                $backgroundColor="transparent"
                $hoverColor="transparent"
                $margin="0 10px 0 0"
                onClick={handleClickEditModeButton}
              >
                <FontAwesomeIcon icon={faUserPen} />
              </Button>
            )}
            <P $fontSize="24px">{fixedMyNickname}</P>
          </FlexBox>

          <StyledFontAwesomeIcon icon={faHeart} />

          {/* 연인 닉네임 */}
          <FlexBox
            $width="12.188rem"
            $row="center"
            $col="center"
            $borderBottom="2px solid black"
            $margin="10px 0 0 0"
          >
            {isToggledEditButton.isNicknameEditButtonVisible && (
              <Button
                $backgroundColor="transparent"
                $hoverColor="transparent"
                $margin="0 10px 0 0"
                onClick={handleClickEditModeButton}
              >
                <FontAwesomeIcon icon={faUserPen} />
              </Button>
            )}
            <P $fontSize="24px">{fixedLoverNickname}</P>
          </FlexBox>
        </FlexBox>
      )}
    </>
  );
};

export default NicknameWrapper;
