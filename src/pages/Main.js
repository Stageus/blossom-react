import React from "react";

// ===== components import =====
import Nav from "../components/Main/Nav";
import Anniversary from "../components/Main/Anniversary";
import Thumbnail from "../components/Main/Thumbnail";
import NicknameWrapper from "../components/Main/NicknameWrapper";

// ===== component =====
const Main = () => {
  return (
    <>
      <Nav />
      <Anniversary />
      <Thumbnail />
      <NicknameWrapper />
    </>
  );
};

export default Main;
