import React, { useEffect, useState } from "react";

// ===== styles import =====
import FlexBox from "../../styles/FlexStyle";
import P from "../../styles/TextStyle";

// ===== components import =====
import Modal from "../Common/Modal";
import { Button } from "../../styles/ButtonStyle";

// ===== component =====
const Comment = ({ feedIdx, setIsOpen }) => {
  // feedIdx : Int (백엔드 통신 시 필요)
  // setIsOpen : Func

  // === state ===
  const [commentData, setCommentData] = useState([]);

  useEffect(() => {
    // 전체 댓글 불러오기 성공 시, 전체 댓글 출력
    // 전체 댓글 불러오기 실패 시, modal 출력 후 새로고침

    const data = [
      {
        idx: 0,
        nickname: "왕왕이",
        comment: "아쉽다 ㅠㅠ!!!",
      },
      {
        idx: 1,
        nickname: "뿅아리",
        comment: "그러게 ㅠㅠㅠㅠ!!!",
      },
      {
        idx: 2,
        nickname: "뿅아리",
        comment: "다음에는 꼭 성공하자!",
      },
    ];

    setCommentData(data);
  }, [feedIdx]);

  return (
    <Modal
      setIsOpen={() => setIsOpen(false)}
      dir="col"
      contentRow="start"
      backgroundColor="#FFFFFF"
    >
      {commentData?.map((commentData, index) => (
        <FlexBox
          $width="100%"
          $col="center"
          $borderBottom="1px solid #d3d3d3"
          $margin="20px 0 0 0"
          key={index}
        >
          <P $fontSize="16px" $margin="0 0 5px 0">
            {commentData?.nickname}
          </P>
          <P $fontSize="12px" $margin="0 0 5px 0">
            {commentData?.comment}
          </P>
        </FlexBox>
      ))}
    </Modal>
  );
};

export default Comment;
