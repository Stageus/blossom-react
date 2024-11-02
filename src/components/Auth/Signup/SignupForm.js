import React from "react";

// ===== styles import =====
import FlexBox from "../../../styles/FlexStyle";
import { Button } from "../../../styles/ButtonStyle";
import { P } from "../../../styles/TextStyle";
import { Tr, Td } from "../../../styles/LayoutStyle";
// ===== components import =====
import InputField from "../../Common/InputField/InputField";
import ErrorMessage from "../../Common/ErrorMessage/ErrorMessage";
import ConfirmModal from "../../Modal/Confirm/ConfirmModal";
import AlertModal from "../../Modal/Alert/AlertModal";
// ===== hooks import =====
import useSignup from "./useSignup";

// ===== component =====
const SignupForm = () => {
  // === useFindId ===
  const {
    idRef,
    pwRef,
    confirmPwRef,
    nameRef,
    birthdayRef,
    submitRef,
    idError,
    passwordError,
    confirmPwError,
    nameError,
    phonenumberError,
    birthdayError,
    isDuplicationModalOpen,
    setIsDuplicationModalOpen,
    isAlertModalOpen,
    setIsAlertModalOpen,
    isDisable,
    handleValidateId,
    handleValidatePassword,
    handleConfirmPassword,
    handleValidateName,
    handleValidatePhonenumber,
    handleValidateBirthday,
    handleDuplicateId,
    handleUseId,
    handleSignup,
  } = useSignup();
  // === return ===
  return (
    <>
      {/* 아이디 중복 확인 Modal */}
      {isDuplicationModalOpen && (
        <ConfirmModal
          message={["사용 가능한 아이디입니다.", "사용하시겠습니까?"]}
          setIsOpen={setIsDuplicationModalOpen}
          onClick={handleUseId}
        />
      )}

      {/* 회원가입 실패 알림 Modal */}
      {isAlertModalOpen && (
        <AlertModal message={"회원가입에 실패했습니다."} setIsOpen={setIsAlertModalOpen} />
      )}

      {/* 회원가입 입력칸 */}
      <table>
        <tbody>
          <>
            <Td>
              <P $fontSize="28px">아이디</P>
            </Td>
            <Td>
              <FlexBox $row="between" $width="38.5rem">
                <InputField
                  margin="0 0 10px 0"
                  padding="0 0 0 10px"
                  borderRadius="8px"
                  width="29rem"
                  placeholderMessage="4 ~ 11자를 입력해 주세요."
                  inputRef={idRef}
                  onBlur={handleValidateId}
                  disabled={isDisable}
                />
                <Button
                  $width="7.75rem"
                  $height="3.75rem"
                  $fontSize="24px"
                  $border="3px solid #FFC4D0"
                  $borderRadius="8px"
                  $backgroundColor="transparent"
                  disabled={isDisable}
                  onClick={handleDuplicateId}
                >
                  중복 확인
                </Button>
              </FlexBox>
              {idError && <ErrorMessage message={idError} />}
            </Td>
          </>
          <Tr>
            <Td>
              <P $fontSize="28px">비밀번호</P>
            </Td>
            <Td>
              <InputField
                margin="15px 0 10px 0"
                padding="0 0 0 10px"
                borderRadius="8px"
                placeholderMessage="영어, 숫자를 필수 포함한 8자 ~ 15자를 입력해 주세요."
                type="password"
                inputRef={pwRef}
                onBlur={handleValidatePassword}
              />
              {passwordError && <ErrorMessage message={passwordError} />}
            </Td>
          </Tr>
          <Tr>
            <Td>
              <P $fontSize="28px" $margin="0 20px 0 0">
                비밀번호 확인
              </P>
            </Td>
            <Td>
              <InputField
                margin="15px 0 10px 0"
                padding="0 0 0 10px"
                borderRadius="8px"
                placeholderMessage="입력하신 비밀번호와 동일하게 입력해 주세요."
                type="password"
                inputRef={confirmPwRef}
                onBlur={handleConfirmPassword}
              />
              {confirmPwError && <ErrorMessage message={confirmPwError} />}
            </Td>
          </Tr>
          <Tr>
            <Td>
              <P $fontSize="28px">이름</P>
            </Td>
            <Td>
              <InputField
                margin="15px 0 10px 0"
                padding="0 0 0 10px"
                borderRadius="8px"
                placeholderMessage="2자 ~ 30자를 입력해 주세요"
                inputRef={nameRef}
                onBlur={handleValidateName}
              />
              {nameError && <ErrorMessage message={nameError} />}
            </Td>
          </Tr>
          <Tr>
            <Td>
              <P $fontSize="28px">전화번호</P>
            </Td>
            <Td>
              <InputField
                inputType="phone"
                margin="15px 0 10px 0"
                padding="0 0 0 10px"
                borderRadius="8px"
                onValidateAndSend={handleValidatePhonenumber}
              />
              {phonenumberError && <ErrorMessage message={phonenumberError} />}
            </Td>
          </Tr>
          <Tr>
            <Td>
              <P $fontSize="28px">생년월일</P>
            </Td>
            <Td>
              <InputField
                margin="15px 0 10px 0"
                padding="0 0 0 10px"
                borderRadius="8px"
                type="date"
                inputRef={birthdayRef}
                onBlur={handleValidateBirthday}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    submitRef.current.click();
                  }
                }}
              />
              {birthdayError && <ErrorMessage message={birthdayError} />}
            </Td>
          </Tr>
        </tbody>
      </table>

      {/* 회원가입 버튼 */}
      <FlexBox $width="52rem" $row="center" $margin="30px 0 0 0">
        <Button
          $width="38.5rem"
          $height="4.375rem"
          $borderRadius="8px"
          ref={submitRef}
          onClick={handleSignup}
        >
          가입하기
        </Button>
      </FlexBox>
    </>
  );
};

export default SignupForm;
