import React, { useState, useEffect } from "react";

// ===== styles & img import =====
import FlexBox from "../styles/FlexStyle";
import TestImage from "../assets/images/test.jpg";

// ===== components import =====
import Nav from "../components/Main/Nav";
import Anniversary from "../components/Main/Anniversary";
import Thumbnail from "../components/Main/Thumbnail";
import NicknameWrapper from "../components/Main/NicknameWrapper";

import ImageUploader from "../components/Common/ImageUploader";

// ===== component =====
const Main = () => {
  // === state ===
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    // 초기 정보 불러오기 성공 시, 각 컴포넌트에 데이터 뿌리기
    // 초기 정보 불러오기 실패 시, modal 출력

    const data = {
      myNickname: "왕왕이",
      partnerNickname: "뿅아리",
      imageUrl: TestImage,
      // initialData.imageUrl? initialData.imageUrl : 기본 이미지
      startDate: "123",
      // 초기 정보가 yyyy-dd-mm 로 오는 경우, utils/calculation을 활용해 기념일 계산하여 props로 내려주기
    };

    setInitialData(data);
  }, []);

  return (
    <>
      <FlexBox $width="100%">
        {/* nav */}
        <Nav />

        {/* 기념일, 대표 사진, 애칭 */}
        <FlexBox $dir="col" $width="100%" $height="100vh" $col="center">
          <Anniversary anniversary={initialData.startDate} />
          <Thumbnail thumbnail={initialData.imageUrl} />
          <NicknameWrapper
            myNickname={initialData.myNickname}
            loverNickname={initialData.partnerNickname}
          />
        </FlexBox>
      </FlexBox>

      {/* <ImageUploader /> */}
    </>
  );
};

export default Main;
