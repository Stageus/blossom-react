// 이 파일은 유효성 검사를 위한 유틸 함수들을 모아놓은 파일입니다.

export const isIdValid = (id) => {
  // 아이디 유효성 검사를 위한 정규표현식
  const idRegex = /^[a-zA-Z0-9]{4,11}$/;
  return idRegex.test(id);
};

export const isPwValid = (password) => {
  // 비밀번호 유효성 검사를 위한 정규표현식
  const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()\-_=+~`[\]{}|\\;:'",.<>/?]{8,15}$/;
  return pwRegex.test(password);
};

export const isNameValid = (name) => {
  // 이름 유효성 검사를 위한 정규표현식
  const nameRegex = /^.{2,30}$/;
  return nameRegex.test(name);
};

export const isPhoneNumberValid = (phoneNumber) => {
  // 전화번호 유효성 검사를 위한 정규표현식
  const phoneNumberRegex = /^\d{3}-\d{4}-\d{4}$/;
  return phoneNumberRegex.test(phoneNumber);
};

export const isNicknameValid = (nicknmae) => {
  // 닉네임 (애칭) 유효성 검사를 위한 정규표현식
  const ninknameRegex = /^.{1,8}$/;
  return ninknameRegex.test(nicknmae);
};

export const isContnetValid = (contnet) => {
  // 일정 내용 유효성 검사를 위한 정규표현식
  const contnetRegex = /^.{1,20}$/;
  return contnetRegex.test(contnet);
};

export const isAnswerValid = (answer) => {
  // 답변 유효성 검사를 위한 정규표현식
  const answerRegex = /^.{1,100}$/;
  return answerRegex.test(answer);
};
