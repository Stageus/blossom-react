import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ===== styles & img import =====
import FlexBox from "../styles/FlexStyle";
import logo from "../assets/images/logo.png";
import WhiteArrow from "../assets/images/icon_park_left.png";
import { Img } from "../styles/ImgStyle";
import { Button } from "../styles/ButtonStyle";
import TestImage from "../assets/images/test.jpg";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"; // 검색 아이콘
import { faPlus } from "@fortawesome/free-solid-svg-icons"; // 추가 아이콘

// ===== components import =====
import FeedItem from "../components/Feed/FeedItem/FeedItem";
import InputField from "../components/Common/InputField/InputField";

// ===== style =====
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: 36px;
  height: 36px;
  color: #ffffff;
`;

// ===== component =====
const Feed = () => {
  // === ref ===
  const dateRef = useRef("");

  // === state ===
  const [feedData, setFeedData] = useState([]);

  // === navigate ===
  const navigate = useNavigate();

  useEffect(() => {
    // 피드 목록 불러오기 성공 시, 피드 출력
    // 피드 목록 불러오기 실패 시, alert 출력

    const data = [
      {
        idx: 0,
        nickname: "왕왕이",
        date: "2024.05.01",
        image: TestImage,
        content: "아 방탈출 마려워",
      },
      {
        idx: 1,
        nickname: "왕왕2222",
        date: "2024.05.02",
        image: TestImage,
        content: "어제 영안실했다 아쉽게(?) 탈출 실패...!",
      },
      {
        idx: 2,
        nickname: "왕왕3333333",
        date: "2024.05.02",
        image: null,
        content: "오늘 할 일 1. Blossom 개발 2. Blossom 개발 3. Blossom 개발 4. Blossom 개발...",
      },
    ];

    setFeedData(data);
  }, []);

  const handleGoBack = () => {
    navigate("/");
  };

  const handleClickSearchButton = () => {
    if (dateRef.current) {
      dateRef.current.focus();
      dateRef.current.showPicker();
    }
  };

  const handleDateChange = () => {
    if (dateRef.current) {
      console.log(dateRef.current.value);

      // 날짜로 검색 API 호출 코드
      const status = 200;

      if (status === 400) {
        // 정규식 에러
      } else if (status === 401) {
        // 토큰 에러
      } else if (status === 500) {
        // 서버 내부 에러
      } else {
        // 성공
      }
    }
  };

  const handleNewPost = () => {
    navigate("/feededitor/add");
  };

  return (
    <>
      <FlexBox $row="center" $width="100%">
        <FlexBox
          $dir="col"
          $col="center"
          $width="32.438rem"
          $height="100%;"
          $backgroundColor="#FBE8E7"
        >
          {/* 피드 Header */}
          <FlexBox $row="between" $col="center" $width="100%">
            {/* 뒤로 가기 버튼 */}
            <Button $backgroundColor="transparent" $hoverColor="null" onClick={handleGoBack}>
              <Img src={WhiteArrow} />
            </Button>

            {/* 로고 이미지 */}
            <Img src={logo} />

            <FlexBox>
              {/* 날짜로 검색하기 위한 검색 버튼 */}
              <Button
                $backgroundColor="transparent"
                $hoverColor="null"
                $margin="0 24px 0 0"
                onClick={handleClickSearchButton}
              >
                <StyledFontAwesomeIcon icon={faMagnifyingGlass} />
              </Button>
              <InputField
                width="715px"
                type="date"
                inputRef={dateRef}
                style={{ visibility: "hidden", position: "absolute", right: 0 }}
                onChange={handleDateChange}
              />

              {/* 새로운 글 작성 버튼 */}
              <Button
                $backgroundColor="transparent"
                $hoverColor="null"
                $margin="0 10px 0 0"
                onClick={handleNewPost}
              >
                <StyledFontAwesomeIcon icon={faPlus} />
              </Button>
            </FlexBox>
          </FlexBox>

          {/* 피드 출력부 */}
          {/* 일단 map 으로 출력하기 */}
          {feedData?.map((feedData, index) => (
            <FeedItem
              key={index}
              feedIdx={feedData?.idx}
              authorNickname={feedData?.nickname}
              creationDate={feedData?.date}
              feedImage={feedData?.image}
              feedContent={feedData?.content}
            />
          ))}
        </FlexBox>
      </FlexBox>
    </>
  );
};

export default Feed;
