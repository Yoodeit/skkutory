import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Header.css";
import Menu from "./Menu";
import menu_img from "../images/menu.svg";
import goback from "../images/goback.svg";
import user_img from "../images/user.svg";
import logo from "../images/logo.svg";

function Header(props) {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <section className="header">
        <div className="header-con flex-r">
          {props.isHome ? (
            <>
              {" "}
              <img
                onClick={() => navigate("/mypage")}
                src={user_img}
                alt="user.img"
                className="header-user"
              />
              <img
                onClick={() => navigate("/")}
                className="header-logo"
                alt="header-logo"
                src={logo}
              />
              <Menu open={modalOpen} close={closeModal} />
              <img
                onClick={openModal}
                src={menu_img}
                alt="menu.img"
                className="header-menu"
              />
            </>
          ) : (
            <>
              <img
                onClick={() => navigate(-1)}
                className="header-goback"
                alt="goback"
                src={goback}
              />
              <h1 className="header-page">{props.title}</h1>
              <img
                onClick={openModal}
                src={menu_img}
                alt="menu.img"
                className="header-menu"
              />
              <Menu open={modalOpen} close={closeModal} />
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default Header;
