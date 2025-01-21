import React from "react";
import { Link } from "react-router-dom";

// ===== styles import =====
import FlexBox from "../../styles/FlexStyle";
import P, { H1 } from "../../styles/TextStyle";
import Div from "../../styles/LayoutStyle";
import { Span } from "../../styles/TextStyle";

// ===== components import =====
import FindPwForm from "../../components/Auth/FindPw/FindPwForm";

// ===== component =====
const FindPw = () => {
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
        {/* 비밀번호 찾기 Header */}
        <FlexBox $dir="col" $width="25.625rem" $margin="0 0 30px 0">
          <H1 $fontSize="36px" $margin="0 0 10px 0">
            비밀번호 찾기
          </H1>
          <P $fontSize="16px">회원가입 시 등록하신 아이디, 이름 및 전화번호를 입력해 주세요.</P>
        </FlexBox>

        {/* 비밀번호 찾기 Form */}
        <FindPwForm />

        {/* 로그인, 아이디 찾기 페이지로 이동 */}
        <FlexBox $row="between" $width="25.625rem" $margin="15px 0 0 0">
          <Div
            $width="20.813rem"
            $textAlign="center"
            $borderTop="2px solid white"
            $borderBottom="2px solid white"
            $padding="20px 0 20px 0"
          >
            <Span $fontSize="12px" $textColor="#FFFFFF" $margin="0 5px 0 0">
              비밀번호가 생각나셨나요?
            </Span>
            <Link to="/login">
              <Span $fontSize="12px">로그인하기</Span>
            </Link>
          </Div>

          {/* 비밀번호 찾기 Link Button */}
          <Div
            $width="20.813rem"
            $textAlign="center"
            $borderTop="2px solid white"
            $borderBottom="2px solid white"
            $padding="20px 0 20px 0"
          >
            <Span $fontSize="12px" $textColor="#FFFFFF" $margin="0 5px 0 0">
              아이디를 잊으셨나요?
            </Span>
            <Link to="/findid">
              <Span $fontSize="12px">아이디 찾기</Span>
            </Link>
          </Div>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default FindPw;
