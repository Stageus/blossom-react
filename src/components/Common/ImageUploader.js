import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ===== styles & img import =====
import { Input } from "../../styles/InputStyle";
import { Button } from "../../styles/ButtonStyle";

import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"; // 수정 아이콘

// ===== style =====
const StyledAbsoluteButton = styled(Button)`
  position: absolute;
  top: 4px;
  right: 4px;

  background-color: ${(props) => props.$backgroundColor || "transparent"};
  &:hover {
    background-color: ${(props) => props.$hoverColor || "transparent"};
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: 24px;
  height: 24px;
  color: #d9d9d9;
`;

// ===== component =====
const ImageUploader = ({ onSelectImage, onClick, isEditMode, top = "4px", right = "4px" }) => {
  // === ref ===
  const fileRef = useRef(null);

  // === state ===
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    // callback func
    onSelectImage(preview);
  }, [preview]);

  const handleButtonClick = () => {
    fileRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) {
      window.location.reload();
    } else {
      // 파일 미리보기 생성
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = () => {
        setPreview(reader.result);
      };
    }
  };

  return (
    <>
      {/* input display none */}
      <Input
        type="file"
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleFileChange}
        onClick={onClick}
        ref={fileRef}
      />

      {!isEditMode && (
        <>
          {/* file select button */}
          <StyledAbsoluteButton
            onClick={handleButtonClick}
            $top={top}
            $right={right}
            $fontSize="32px"
          >
            <StyledFontAwesomeIcon icon={faPenToSquare} />
          </StyledAbsoluteButton>
        </>
      )}
    </>
  );
};

export default ImageUploader;
