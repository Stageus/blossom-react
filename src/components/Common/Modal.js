import React, { useState } from "react";

// ===== styles import =====
import FlexBox from "../../styles/FlexStyle";
import { Div } from "../../styles/LayoutStyle";
import { Button } from "../../styles/ButtonStyle";
import styled from "styled-components";

// ===== style ====
const TrnasformDiv = styled(Div)`
  transform: translate(-50%, -50%);
`;

// ===== component =====
const Modal = ({ children, width = "37.5rem", height = "25rem", setIsOpen }) => {
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
        onClick={() => setIsOpen(false)}
      />
      {/* Modal Wrapper */}
      <TrnasformDiv $position="fixed" $top="50%" $left="50%" $width={width} $height={height}>
        {/* Modal Header */}
        <FlexBox $width="100%" $height="4rem" $row="end" $col="center" $backgroundColor="#E1F2FB">
          <Button
            $width="20px"
            $height="20px"
            $margin="0 15px 0 0"
            $backgroundColor="#FF7979"
            $borderRadius="50%"
            $hoverColor="#CF5757"
            onClick={() => setIsOpen(false)}
          />
        </FlexBox>

        {/* Modal Content */}
        <FlexBox
          $width="100%"
          $height="100%"
          $row="center"
          $col="center"
          $backgroundColor="#FFFFFF"
        >
          {children}
        </FlexBox>
      </TrnasformDiv>
    </>
  );
};

export default Modal;
