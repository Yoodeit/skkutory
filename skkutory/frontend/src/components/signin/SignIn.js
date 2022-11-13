import React from "react";
import { Link } from "react-router-dom";
import "../../css/SignIn.css";
import logo from "../../images/logo.svg"

function SignIn() {
  return (
    <>
      <div className="sign-in">
        <h2>성균관대학교 기숙사 커뮤니티 수정</h2>
        <img className="logo" alt="logo" src={logo} />
        <Link to="/login">
          <div>
            <button className="login-btn">로그인</button>
          </div>
        </Link>
        <Link to="/signup">
          <div>
            <button className="signup-btn">회원가입</button>
          </div>
        </Link>
      </div>
    </>
  );
}

export default SignIn;
