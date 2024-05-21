import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ===== styles import =====
import { Img } from "../../styles/ImgStyle";
// import FlexBox from "../../styles/FlexStyle";
import Div from "../../styles/LayoutStyle";
import { Button } from "../../styles/ButtonStyle";

import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"; // 수정 아이콘

// ===== recoil import =====
import { isClickedEditButton } from "../../recoil/editButtonState";

// ===== style =====
const StyledRelativeDiv = styled(Div)`
  position: relative;
`;

const StyledAbsoluteButton = styled(Button)`
  position: absolute;
  top: 4px;
  right: 4px;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: 24px;
  height: 24px;
  color: #d9d9d9;
`;

// ===== component =====
const Thumbnail = ({ thumbnail }) => {
  // === ref ===
  // === state ===
  const [ourThumbnail, setOurThumbnail] = useState("");
  const [isThumbnailEditMode, setIsThumbnailEditMode] = useState(false);
  const [isToggledEditButton, setIsToggledEditButton] = useRecoilState(isClickedEditButton);

  useEffect(() => {
    // 대표 사진 업로드 성공 시,
    // 대표 사진 업로드 실패 시,
    setOurThumbnail(thumbnail);
  }, [thumbnail]);

  const handleClickEditModeButton = () => {
    setIsThumbnailEditMode(true);
    setIsToggledEditButton((prevState) => ({
      ...prevState,
      isAnniversaryEditButtonVisible: false,
      isNicknameEditButtonVisible: false,
    }));
  };

  return (
    <StyledRelativeDiv $width="36.75rem" $height="36.75rem" $margin="10px 0 0 0">
      <Img $width="36.75rem" $height="36.75rem" src={ourThumbnail}></Img>
      {isToggledEditButton.isThumbnailEditButtonVisible && (
        <>
          <StyledAbsoluteButton
            $backgroundColor="transparent"
            $hoverColor="transparent"
            onClick={handleClickEditModeButton}
          >
            <StyledFontAwesomeIcon icon={faPenToSquare} />
          </StyledAbsoluteButton>
        </>
      )}
    </StyledRelativeDiv>
  );
};

export default Thumbnail;
