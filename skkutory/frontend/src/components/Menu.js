import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Menu.css";
import menu_close from "../images/menu-close.png";
import logo from "../images/logo.svg";
import line from "../images/line.svg";

function Menu(props) {
  const navigate = useNavigate();
  const { open, close } = props;
  const url_bong = "https://dorm.skku.edu/dorm_suwon/";
  const url_myung = "https://dorm.skku.edu/dorm_seoul/";

  return (
    <div className={open ? "openMenu menu" : "menu"}>
      {open ? (
        <section>
          <section className="menu-logo-box">
            <img
              onClick={() => navigate("/")}
              className="menu-logo"
              alt="logo"
              src={logo}
            ></img>
            <img className="menu-close" onClick={close} src={menu_close}></img>
          </section>
          <ul className="menu-list">
            <li onClick={() => navigate("../freeboard")} className="list-name">
              자유게시판
            </li>
            <li onClick={() => navigate("/infoboard")} className="list-name">
              정보게시판
            </li>
            <li onClick={() => navigate("/suggboard")} className="list-name">
              건의게시판
            </li>
            <li onClick={() => navigate("/groupboard")} className="list-name">
              공구게시판
            </li>
            <li onClick={() => navigate("/shareboard")} className="list-name">
              나눔게시판
            </li>
            <li onClick={() => navigate("/roommatefind")} className="list-name">
              룸메 찾아요
            </li>
            <img className="list-line" alt="listline" src={line} />
            <li onClick={() => navigate("/notice")} className="list-name">
              공지사항
            </li>
            <li className="list-name">기숙사 식당</li>
            <li className="list-name">기숙사 정보</li>
            <img className="list-line" alt="listline" src={line} />
            <li onClick={() => navigate("/mypage")} className="list-name">
              마이페이지
            </li>
            <img className="list-line" alt="listline" src={line} />
            <li
              className="list-name"
              onClick={() => {
                window.open(url_bong);
              }}
            >
              봉룡학사 홈페이지
            </li>
            <li
              className="list-name"
              onClick={() => {
                window.open(url_myung);
              }}
            >명륜학사 홈페이지</li>
          </ul>
        </section>
      ) : null}
    </div>
  );
}
export default Menu;
