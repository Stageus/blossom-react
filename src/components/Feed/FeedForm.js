import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// ===== styles & img import =====
import FlexBox from "../../styles/FlexStyle";
import Div from "../../styles/LayoutStyle";
import { Img } from "../../styles/ImgStyle";

// ===== components import =====
import ImageUploader from "../Common/ImageUploader";
import InputField from "../Common/InputField";
import P from "../../styles/TextStyle";
import { TextArea } from "../../styles/InputStyle";
import { Button } from "../../styles/ButtonStyle";

// ===== style =====
const StyledRelativeDiv = styled(Div)`
  position: relative;
`;

// ===== component =====
const FeedForm = () => {
  const location = useLocation();
  const isEdit = location.pathname.includes("edit");
  const existingData = location.state?.existingData || null;

  // === ref ===
  const dateRef = useRef("");
  const contentRef = useRef("");

  // === state ===
  const [photo, setPhoto] = useState(existingData?.photo || null);
  // const [date, setDate] = useState(existingData?.date || new Date().toISOString().slice(0, 10));
  // const [content, setContent] = useState(existingData?.content || "");

  // === navigate ===
  const navigate = useNavigate();

  // 수정 모드일 때 기존 값을 ref에 설정
  useEffect(() => {
    if (isEdit && existingData) {
      if (existingData.date) {
        dateRef.current.value = existingData.date;
      }
      if (existingData.content) {
        contentRef.current.value = existingData.content;
      }
    }
  }, [isEdit, existingData]);

  const handleSelectImage = (selectedImage) => {
    setPhoto(selectedImage);
  };

  const handleClickSaveButton = () => {
    // photo는 state의 photo로
    const date = dateRef.current.value;
    const content = contentRef.current.value;

    // 피드 수정, 작성 API 호출 코드
    const status = 200;

    if (status === 400) {
      // 정규식 에러
    } else if (status === 401) {
      // 토큰 유효하지 않음
    } else if (status === 403) {
      // 엑세스 권한 없음 (본인 커플의 것만 가능)
    } else if (status === 404) {
      // 서버에 존재하지 않음
    } else if (status === 500) {
      // 서버 내부 에러
    } else {
      navigate("/feed");
    }
  };

  const handleClickCancelButton = () => {};

  return (
    <FlexBox $dir="col" $width="100%">
      <P>날짜 선택</P>
      <InputField type="date" inputRef={dateRef} />

      <P $margin="10px 0 0 0">사진 선택</P>
      <StyledRelativeDiv>
        <Img $width="32.438rem" $height="32.438rem" src={photo} />
        <ImageUploader onSelectImage={handleSelectImage} />
      </StyledRelativeDiv>

      <P $margin="10px 0 0 0">글 작성</P>
      <TextArea />

      <FlexBox $row="between" $width="32.438rem" $margin="15px 0 0 0">
        <Button $width="16rem" onClick={handleClickSaveButton}>
          확인
        </Button>
        <Button $width="16rem" $backgroundColor="#d3d3d3" onClick={handleClickCancelButton}>
          취소
        </Button>
      </FlexBox>
    </FlexBox>
  );
};

export default FeedForm;
