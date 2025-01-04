import React from "react";

// ===== stlyes import =====
import FlexBox from "../../styles/FlexStyle";
import P, { H1 } from "../../styles/TextStyle";
// ===== components import =====
import MatchingForm from "../../components/Setting/Matching/MatchingForm";

// ===== component =====
const Matching = () => {
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
        {/* 매칭 Header */}
        <FlexBox $dir="col" $width="25.625rem" $margin="0 0 30px 0">
          <H1>매칭하기</H1>
          <P $fontSize="16px">매칭을 희망하는 상대방의 아이디를 입력해 주세요.</P>
        </FlexBox>

        {/* 매칭 Form */}
        <MatchingForm />
      </FlexBox>
    </FlexBox>
  );
};

export default Matching;
