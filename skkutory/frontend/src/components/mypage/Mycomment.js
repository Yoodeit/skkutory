import React, { useState, useEffect } from "react";
import Pagination from "../Pagination";
import "../../css/MyContent.css";
import image_icon from "../../images/image-icon.png";


function Mycomment() {
  const contentList = {
    contents: [
      {
        title: "제목1",
        content: "내용1",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      },
      {
        title: "제목2",
        content: "내용2",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      },
      {
        title: "제목3",
        content: "내용3",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      },
      {
        title: "제목4",
        content: "내용4",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      },
      {
        title: "제목5",
        content: "내용5",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      },
      {
        title: "제목6",
        content: "내용6",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      },
      {
        title: "제목7",
        content: "내용7",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      },
      {
        title: "제목8",
        content: "내용8",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      },
      {
        title: "제목9",
        content: "내용9",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      },
      {
        title: "제목10",
        content: "내용10",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      },
      {
        title: "제목11",
        content: "내용11",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      },
      {
        title: "제목12",
        content: "내용12",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      },
      {
        title: "제목13",
        content: "내용13",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      },
      {
        title: "제목14",
        content: "내용14",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      },
      {
        title: "제목15",
        content: "내용15",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      },
      {
        title: "제목16",
        content: "내용16",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      },
      {
        title: "제목17",
        content: "내용17",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      },
      {
        title: "제목18",
        content: "내용18",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      },
      {
        title: "제목19",
        content: "내용19",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      },
      {
        title: "제목20",
        content: "내용20",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      }
    ],
  };

  const [contents, setContents] = useState([]);
  const limit = 20;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  return (
    <>
      <div className="content">
        <div className="content-middle">
          <div className="content-card">
            {contentList.contents.slice(offset, offset + limit).map((el, index) => {
             return (
              <div className="content-list-box" key={index}>
                <p className="content-list-title">{el.title}</p>
                <p className="content-list-content">{el.content}</p>
                <div className="content-list-bottom">
                  <p className="content-list-detail">{el.nickname} {el.time} 공감 {el.like} | 북마크 {el.bookmark} </p>
                  <img className="content-image-icon" src={image_icon} />
                </div>
              </div>
              )
            })}
          </div>
          <Pagination
          total={contentList.contents.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
        </div>

        <div className="content-bottom"/>
      </div>
    </>
  );
}

export default Mycomment;