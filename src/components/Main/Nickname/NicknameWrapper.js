import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ===== styles import =====
import FlexBox from "../../../styles/FlexStyle";
import P from "../../../styles/TextStyle";
import { Button } from "../../../styles/ButtonStyle";
import { PersonEditIcon } from "../../../styles/IconStyle"; // 닉네임 수정 아이콘
import { faHeart } from "@fortawesome/free-solid-svg-icons"; // 하트 아이콘

// ===== components import =====
import InputField from "../../Common/InputField/InputField";
import ErrorMessage from "../../Common/ErrorMessage/ErrorMessage";
import AlertModal from "../../Modal/Alert/AlertModal";

// ===== custom hook import =====
import useEditNickname from "./useEditNickname";

// ===== style =====
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: 65px;
  height: 65px;
  color: #ff6c6c;
`;

// ===== component =====
const NicknameWrapper = ({ myNickname, loverNickname }) => {
  // === useEditNickname ===
  const {
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
  } = useEditNickname(myNickname, loverNickname);

  return (
    <>
      {tokenErrorModalOpen && (
        <AlertModal
          hasFunc={true}
          message="로그인이 필요합니다."
          onClick={() => navigate("/login")}
        />
      )}

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
                <PersonEditIcon />
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
                <PersonEditIcon />
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
