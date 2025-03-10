import React from "react";
import { useNavigate } from "react-router-dom";

// ===== stlyes import =====
import FlexBox from "../../styles/FlexStyle";
import { Button } from "../../styles/ButtonStyle";
import { Img } from "../../styles/ImgStyle";
import { H1 } from "../../styles/TextStyle";
// ===== components import =====
import SignupForm from "../../components/Auth/Signup/SignupForm";
import WhiteArrow from "../../assets/images/icon_park_left.png";

// ===== component =====
const Signup = () => {
  // === navigate ===
  const navigate = useNavigate();
  // === return ===
  return (
    <FlexBox $row="center" $width="100%">
      <FlexBox
        $dir="col"
        $col="center"
        $width="64.063rem"
        $height="100vh"
        $backgroundColor="#FBE8E7"
      >
        {/* 회원가입 Header */}
        <FlexBox $row="between" $col="center" $margin="20px 0 10px 0" $width="100%">
          <Button
            $backgroundColor="transparent"
            $hoverColor="null"
            $margin="0 0 0 50px"
            onClick={() => navigate("/login")}
          >
            <Img src={WhiteArrow} />
          </Button>
          <H1 $margin="0 410px 0 0">회원가입</H1>
        </FlexBox>

        {/* 회원가입 Form */}
        <SignupForm />
      </FlexBox>
    </FlexBox>
  );
};

export default Signup;
