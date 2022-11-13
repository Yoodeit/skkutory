import React from "react";
import "../../css/SignUp.css"

function SignUp() {
  return (
    <>
      <div className="sign-up">
        <div className="input-box">
          <div className="input-content">
            <span className="input-title">이름</span>
            <input className="sign-up-name" type="text" />
          </div>
          <div className="input-content">
            <span className="input-title">닉네임</span>
            <input className="sign-up-name" type="text" />
          </div>
          <div className="input-content">
            <span className="input-title">아이디</span>
            <input className="sign-up-name" type="text" />
          </div>
          <div className="input-content">
            <span className="input-title">비밀번호</span>
            <input className="sign-up-name" type="text" />
          </div>
          <div className="input-content">
            <span className="input-title">비밀번호 확인</span>
            <input className="sign-up-name" type="text" />
          </div>
          <div className="input-content email">
            <span className="input-title">이메일</span>
            <input className="sign-up-name email-input" type="text" />
            <span className="email-sign">@</span>
            <input className="sign-up-name email-select" type="text" />
          </div>
          <div className="input-content phone">
            <span className="input-title">전화번호</span>
            <input className="sign-up-name phone" type="text" />
            <span>-</span>
            <input className="sign-up-name phone" type="text" />
            <span>-</span>
            <input className="sign-up-name phone" type="text" />
          </div>
          <div className="input-content">
            <span className="input-title">학교인증</span>
            <img className="sign-up-name" alt="camera" />
          </div>
        </div>
        <div>
          <button className="signup-btn">회원가입</button>
        </div>
      </div>
    </>
  );
}

export default SignUp;
