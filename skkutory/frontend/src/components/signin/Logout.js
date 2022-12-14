import React from "react";
import "../../css/Logout.css"

function Logout() {
  let token = localStorage.getItem("token");

  function onClickHandler() {
    localStorage.clear();
    window.location.replace("http://localhost:3000/");
  }

  return <button className="logout-btn" onClick={onClickHandler}>로그아웃</button>;
}

export default Logout;
