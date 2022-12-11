import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/Login.css";
import logo from "../../images/logo.svg";
import goback from "../../images/goback.svg";
import axios from "axios";
import Header from "../Header";

function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      id: id,
      password: password,
    };

    axios
      .post("/api/v1/mall/auth/login/", user)
      .then((res) => {
        if (res.data.key) {
          localStorage.clear();
          localStorage.setItem("token", res.data.key);
          // 사용하려면 App.js에서 /로 라우팅해야 한다
          window.location.replace("/");
        } else {
          setId("");
          setPassword("");
          localStorage.clear();
          setErrors(true);
        }
      })
      .catch((err) => {
        console.clear();
        alert("아이디 또는 비밀번호가 일치하지 않습니다");
        setId("");
        setPassword("");
      });
  };

  return (
    <>
    <Header title="로그인" isMenu={false} ></Header>
      {/* <section className="header">
        <div className="header-con flex-r">
          <img
            onClick={() => navigate(-1)}
            className="header-goback"
            alt="goback"
            src={goback}
          />
          <h1 className="header-page">로그인</h1>
          <div className="header-empty-box"></div>
        </div>
      </section> */}

      {errors === true && <h2>Cannot log in with provided credentials</h2>}
      <div className="login">
        <h2 className="title-explain">성균관대학교 기숙사 커뮤니티</h2>
        <h1 className="title-name">기슦사</h1>
        <img className="logo" alt="logo" src={logo} />
        <form onSubmit={onSubmit}>
          <div className="login-input">
            <input
              className="login-id"
              value={id}
              required
              onChange={(e) => setId(e.target.value)}
              type="text"
              placeholder="아이디"
            />
            <input
              className="login-pw"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              placeholder="비밀번호"
            />
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
            <input className="login-btn" type="submit" value="로그인" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
