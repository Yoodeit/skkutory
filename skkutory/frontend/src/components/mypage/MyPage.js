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
import axios from "axios";
import Logout from "../signin/Logout";

function MyPage() {
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState(false);

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePwd1 = (e) => {
    setPassword1(e.target.value);
  };

  const onChangePwd2 = (e) => {
    setPassword2(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: username,
      email: email,
      password1: password1,
      password2: password2,
    };

    // 유효성 검사
    if (password1 !== password2) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다");
      return false;
    }

    axios
      .post("http://127.0.0.1:8000/rest-auth/registration/", user)
      .then((res) => {
        if (res.data.key) {
          localStorage.clear();
          localStorage.setItem("token", res.data.key);
          window.location.replace("/");
        } else {
          setUsername("");
          setEmail("");
          setPassword1("");
          setPassword2("");
          localStorage.clear();
          setErrors(true);
        }
      })
      .catch((err) => {
        console.clear();
        alert("error");
      });
  };

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
          <>
            <form onSubmit={onSubmit}>
              <div className="profile-box profile-edit">
                {/* <div className="edit-content">
                  <label className="edit-title" htmlFor="nickname">
                    닉네임
                  </label>
                  <input
                    className="edit-ninkname"
                    name="nickname"
                    type="text"
                    minLength="8"
                    value={nickname}
                    onChange={onChangeNickname}
                    required
                  />
                </div> */}
                <div className="profile-edit-box">
                  <label className="profile-content-title" htmlFor="dorm">
                    기숙사
                  </label>
                  <select className="edit-content">
                    <option value="E-하우스">E-하우스</option>
                    <option value="G-하우스">G-하우스</option>
                    <option value="K-하우스">K-하우스</option>
                    <option value="C-하우스">C-하우스</option>
                    <option value="I-하우스">I-하우스</option>
                    <option value="M-하우스">M-하우스</option>
                    <option value="빅토리하우스">빅토리하우스</option>
                    <option value="크라운빌 A동">크라운빌 A동</option>
                    <option value="크라운빌 C동">크라운빌 C동</option>
                    <option value="이완근관">이완근관</option>
                  </select>
                </div>
                <div className="profile-edit-box">
                  <label className="profile-content-title" htmlFor="password1">
                    현재 비밀번호
                  </label>
                  <input
                    className="edit-content"
                    name="password1"
                    type="password"
                    value={password1}
                    onChange={onChangePwd1}
                    required
                  />
                </div>
                <div className="profile-edit-box">
                  <label className="profile-content-title" htmlFor="password1">
                    변경 비밀번호
                  </label>
                  <input
                    className="edit-content"
                    name="password1"
                    type="password"
                    value={password1}
                    onChange={onChangePwd1}
                    required
                  />
                </div>
                <div className="profile-edit-box">
                  <label className="profile-content-title" htmlFor="password2">
                    비밀번호 확인
                  </label>
                  <input
                    className="edit-content"
                    name="password2"
                    type="password"
                    value={password2}
                    onChange={onChangePwd2}
                    required
                  />
                </div>
              </div>
              <input
                onClick={() => setIsEdit(false)}
                className="edit-btn"
                type="submit"
                value="수정완료"
              />
            </form>
          </>
        ) : (
          <>
            <div className="profile-box">
              <img
                onClick={() => setIsEdit(true)}
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

            <Logout />
          </>
        )}
      </div>
    </>
  );
}

export default MyPage;
