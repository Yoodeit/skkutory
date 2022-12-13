import React from "react";
import "../../../css/BoardWriting.css";
import camera_icon from "../../../images/camera-icon.png";
import Header from "../../Header";
function FreeWriting() {
  return (
    <>
      <Header title="자유게시판" />
      <div className="writing">
        <div className="writing-top">
          <div className="writing-title">
            <input
              className="writing-title-input"
              type="text"
              placeholder="제목"
            />
          </div>
        </div>

        <div className="writing-middle">
          <div className="writing-content">
            <textarea
              className="writing-content-input"
              type="text"
              placeholder="내용"
            />
            <img className="camera-icon" src={camera_icon} />
          </div>
        </div>

        <div>
          <button className="writing-button">완료</button>
        </div>
      </div>
    </>
  );
}

export default FreeWriting;
