import React from "react";
import styled, { keyframes } from "styled-components";

// ===== styles & img import =====
import FlexBox from "../../styles/FlexStyle";

// ===== components import =====
import Nav from "../../components/Main/Nav/Nav";
import Anniversary from "../../components/Main/Anniversary/Anniversary";
import Thumbnail from "../../components/Main/Thumbnail/Thumbnail";
import NicknameWrapper from "../../components/Main/Nickname/NicknameWrapper";
import AlertModal from "../../components/Modal/Alert/AlertModal";

// ===== hook import =====
import useMainData from "./useMainData";

// ===== stlyes =====
const TreeContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 300px;
  cursor: pointer;
`;

const Trunk = styled.div`
  width: 40px;
  height: 150px;
  background-color: #8b5a2b;
  border-radius: 10px;
  position: absolute;
  bottom: 0;
`;

const Leaves = styled.div`
  width: 150px;
  height: 150px;
  background-color: #4caf50;
  border-radius: 50%;
  position: absolute;
  top: 20px;
`;

// 꽃잎 애니메이션 정의
const fallAnimation = keyframes`
  0% {
    transform: translateY(0) rotate(0);
    opacity: 1;
  }
  100% {
    transform: translateY(500px) rotate(360deg);
    opacity: 0;
  }
`;

// 꽃잎
const Petal = styled.div`
  position: absolute;
  top: 50px;
  left: ${({ left }) => left}%;
  width: 20px;
  height: 20px;
  background-color: pink;
  border-radius: 50% 70% 70% 50%;
  opacity: 0.9;
  animation: ${fallAnimation} 5s ease-in-out forwards;
`;

// ===== component =====
const Main = () => {
  const { isErrorModalOpen, initialData, petals, handleTreeClick } = useMainData();

  return (
    <>
      {/* error modal */}
      {/* <AlertModal /> */}

      <FlexBox $width="100%" $height="100vh">
        <Nav />
        <FlexBox $dir="col" $width="100%" $height="100%" $row="between">
          <FlexBox
            $dir="col"
            $row="between"
            $col="center"
            $width="100%"
            $height="100%"
            // $border="1px solid black"
            // $borderTop="1px solid black"
            // $borderBottom="1px solid black"
          >
            <Anniversary anniversary={initialData.startDate} />
            <Thumbnail thumbnail={initialData.imageUrl} />
            <NicknameWrapper
              myNickname={initialData.myNickname}
              loverNickname={initialData.partnerNickname}
            />
          </FlexBox>
        </FlexBox>

        {/* <TreeContainer onClick={handleTreeClick}>
          <Trunk />
          <Leaves />
          {petals.map((petal) => (
            <Petal key={petal.id} left={petal.left} />
          ))}
        </TreeContainer> */}
      </FlexBox>
    </>
  );
};

export default Main;
