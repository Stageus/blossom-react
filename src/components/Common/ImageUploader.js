import React, { useState, useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ===== styles & img import =====
import { Input } from "../../styles/InputStyle";
import { Button } from "../../styles/ButtonStyle";
import { Img } from "../../styles/ImgStyle";
import Div from "../../styles/LayoutStyle";
// import FlexBox from "../../styles/FlexStyle";

import { faFileImage } from "@fortawesome/free-solid-svg-icons"; // 파일 아이콘

// ===== style =====
const StyledRelativeDiv = styled(Div)`
  position: relative;
`;

const StyledAbsoluteButton = styled(Button)`
  position: absolute;
  top: ${(props) => props.$top || null};
  bottom: ${(props) => props.$bottom || null};
  right: ${(props) => props.$right || null};

  font-size: ${(props) => props.$fontSize || "24px"};

  background-color: ${(props) => props.$backgroundColor || "transparent"};
  &:hover {
    background-color: ${(props) => props.$hoverColor || "transparent"};
  }
`;

// ===== component =====
const ImageUploader = ({ onSelectImage, onSaveButtonClick, onCancelButtonClick }) => {
  // === ref ===
  const fileRef = useRef(null);

  // === state ===
  const [preview, setPreview] = useState(null);

  const handleButtonClick = () => {
    fileRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    onSelectImage(selectedFile); // callback func

    // 파일 미리보기 생성
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  return (
    <>
      {/* input display none */}
      <Input
        type="file"
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleFileChange}
        ref={fileRef}
      />

      <StyledRelativeDiv $width="36.75rem" $height="36.75rem">
        {/* file select button */}
        <StyledAbsoluteButton onClick={handleButtonClick} $top="4px" $right="4px" $fontSize="32px">
          <FontAwesomeIcon icon={faFileImage} />
        </StyledAbsoluteButton>

        <StyledAbsoluteButton $bottom="4px" $right="60px" onClick={onSaveButtonClick}>
          확인
        </StyledAbsoluteButton>
        <StyledAbsoluteButton $bottom="4px" $right="4px" onClick={onCancelButtonClick}>
          취소
        </StyledAbsoluteButton>

        {/* priview image */}
        <Img $width="36.75rem" $height="36.75rem" src={preview} />
      </StyledRelativeDiv>
    </>
  );
};

export default ImageUploader;
