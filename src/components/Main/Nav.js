import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ===== styles import =====
import { Button } from "../../styles/ButtonStyle";
import FlexBox from "../../styles/FlexStyle";

import { faCalendarDays } from "@fortawesome/free-solid-svg-icons"; // 일정 아이콘
import { faImage } from "@fortawesome/free-solid-svg-icons"; // 피드 아이콘
import { faComments } from "@fortawesome/free-solid-svg-icons"; // 문답 아이콘

// ===== components import =====
import AlertModal from "../Modal/AlertModal";

// ===== component =====
const Nav = () => {
  // === state ===
  const [isLogoutFailModal, setIsLogoutFailModal] = useState(false);

  // === navigate ===
  const navigate = useNavigate();

  useEffect(() => {
    // 로그아웃 성공 시, 로그아웃 처리
    // 로그아웃 실패 시, modal 출력
  }, []);

  // 일정 버튼 클릭 시, 일정 페이지로 이동
  const handleClickScheduleButton = () => {
    navigate("/schedule");
  };

  // 피드 버튼 클릭 시, 피드 페이지로 이동
  const handleClickFeedButton = () => {
    navigate("/feed");
  };

  // 문답 버튼 클릭 시, 문답 페이지로 이동
  const handleClickQnAButton = () => {
    navigate("/qnalist");
  };

  // 로그아웃 버튼 클릭 시, 로그아웃 API 호출
  const handleClickLogoutButton = () => {
    // 로그아웃 API 호출 코드
    const status = 200;

    if (status === 400) {
      setIsLogoutFailModal(true);
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      {isLogoutFailModal && (
        <AlertModal message="로그아웃에 실패했습니다." setIsOpen={setIsLogoutFailModal} />
      )}

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
            onClick={handleClickScheduleButton}
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
              onClick={handleClickFeedButton}
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
          onClick={handleClickLogoutButton}
        >
          Logout
        </Button>
      </FlexBox>
    </>
  );
};

export default Nav;
