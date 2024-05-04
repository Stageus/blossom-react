import React, { useState, useEffect } from "react";

// ===== components import =====
import Nav from "../components/Main/Nav";
import Anniversary from "../components/Main/Anniversary";
import Thumbnail from "../components/Main/Thumbnail";
import NicknameWrapper from "../components/Main/NicknameWrapper";

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
      imageUrl: "",
      startDate: "123",
    };

    setInitialData(data);
  }, []);

  return (
    <>
      <Nav />
      <Anniversary anniversary={initialData.startDate} />
      <Thumbnail thumbnail={initialData.imageUrl} />
      <NicknameWrapper
        myNickname={initialData.myNickname}
        LoverNickname={initialData.partnerNickname}
      />
    </>
  );
};

export default Main;
