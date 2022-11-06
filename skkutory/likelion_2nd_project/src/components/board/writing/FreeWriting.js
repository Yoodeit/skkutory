import React from "react";
import "../../../css/BoardWriting.css";

function FreeWriting() {
  return (
    <>
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
            <input
              className="writing-content-input"
              type="text"
              placeholder="내용"
            />
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