import React, { useState, useEffect } from "react";
import "../../css/SignUp.css";
import { useNavigate } from "react-router-dom";
import goback from "../../images/goback.svg";
import axios from "axios";

function SignUp () {
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
          window.location.replace("/login");
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

  return (
    <>
      <section className="header">
        <div className="header-con flex-r">
          <img
            onClick={() => navigate(-1)}
            className="header-goback"
            alt="goback"
            src={goback}
          />
          <h1 className="header-page">회원가입</h1>
          <div className="header-empty-box"></div>
        </div>
      </section>

      <div className="sign-up">
        {errors === true && <h2>Cannot signup with provided credentials</h2>}
        <div className="input-box">
          <form onSubmit={onSubmit}>
            <div className="input-content">
              <label className="input-title" htmlFor="username">
                이름
              </label>
              <input
                type="text"
                value={username}
                onChange={onChangeUsername}
                required
              />
            </div>
            <div className="input-content">
              <label className="input-title" htmlFor="email">
                이메일
              </label>
              <input
                type="email"
                value={email}
                onChange={onChangeEmail}
                required
              />
            </div>
            <div className="input-content">
              <label className="input-title" htmlFor="password1">
                비밀번호
              </label>
              <input
                type="password"
                value={password1}
                onChange={onChangePwd1}
                minLength="8"
                pattern="^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&])[a-z\d$@$!%*#?&]{8,16}$"
                required
              />
            </div>
            <div className="input-content">
              <label className="input-title" htmlFor="password2">
                비밀번호 확인
              </label>
              <input
                type="password"
                value={password2}
                onChange={onChangePwd2}
                minLength="8"
                pattern="^(?=.*[a-z])(?=.*\d)(?=.*[$@$!%*#?&])[a-z\d$@$!%*#?&]{8,16}$"
                required
              />
            </div>
            <input className="signup-btn" type="submit" value="회원가입" />
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;



{
  /* 
            <div className="input-content">
              <label className="input-title" htmlFor="nickname">
                닉네임
              </label>
              <input
                className="sign-up-name"
                name="nickname"
                type="text"
                minLength="8"
                value={nickname}
                onChange={onChangeNickname}
                required
              />
            </div> */
  /* <div className="input-content">
              <label className="input-title" htmlFor="id">
                아이디
              </label>
              <input
                className="sign-up-name"
                name="id"
                type="text"
                value={id}
                onChange={onChangeId}
                required
              />
            </div> */
  /* <div className="input-content">
              <label className="input-title" htmlFor="dorm">
                기숙사
              </label>
              <select className="sign-up-name">
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
            <div className="input-content">
              <span className="input-title">학교인증</span>
              <img className="sign-up-name" alt="camera" />
            </div> */
}
