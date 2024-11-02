import React from "react";
import { useNavigate } from "react-router-dom";

// ===== styles import =====
import FlexBox from "../../../styles/FlexStyle";
import { H1 } from "../../../styles/TextStyle";
import { Button } from "../../../styles/ButtonStyle";
import { Img } from "../../../styles/ImgStyle";
import WhiteArrow from "../../../assets/images/icon_park_left.png";

// ===== component =====
const QuestionField = ({ questionIdx, question }) => {
  // === navigate ===
  const navigate = useNavigate();

  return (
    <>
      <FlexBox $col="center" $width="100%">
        <Button
          $backgroundColor="transparent"
          $hoverColor="null"
          $margin="0 0 0 30px"
          onClick={() => navigate("/qnalist")}
        >
          <Img src={WhiteArrow} />
        </Button>
        <FlexBox $row="center" $width="80%">
          <H1 $margin="0 15px 10px 0">#{questionIdx}</H1>
          <H1 $margin="0 0 10px 0">{question}</H1>
        </FlexBox>
      </FlexBox>
    </>
  );
};

export default QuestionField;
