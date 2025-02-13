import React from "react";
import { useNavigate } from "react-router-dom";

// ===== styles import =====
import FlexBox from "../../../styles/FlexStyle";
import { Button } from "../../../styles/ButtonStyle";
import { P } from "../../../styles/TextStyle";

import { CalendarIcon } from "../../../styles/IconStyle";
import { FeedIcon } from "../../../styles/IconStyle";
import { QnAIcon } from "../../../styles/IconStyle";

// ===== custom Hook import =====
import useIsVisited from "./useIsVisited";

// ===== component =====
const Nav = () => {
  // === navigate ===
  const navigate = useNavigate();
  const [handleClickQnAButton] = useIsVisited();

  return (
    <>
      <FlexBox
        $dir="col"
        $row="between"
        $col="center"
        $width="4.5rem" // 64px
        $height="100%"
        $padding="52px 0 32px 0"
        $backgroundColor="#FFF1F0"
      >
        <FlexBox $dir="col" $row="between" $col="center" $width="9.25rem" $height="40%">
          {/* 일정 버튼 */}
          <Button
            $borderRadius="12px"
            $backgroundColor="transparent"
            onClick={() => navigate("/schedule")}
          >
            <FlexBox $dir="col" $row="center" $col="center" $width="60px" $height="68px">
              <CalendarIcon />
              <P $fontSize="12px" $padding="8px 0 0 0">
                CALENDAR
              </P>
            </FlexBox>
          </Button>

          {/* 피드 버튼 */}
          <Button
            $borderRadius="12px"
            $backgroundColor="transparent"
            onClick={() => navigate("/feed")}
          >
            <FlexBox $dir="col" $row="center" $col="center" $width="60px" $height="68px">
              <FeedIcon />
              <P $fontSize="12px" $padding="8px 0 0 0">
                FEED
              </P>
            </FlexBox>
          </Button>

          {/* 문답 버튼 */}
          <Button
            $borderRadius="12px"
            $backgroundColor="transparent"
            onClick={handleClickQnAButton}
          >
            <FlexBox $dir="col" $row="center" $col="center" $width="60px" $height="68px">
              <QnAIcon />
              <P $fontSize="12px" $padding="8px 0 0 0">
                Q & A
              </P>
            </FlexBox>
          </Button>
        </FlexBox>

        {/* 로그아웃 버튼 */}
        <Button
          $width="60px"
          $height="32px"
          $borderRadius="8px"
          $fontSize="16px"
          $backgroundColor="transparent"
          onClick={() => navigate("/login")}
        >
          LOGOUT
        </Button>
      </FlexBox>
    </>
  );
};

export default Nav;
