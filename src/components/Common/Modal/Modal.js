import React from "react";
import styled from "styled-components";

// ===== styles import =====
import FlexBox from "../../../styles/FlexStyle";
import Div from "../../../styles/LayoutStyle";
import { Button } from "../../../styles/ButtonStyle";

// ===== style ====
const TrnasformDiv = styled(Div)`
  transform: translate(-50%, -50%);
`;

// ===== component =====
const Modal = ({
  children,
  width = "37.5rem",
  height = "22rem",
  backgroundColor = "#ffedec",
  contentBackgroundColor = "#FFFFFF",
  setIsOpen,
  contentRow = "center",
  contentCol = "center",
  // hasHeader = true,
  dir = "row",
}) => {
  // children : Modal Content (버튼을 포함하여 모달에 들어가는 내용을 할당)
  // setIsOpen : Modal 닫힘을 위한 funtion

  return (
    <>
      {/* Modal Background */}
      <Div
        $width="100%"
        $height="100%"
        $position="fixed"
        $backgroundColor="black"
        $opacity="0.7"
        $top="0"
        $left="0"
        onClick={setIsOpen}
      />
      {/* Modal Wrapper */}
      <TrnasformDiv $position="fixed" $top="50%" $left="50%" $width={width} $height={height}>
        {/* Modal Header */}
        <FlexBox
          $width="100%"
          $height="4rem"
          $row="end"
          $col="center"
          $backgroundColor={backgroundColor}
        >
          <Button
            $width="20px"
            $height="20px"
            $margin="0 15px 0 0"
            $backgroundColor="#FF7979"
            $borderRadius="50%"
            $hoverColor="#CF5757"
            onClick={setIsOpen}
          />
        </FlexBox>

        {/* Modal Content */}
        <FlexBox
          $width="100%"
          $height="100%"
          $dir={dir}
          $row={contentRow}
          $col={contentCol}
          $backgroundColor={contentBackgroundColor}
        >
          {children}
        </FlexBox>
      </TrnasformDiv>
    </>
  );
};

export default Modal;
