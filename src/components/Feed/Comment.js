import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ===== styles import =====
import FlexBox from "../../styles/FlexStyle";
import P from "../../styles/TextStyle";
import { Button } from "../../styles/ButtonStyle";

import { faXmark } from "@fortawesome/free-solid-svg-icons"; // 닫기 아이콘
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"; // 수정 아이콘
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons"; // 등록 아이콘

// ===== components import =====
import Modal from "../Common/Modal/Modal";
import InputField from "../Common/InputField/InputField";

// ===== style =====
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: ${(props) => props.$width || "24px"};
  height: ${(props) => props.$height || "24px"};
  color: #d3d3d3;
`;

// ===== component =====
const Comment = ({ feedIdx, setIsOpen }) => {
  // feedIdx : Int (백엔드 통신 시 필요)
  // setIsOpen : Func

  // === ref ===
  const commentRef = useRef("");
  const firstCommentRef = useRef("");

  // === state ===
  const [commentData, setCommentData] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);

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

  const handleClickFixButton = () => {
    if (isEditMode) {
      // 댓글 수정 API 호출 코드
      const status = 200;

      if (status === 400) {
        // 쿼리 에러
      } else if (status === 401) {
        // 토큰 에러
      } else if (status === 403) {
        // 엑세스 권한 에러
      } else if (status === 404) {
        // 해당 댓글이 존재하지 않음
      } else if (status === 500) {
        // 서버 내부 에러
      } else {
        setIsEditMode(false);
        window.location.reload();
      }
    } else {
      setIsEditMode(true);
    }
  };

  const handleClickDeleteButton = () => {
    if (isEditMode) {
      setIsEditMode(false);
    } else {
      // 삭제 API 호출 코드
      const status = 200;

      if (status === 401) {
        // 토큰 에러
      } else if (status === 403) {
        // 엑세스 권한 에러
      } else if (status === 404) {
        // 댓글 존재하지 않음
      } else if (status === 500) {
        // 서버 내부 에러
        return;
      } else {
        // 삭제 성공 시 새로고침
        window.location.reload();
      }
    }
  };

  const handleRegisterComment = () => {
    const comment = firstCommentRef.current.value;
    // 1 ~ 50자

    // 댓글 등록 API 호출 코드
    const status = 200;

    if (status === 400) {
      // 정규식 에러
    } else if (status === 401) {
      // 토큰 에러
    } else if (status === 403) {
      // 권한 에러
    } else if (status === 404) {
      // 피드 존재하지 않음
    } else if (status === 500) {
      // 내부 서버 에러
    } else {
      // 성공 시, 새로고침
      window.location.reload();
    }
  };

  return (
    <Modal
      setIsOpen={() => setIsOpen(false)}
      dir="col"
      contentRow="start"
      backgroundColor="#d3d3d3"
    >
      <FlexBox $width="100%" $height="100%" $dir="col" $row="between">
        <FlexBox $width="100%" $height="fit-content" $dir="col">
          {commentData?.map((commentData, index) => (
            <FlexBox
              $width="100%"
              // $col="center"
              $borderBottom="1px solid #d3d3d3"
              $margin="20px 0 0 0"
              key={index}
            >
              <FlexBox $width="100%" $col="center">
                <P $fontSize="16px" $margin="0 5px 5px 5px">
                  {commentData?.nickname}
                </P>
                {isEditMode ? (
                  <>
                    <InputField
                      width="80%"
                      height="20px"
                      margin="0 5px 5px 5px"
                      inputRef={commentRef}
                    />
                  </>
                ) : (
                  <>
                    <P $fontSize="12px" $margin="0 0 5px 0">
                      {commentData?.comment}
                    </P>
                  </>
                )}
              </FlexBox>

              <FlexBox $margin="0 5px 0 0">
                <Button
                  $width="18px"
                  $height="18px"
                  $backgroundColor="transparent"
                  $hoverColor="null"
                  $fontSize="0px"
                  onClick={handleClickFixButton}
                >
                  <StyledFontAwesomeIcon $width="18px" $height="18px" icon={faPenToSquare} />
                </Button>
                <Button
                  $width="18px"
                  $height="18px"
                  $backgroundColor="transparent"
                  $hoverColor="null"
                  $fontSize="0px"
                  onClick={handleClickDeleteButton}
                >
                  <StyledFontAwesomeIcon $width="18px" $height="18px" icon={faXmark} />
                </Button>
              </FlexBox>
            </FlexBox>
          ))}
        </FlexBox>

        <FlexBox $width="100%" $height="fit-content">
          <InputField
            inputRef={firstCommentRef}
            style={{ backgroundColor: "#d3d3d3" }}
            placeholderMessage="댓글을 입력해 주세요."
          />
          <Button
            $margin="0"
            $padding="0 5px 0 5px"
            $height="70px"
            $backgroundColor="#FFFFFF"
            $hoverColor="null"
            onClick={handleRegisterComment}
          >
            <FontAwesomeIcon icon={faCircleArrowUp} />
          </Button>
        </FlexBox>
      </FlexBox>
    </Modal>
  );
};

export default Comment;
