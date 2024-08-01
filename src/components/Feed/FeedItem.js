import React from "react";

// ===== styles & img import =====
import FlexBox from "../../styles/FlexStyle";
import { Button } from "../../styles/ButtonStyle";
import P from "../../styles/TextStyle";
import { Img } from "../../styles/ImgStyle";
import { Div } from "../../styles/LayoutStyle";

// ===== component =====
const FeedItem = ({ authorNickname, creationDate, feedImage, feedContent }) => {
  return (
    <>
      <FlexBox $dir="col" $width="100%" $borderBottom="1px solid #d3d3d3" $margin="0 0 15px 0">
        {/* Feed Item 내 Header */}
        <FlexBox $row="between" $width="100%" $margin="0 0 5px 0">
          {/* 닉네임, 날짜 출력부 */}
          <FlexBox $row="between" $col="end" $margin="0 0 0 10px">
            <P $fontSize="16px" $margin="0 5px 0 0">
              {authorNickname}
            </P>
            <P $fontSize="10px">{creationDate}</P>
          </FlexBox>

          {/* 버튼 출력부 */}
          <FlexBox $margin="0 10px 0 0">
            {/* 수정 버튼 */}
            <Button
              $width="20px"
              $height="20px"
              $margin="0 5px 0 0"
              $backgroundColor="#FFC4C4"
              $borderRadius="50%"
            ></Button>
            {/* 추가 버튼 */}
            <Button
              $width="20px"
              $height="20px"
              $margin="0 5px 0 0"
              $backgroundColor="#FFA7A7"
              $borderRadius="50%"
            ></Button>
            {/* 삭제 버튼 */}
            <Button
              $width="20px"
              $height="20px"
              $margin="0 0 0 0"
              $backgroundColor="#FF7979"
              $borderRadius="50%"
              $hoverColor="#CF5757"
            ></Button>
          </FlexBox>
        </FlexBox>

        {/* img, content 출력부 */}
        <FlexBox $dir="col" $width="100%">
          <Img src={feedImage} $width="100%" />
          <Div $width="100%" $backgroundColor="#fef7f6">
            <P $padding="10px" $fontSize="20px">
              {feedContent}
            </P>
          </Div>
        </FlexBox>

        {/* 전체 댓글 보기 버튼 */}
        <Button $backgroundColor="transparent" $hoverColor="null" $padding="10px" $fontSize="16px">
          전체 댓글 보기
        </Button>
      </FlexBox>
    </>
  );
};

export default FeedItem;
