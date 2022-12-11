import React, { useState } from "react";
import HomeBannerCard from "../home/HomeBannerCard";
import "../../css/MyPage.css";
import edit_img from "../../images/edit.svg";
import comment_img from "../../images/comment.svg";
import free_board_img from "../../images/free-board.svg";
import bookmark_img from "../../images/bookmark.svg";
import sample_profile_img from "../../images/sample_profile_img.svg";
import { useNavigate } from "react-router-dom";
import Header from "../Header";

function MyPage() {
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();
  const dummy_profie = {
    profile_img: sample_profile_img,
    nickname: "일이삼사오육칠팔구십일이삼사오육칠팔구십일이",
    dorm: "E-하우스",
    id: "일이삼사오육칠팔구십일이삼사오육칠팔구십일이",
    email: "youjinv@naver.com",
  };
  return (
    <>
      <Header title="마이페이지" />
      <div className="my-page">
        <div className="profile-img" />
        {isEdit ? (
          <></>
        ) : (
          <>
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
                    {dummy_profie.nickname}
                  </span>
                </div>
                <div className="profile-content-box">
                  <span className="profile-content-title">기숙사</span>
                  <span className="profile-content">{dummy_profie.dorm}</span>
                </div>
                <div className="profile-content-box">
                  <span className="profile-content-title">아이디</span>
                  <span className="profile-content">{dummy_profie.id}</span>
                </div>
                <div className="profile-content-box">
                  <span className="profile-content-title">이메일</span>
                  <span className="profile-content">{dummy_profie.email}</span>
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
                link="/mycomment"
              />
              <HomeBannerCard
                title="북마크"
                img={bookmark_img}
                link="/bookmark"
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default MyPage;
