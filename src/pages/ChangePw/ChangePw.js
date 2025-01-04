import React from "react";

// ===== styles import =====
import FlexBox from "../../styles/FlexStyle";
import P, { H1 } from "../../styles/TextStyle";
// ===== components import =====
import ChangePwForm from "../../components/Auth/ChangePw/ChangePwForm";

// ===== component =====
const ChangePw = () => {
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
        {/* 비밀번호 변경 Header */}
        <FlexBox $dir="col" $width="25.625rem" $margin="0 0 30px 0">
          <H1 $fontSize="36px" $margin="0 0 10px 0">
            비밀번호 변경
          </H1>
          <P $fontSize="16px">새로운 비밀번호를 입력해 주세요.</P>
        </FlexBox>

        {/* 비밀번호 변경 Form */}
        <ChangePwForm />
      </FlexBox>
    </FlexBox>
  );
};

export default ChangePw;
