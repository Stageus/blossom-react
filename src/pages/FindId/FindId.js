import React from "react";

// ===== styles import =====
import FlexBox from "../../styles/FlexStyle";
import P, { H1 } from "../../styles/TextStyle";
// ===== components import =====
import FindIdForm from "../../components/Auth/FindId/FindIdForm";
// import FindIdForm from "../components/Auth/FindIdForm";

// ===== component =====
const FindId = () => {
  return (
    <FlexBox $row="end" $width="100%">
      <FlexBox
        $dir="col"
        $row="center"
        $col="center"
        $width="32.438rem"
        $height="100vh;"
        $backgroundColor="#FBE8E7"
        $margin="0 3rem 0 0"
      >
        {/* 아이디 찾기 Header */}
        <FlexBox $dir="col" $width="25.625rem" $margin="0 0 30px 0">
          <H1 $fontSize="36px" $margin="0 0 10px 0">
            아이디 찾기
          </H1>
          <P $fontSize="16px">회원가입 시 등록하신 이름과 전화번호를 입력해 주세요.</P>
        </FlexBox>

        {/* 아이디 찾기 Form */}
        <FindIdForm />
      </FlexBox>
    </FlexBox>
  );
};

export default FindId;
