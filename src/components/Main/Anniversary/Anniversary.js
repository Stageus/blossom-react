import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ===== styles import =====
import P from "../../../styles/TextStyle";
import FlexBox from "../../../styles/FlexStyle";
import { Button } from "../../../styles/ButtonStyle";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"; // 수정 아이콘

// ===== recoil & utils import =====
import { isClickedEditButtonState } from "../../../recoil/editButtonState";
import { calculateAnniversary } from "../../../utils/calculation";

// ===== components import =====
import InputField from "../../Common/InputField/InputField";
import ErrorMessage from "../../Common/ErrorMessage/ErrorMessage";
import AlertModal from "../../Modal/Alert/AlertModal";

// ===== style =====
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: 24px;
  height: 24px;
  color: #d9d9d9;
`;

// ===== component =====
const Anniversary = ({ anniversary }) => {
  // === ref ===
  const firstDayRef = useRef("");

  // === state & recoil ===
  const [isAnniversaryEditMode, setIsAnniversaryEditMode] = useState(false);
  const [isToggledEditButton, setIsToggledEditButton] = useRecoilState(isClickedEditButtonState);
  const [anniversaryError, setAnniversaryError] = useState("");
  const [tokenErrorModalOpen, setTokenErrorModalOpen] = useState(false);
  const [ourAnniversary, setOurAnniversary] = useState("");

  // === navigate ===
  const navigate = useNavigate();

  useEffect(() => {
    // 기념일 수정 성공 시, 수정 사항 반영
    // 기념일 수정 실패 시, Error Message 출력
    setOurAnniversary(anniversary);
  }, [anniversary]);

  // 수정 버튼 클릭 시
  const handleClickEditModeButton = () => {
    setIsAnniversaryEditMode(true);
    setIsToggledEditButton((prevState) => ({
      ...prevState,
      isNicknameEditButtonVisible: false,
      isThumbnailEditButtonVisible: false,
    }));
  };

  // 취소 버튼 클릭 시
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

  // 저장 버튼 클릭 시
  const handleClickSaveButton = () => {
    const today = new Date().toISOString().slice(0, 10);
    const firstDay = firstDayRef.current.value;

    const daysUntilAnniversary = calculateAnniversary(firstDay, today); // 디데이 계산을 통한 결과값

    if (firstDay.trim() === "") {
      setAnniversaryError("입력한 기념일을 다시 확인해 주세요.");
    } else {
      // 연애 날짜 수정하기 API 호출 코드
      const status = 200;

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
          <FlexBox $width="11rem" $height="3.1rem" $row="between" $col="center">
            <P $fontSize="36px">D + {ourAnniversary}</P>
            {isToggledEditButton.isAnniversaryEditButtonVisible && (
              <>
                <Button
                  $backgroundColor="transparent"
                  $hoverColor="transparent"
                  $margin="1px 0 0 0"
                  onClick={handleClickEditModeButton}
                >
                  <StyledFontAwesomeIcon icon={faPenToSquare} />
                </Button>
              </>
            )}
          </FlexBox>
        </>
      )}
    </>
  );
};

export default Anniversary;
