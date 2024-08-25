import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ===== styles & img import =====
import FlexBox from "../../styles/FlexStyle";
import { Button } from "../../styles/ButtonStyle";
import P from "../../styles/TextStyle";
import { Img } from "../../styles/ImgStyle";
import { Div } from "../../styles/LayoutStyle";

import { faXmark } from "@fortawesome/free-solid-svg-icons"; // 닫기 아이콘
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"; // 수정 아이콘

// ===== component import =====
import ConfirmModal from "../Modal/ConfirmModal";
import AlertModal from "../Modal/AlertModal";
import Comment from "./Comment";

// ===== style =====
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  width: ${(props) => props.$width || "24px"};
  height: ${(props) => props.$height || "24px"};
  color: #ffffff;
`;

// ===== component =====
const FeedItem = ({ feedIdx, authorNickname, creationDate, feedImage, feedContent }) => {
  // === state ===
  const [isDeletedModalOpen, setIsDeletedModalOpen] = useState(false);
  const [tokenErrorModalOpen, setTokenErrorModalOpen] = useState(false);
  const [authorityErrorModalOpen, setAuthorityErrorModalOpen] = useState(false);
  const [deleteErrorModalOpen, setDeleteErrorModalOpen] = useState(false);
  const [selectedFeedIdx, setSelectedFeedIdx] = useState(null);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);

  // === navigate ===
  const navigate = useNavigate();

  const handleClickFixButton = () => {
    navigate("/feededitor/edit");
  };

  const handleClickDeleteButton = () => {
    setIsDeletedModalOpen(true);
  };

  const handleDeleteFeedItem = () => {
    // 특정 문답 삭제 API 호출 코드
    const status = 404;

    if (status === 401) {
      setTokenErrorModalOpen(true);
    } else if (status === 403) {
      setAuthorityErrorModalOpen(true);
    } else if (status === 404) {
      setDeleteErrorModalOpen(true);
    } else if (status === 200) {
      window.location.reload();
    }
  };

  const handleCloseTokenErrorModal = () => {
    navigate("/login");
  };

  const handleCloseErrorModal = () => {
    window.location.reload();
  };

  const handleOpenCommentModal = (idx) => {
    setSelectedFeedIdx(idx);
    setIsCommentModalOpen(true);
  };

  return (
    <>
      {/* 피드 삭제 Confirm Modal */}
      {isDeletedModalOpen && (
        <ConfirmModal
          message={["피드를 삭제하시겠습니까?"]}
          setIsOpen={setIsDeletedModalOpen}
          onClick={handleDeleteFeedItem}
        />
      )}

      {/* 토큰 에러 Alert Modal */}
      {tokenErrorModalOpen && (
        <AlertModal
          hasFunc={true}
          message="로그인이 필요합니다."
          onClick={handleCloseTokenErrorModal}
        />
      )}

      {/* 권한 에러 Alert Modal */}
      {authorityErrorModalOpen && (
        <AlertModal
          hasFunc={true}
          message="접근 권한이 없습니다."
          onClick={handleCloseErrorModal}
        />
      )}

      {/* 삭제 에러 Alert Modal */}
      {deleteErrorModalOpen && (
        <AlertModal
          hasFunc={true}
          message="게시물이 존재하지 않습니다."
          onClick={handleCloseErrorModal}
        />
      )}

      {/* 전체 댓글 Modal */}
      {isCommentModalOpen && (
        <Comment feedIdx={selectedFeedIdx} setIsOpen={setIsCommentModalOpen} />
      )}

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
              $width="24px"
              $height="24px"
              $margin="0 5px 0 0"
              $backgroundColor="#FFC4C4"
              $borderRadius="50%"
              $fontSize="0px"
              onClick={handleClickFixButton}
            >
              <StyledFontAwesomeIcon $width="18px" $height="18px" icon={faPenToSquare} />
            </Button>
            {/* 삭제 버튼 */}
            <Button
              $width="24px"
              $height="24px"
              $margin="0 0 0 0"
              $backgroundColor="#FF7979"
              $borderRadius="50%"
              $hoverColor="#CF5757"
              $fontSize="0px"
              onClick={handleClickDeleteButton}
              // style={{
              //   display: "grid",
              //   placeItems: "center",
              // }}
            >
              <StyledFontAwesomeIcon icon={faXmark} />
            </Button>
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
        <Button
          $backgroundColor="transparent"
          $hoverColor="null"
          $padding="10px"
          $fontSize="16px"
          onClick={() => handleOpenCommentModal(feedIdx)}
        >
          전체 댓글 보기
        </Button>
      </FlexBox>
    </>
  );
};

export default FeedItem;
