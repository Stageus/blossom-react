import React from "react";
import { Link } from "react-router-dom";

// ===== styles import ====
import FlexBox from "../styles/FlexStyle";
import { Div } from "../styles/LayoutStyle";
import { Span } from "../styles/TextStyle";

// ===== components import =====
import LoginForm from "../components/Auth/LoginForm";

// ===== component =====
const Login = () => {
  return (
    <>
      {/* 로그인 Form */}
      <LoginForm />

      {/* Link Button */}
      {/* 회원가입 페이지로 이동 */}
      <FlexBox $row="center" $width="25.625rem">
        <Div
          $width="20.813rem"
          $textAlign="center"
          $borderTop="2px solid white"
          $borderBottom="2px solid white"
          $padding="20px 0 20px 0"
        >
          <Span $margin="0 10px 0 0" $textColor="#FFFFFF">
            계정이 없으신가요?
          </Span>
          <Link to="/signup">
            <Span>가입하기</Span>
          </Link>
        </Div>
      </FlexBox>

      {/* 아이디 찾기, 비밀번호 찾기 페이지로 이동 */}
      <FlexBox $row="between" $width="25.625rem">
        {/* 아이디 찾기 Link Button */}
        <Div>
          <Span $fontSize="12px" $textColor="#FFFFFF">
            아이디를 잊으셨나요?
          </Span>
          <Link to="/findid">
            <Span $fontSize="12px">아이디 찾기</Span>
          </Link>
        </Div>

        {/* 비밀번호 찾기 Link Button */}
        <Div>
          <Span $fontSize="12px" $textColor="#FFFFFF">
            비밀번호를 잊으셨나요?
          </Span>
          <Link to="/findpw">
            <Span $fontSize="12px">비밀번호 찾기</Span>
          </Link>
        </Div>
      </FlexBox>
    </>
  );
};

export default Login;
