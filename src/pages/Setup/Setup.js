import React from "react";

// ===== stlyes import =====
import FlexBox from "../../styles/FlexStyle";
import P, { H1 } from "../../styles/TextStyle";
// ===== components import =====
import SetupForm from "../../components/Setting/Setup/SetupForm";

// ===== component =====
const Setup = () => {
  return (
    <FlexBox $row="end" $width="100%">
      <FlexBox
        $dir="col"
        $row="center"
        $col="center"
        $width="32.438rem"
        $height="100vh;"
        $backgroundColor="#FBE8E7"
      >
        {/* 초기 설정 Header */}
        <FlexBox $dir="col" $width="25.625rem" $margin="0 0 30px 0">
          <H1>초기 설정</H1>
          <P $fontSize="16px">연인 간 애칭, 처음 만난 날을 입력해 주세요.</P>
        </FlexBox>

        {/* 초기 설정 Form */}
        <SetupForm />
      </FlexBox>
    </FlexBox>
  );
};

export default Setup;
