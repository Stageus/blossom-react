import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ===== styles import =====
import { Button } from "../../../styles/ButtonStyle";
import FlexBox from "../../../styles/FlexStyle";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons"; // 일정 아이콘
import { faImage } from "@fortawesome/free-solid-svg-icons"; // 피드 아이콘
import { faComments } from "@fortawesome/free-solid-svg-icons"; // 문답 아이콘
// ===== custom Hook import =====
import useIsVisited from "./useIsVisited";

// ===== component =====
const Nav = () => {
  // === navigate
  const navigate = useNavigate();
  const [handleClickQnAButton] = useIsVisited();

  return (
    <>
      <FlexBox
        $dir="col"
        $row="between"
        $col="center"
        $width="9.25rem"
        $height="100vh"
        $padding="50px 0 30px 0"
        $backgroundColor="#FFF1F0"
      >
        <FlexBox $dir="col" $row="between" $col="center" $width="9.25rem" $height="50%">
          {/* 일정 버튼 */}
          <Button
            $width="108px"
            $height="108px"
            $borderRadius="50%"
            onClick={() => navigate("/schedule")}
          >
            <FlexBox $width="108px" $height="108px" $row="center" $col="center">
              <FontAwesomeIcon icon={faCalendarDays} />
            </FlexBox>
          </Button>

          {/* 피드 버튼 */}
          <Button $width="108px" $height="108px" $borderRadius="50%">
            <FlexBox
              $width="108px"
              $height="108px"
              $row="center"
              $col="center"
              onClick={() => navigate("/feed")}
            >
              <FontAwesomeIcon icon={faImage} />
            </FlexBox>
          </Button>

          {/* 문답 버튼 */}
          <Button $width="108px" $height="108px" $borderRadius="50%" onClick={handleClickQnAButton}>
            <FlexBox $width="108px" $height="108px" $row="center" $col="center">
              <FontAwesomeIcon icon={faComments} />
            </FlexBox>
          </Button>
        </FlexBox>

        {/* 로그아웃 버튼 */}
        <Button
          $width="108px"
          $height="62px"
          $borderRadius="20%"
          $fontSize="28px"
          $backgroundColor="#d9d9d9"
          onClick={() => navigate("/login")}
        >
          Logout
        </Button>
      </FlexBox>
    </>
  );
};

export default Nav;
