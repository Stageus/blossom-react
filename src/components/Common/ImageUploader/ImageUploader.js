import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

// ===== styles & img import =====
import { Input } from "../../../styles/InputStyle";
import { Button } from "../../../styles/ButtonStyle";
import { EditIcon } from "../../../styles/IconStyle"; // 수정 아이콘

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
            <EditIcon width="28px" height="28px" />
          </StyledAbsoluteButton>
        </>
      )}
    </>
  );
};

export default ImageUploader;
