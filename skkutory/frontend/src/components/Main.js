import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <div className="main">
        <Link to="/signin">
          <p>SignIn</p>
        </Link>
        <Link to="/home">
          <p>Home</p>
        </Link>
        <Link to="/mypage">
          <p>MyPage</p>
        </Link>
        <Link to="/freeboard">
          <p>FreeBoard</p>
        </Link>
        <Link to="/infoboard">
          <p>InfoBoard</p>
        </Link>
        <Link to="/suggboard">
          <p>SuggBoard</p>
        </Link>
        <Link to="/groupboard">
          <p>GroupBoard</p>
        </Link>
        <Link to="/shareboard">
          <p>ShareBoard</p>
        </Link>
        <Link to="/roommatefind">
          <p>RoommateFind</p>
        </Link>
        <Link to="/notice">
          <p>Notice</p>
        </Link>
        <Link to="/mypost">
          <p>MyPost</p>
        </Link>
        <Link to="/mycomment">
          <p>MyComment</p>
        </Link>
        <Link to="/bookmark">
          <p>Bookmark</p>
        </Link>
        <Link to="/chat">
          <p>Chat</p>
        </Link>
      </div>
    </>
  );
}

export default Main;
