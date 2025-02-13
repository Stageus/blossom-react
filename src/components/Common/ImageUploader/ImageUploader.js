import React from "react";
import styled from "styled-components";

// ===== styles & img import =====
import { Input } from "../../../styles/InputStyle";
import { Button } from "../../../styles/ButtonStyle";
import { EditIcon } from "../../../styles/IconStyle"; // 수정 아이콘

// ===== hook import =====
import useImageUploader from "./useImageUploader";

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
  // === useImageUploader ===
  const { fileRef, handleButtonClick, handleFileChange } = useImageUploader(onSelectImage);

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
