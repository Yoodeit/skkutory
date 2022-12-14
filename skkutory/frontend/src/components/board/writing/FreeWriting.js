import React, {useState} from "react";
import "../../../css/BoardWriting.css";
import camera_icon from "../../../images/camera-icon.png";
import Header from "../../Header";
import axios from 'axios';

function FreeWriting() {

  const [id, setId]=useState(6);
  const [title, setTitle]=useState('');
  const [content, setContent]=useState('');
  const [owner, setOwner]=useState(1);

  const url='http://127.0.0.1:8000/api/posts/';

  const data={
    'id': id,
    'title': title,
    'content': content,
    'owner': owner
  };

  const HandleSubmit = async () => {
    await axios
      .post(url, data, { headers: { "Content-Type": "application/json" } })
      .then((res) => {
        if (res.data.key) {
          localStorage.clear();
          localStorage.setItem("token", res.data.key);
          console.log(res.status);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header title="자유게시판" />
      <div className="writing">
        <div className="writing-top">
          <div className="writing-title">
            <input onChange = {(e) => setTitle(e.target.value)} 
              className="writing-title-input"
              type="text"
              placeholder="제목"
            />
          </div>
        </div>

        <div className="writing-middle">
          <div className="writing-content">
            <textarea onChange = {(e) => setContent(e.target.value)} 
              className="writing-content-input"
              type="text"
              placeholder="내용"
            />
            <img className="camera-icon" src={camera_icon} />
          </div>
        </div>

        <div>
          <button className="writing-button" onClick={() => HandleSubmit()} >완료</button>
        </div>
      </div>
    </>
  );
}

export default FreeWriting;