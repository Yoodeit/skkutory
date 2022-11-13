import React from "react";
import HomeBannerCard from "../home/HomeBannerCard";
import "../../css/MyPage.css";
import chat_img from "../../images/chat.svg";
import edit_img from "../../images/edit.svg";
import comment_img from "../../images/comment.svg";
import free_board_img from "../../images/free-board.svg";
import bookmark_img from "../../images/bookmark.svg";
import user_img from "../../images/user.svg";
import { useNavigate } from "react-router-dom";

function MyPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="my-page">
        <img className="profile-img" alt="profile-img" src={user_img} />
        <div className="profile-box">
          <img
            onClick={() => navigate("/mypageedit")}
            className="edit-icon"
            alt="edit-icon"
            src={edit_img}
          />
          <div className="profile-content-container">
            <div className="profile-content-box">
              <span className="profile-content-title">닉네임</span>
              <span className="profile-content">
                일이삼사오육칠팔구십일이삼사오육칠팔구십일이
              </span>
            </div>
            <div className="profile-content-box">
              <span className="profile-content-title">기숙사</span>
              <span className="profile-content">명륜학사 E하우스</span>
            </div>
            <div className="profile-content-box">
              <span className="profile-content-title">아이디</span>
              <span className="profile-content">
                일이삼사오육칠팔구십일이삼사오육칠팔구십일이
              </span>
            </div>
            <div className="profile-content-box">
              <span className="profile-content-title">이메일</span>
              <span className="profile-content">youjinv@naver.com</span>
            </div>
          </div>
        </div>
        <div className="my-page-banner">
          <HomeBannerCard
            title="내가 쓴 글"
            img={free_board_img}
            link="/mypost"
          />
          <HomeBannerCard
            title="내가 쓴 댓글"
            img={comment_img}
            link="/mycommnet"
          />
          <HomeBannerCard title="북마크" img={bookmark_img} link="/bookmark" />
        </div>
        <div className="my-chat-box" onClick={() => navigate("/chat")}>
          <span className="my-chat">내가 참여한 채팅</span>
          <img className="chat-img" alt="chat-image" src={chat_img}></img>
        </div>
      </div>
    </>
  );
}

export default MyPage;
