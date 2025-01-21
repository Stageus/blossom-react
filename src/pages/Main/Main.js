import React, { useState, useEffect } from "react";

// ===== styles & img import =====
import FlexBox from "../../styles/FlexStyle";
import TestImage from "../../assets/images/test.jpg";
// ===== components import =====
import Nav from "../../components/Main/Nav/Nav";
import Anniversary from "../../components/Main/Anniversary/Anniversary";
import Thumbnail from "../../components/Main/Thumbnail/Thumbnail";
import NicknameWrapper from "../../components/Main/Nickname/NicknameWrapper";
import AlertModal from "../../components/Modal/Alert/AlertModal";

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
      startDate: "123",
    };

    setInitialData(data);
  }, []);

  return (
    <>
      {/* error modal */}
      {/* <AlertModal /> */}

      <FlexBox $width="100%" $height="100%">
        {/* nav */}
        <Nav />

        {/* 기념일, 대표 사진, 애칭 */}
        <FlexBox $dir="col" $width="100%" $height="100%" $row="between" $col="center">
          <Anniversary anniversary={initialData.startDate} />
          <Thumbnail thumbnail={initialData.imageUrl} />
          <NicknameWrapper
            myNickname={initialData.myNickname}
            loverNickname={initialData.partnerNickname}
          />
        </FlexBox>
      </FlexBox>
    </>
  );
};

export default Main;
