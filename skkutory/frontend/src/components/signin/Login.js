import React from "react";
import { Link } from "react-router-dom";
import "../../css/Login.css";
import logo from "../../images/logo.svg";

function Login() {
  return (
    <>
      <div className="login">
        <h1>성균관대학교 기숙사 커뮤니티</h1>
        <img className="logo" alt="logo" src={logo} />
        <div className="login-input">
          <input className="login-id" type="text" placeholder="아이디" />
          <input className="login-pw" type="text" placeholder="비밀번호" />
        </div>

        <div className="select-btn">
          <span className="find-id-btn">아이디 찾기</span>
          <span className="find-pw-btn">비밀번호 찾기</span>
          <Link
            to="/signup"
            style={{ textDecoration: "none", color: "#636363" }}
          >
            <span className="login-to-signup-btn">회원가입</span>
          </Link>
        </div>

        <div>
          <button className="login-btn">로그인</button>
        </div>
      </div>
    </>
  );
}

export default Login;
