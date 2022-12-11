import React, { useState, useEffect } from "react";
import "../../css/SignUp.css";
import { useNavigate } from "react-router-dom";
import goback from "../../images/goback.svg";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
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

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      window.location.replace("http://localhost:3000/dashboard");
    } else {
      setLoading(false);
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      name: name,
      nickname: nickname,
      id: id,
      email: email,
      password1: password1,
      password2: password2,
    };

    // 유효성 검사
    if (password1 !== password2) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다");
      return false;
    }

    axios.post("/api/v1/mall/auth/register/", user).then((res) => {
      if (res.data.key) {
        localStorage.clear();
        localStorage.setItem("token", res.data.key);
        // 사용하려면 App.js에서 /로 라우팅해야 한다
        window.location.replace("/");
      } else {
        setId("");
        setName("");
        setNickname("");
        setEmail("");
        setPassword1("");
        setPassword2("");
        localStorage.clear();
        setErrors(true);
      }
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

      {errors === true && <h2>Cannot signup with provided credentials</h2>}
      <div className="sign-up">
        <div className="input-box">
          <form onSubmit={onSubmit}>
            <div className="input-content">
              <label className="input-title" htmlFor="name">
                이름
              </label>
              <input
                className="sign-up-name"
                name="name"
                type="text"
                value={name}
                onChange={onChangeName}
                required
              />{" "}
            </div>
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
              />{" "}
            </div>
            <div className="input-content">
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
              />{" "}
            </div>
            <div className="input-content">
              {" "}
              <label className="input-title" htmlFor="password1">
                비밀번호
              </label>
              <input
                className="sign-up-name"
                name="password1"
                type="password"
                value={password1}
                onChange={onChangePwd1}
                required
              />{" "}
            </div>
            <div className="input-content">
              {" "}
              <label className="input-title" htmlFor="password2">
                비밀번호 확인
              </label>
              <input
                className="sign-up-name"
                name="password2"
                type="password"
                value={password2}
                onChange={onChangePwd2}
                required
              />{" "}
            </div>
            <div className="input-content">
              {" "}
              <label className="input-title" htmlFor="email">
                이메일
              </label>
              <input
                className="sign-up-name"
                name="email"
                type="email"
                value={email}
                onChange={onChangeEmail}
                required
              />{" "}
            </div>
            <div className="input-content">
              <span className="input-title">학교인증</span>
              <img className="sign-up-name" alt="camera" />
            </div>
            <input className="signup-btn" type="submit" value="회원가입" />
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
