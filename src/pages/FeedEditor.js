import React from "react";

// ===== styles & img import =====
import FlexBox from "../styles/FlexStyle";

// ===== components import =====
import FeedForm from "../components/Feed/FeedForm/FeedForm";

// ===== component =====
const FeedEditor = () => {
  return (
    <>
      <FlexBox $row="center" $width="100%">
        <FlexBox
          $dir="col"
          $col="center"
          $width="32.438rem"
          $height="100vh;"
          $backgroundColor="#FBE8E7"
        >
          <FeedForm />
        </FlexBox>
      </FlexBox>
    </>
  );
};

export default FeedEditor;
