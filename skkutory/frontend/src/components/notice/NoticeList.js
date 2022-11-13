import React, { useState, useEffect } from "react";
import Pagination from "../Pagination";
import "../../css/NoticeList.css";
import image_icon from "../../images/image-icon.png";


function NoticeList() {
  const noticeList = {
    contents: [
      {
        title: "제목1",
        nickname: "운영자",
        time: "2022.09.29"
      },
      {
        title: "제목2",
        nickname: "운영자",
        time: "2022.09.29"
      },
      {
        title: "제목3",
        nickname: "운영자",
        time: "2022.09.29"
      },
      {
        title: "제목4",
        nickname: "운영자",
        time: "2022.09.29"
      },
      {
        title: "제목5",
        nickname: "운영자",
        time: "2022.09.29"
      },
      {
        title: "제목6",
        nickname: "운영자",
        time: "2022.09.29"
      },
      {
        title: "제목7",
        nickname: "운영자",
        time: "2022.09.29"
      },
      {
        title: "제목8",
        nickname: "운영자",
        time: "2022.09.29"
      },
      {
        title: "제목9",
        nickname: "운영자",
        time: "2022.09.29"
      },
      {
        title: "제목10",
        nickname: "운영자",
        time: "2022.09.29"
      },
      {
        title: "제목11",
        nickname: "운영자",
        time: "2022.09.29"
      },
      {
        title: "제목12",
        nickname: "운영자",
        time: "2022.09.29"
      },
      {
        title: "제목13",
        nickname: "운영자",
        time: "2022.09.29"
      },
      {
        title: "제목14",
        nickname: "운영자",
        time: "2022.09.29"
      },
      {
        title: "제목15",
        nickname: "운영자",
        time: "2022.09.29"
      },
      {
        title: "제목16",
        nickname: "운영자",
        time: "2022.09.29"
      },
      {
        title: "제목17",
        nickname: "운영자",
        time: "2022.09.29"
      },
      {
        title: "제목18",
        nickname: "운영자",
        time: "2022.09.29"
      },
      {
        title: "제목19",
        nickname: "운영자",
        time: "2022.09.29"
      },
      {
        title: "제목20",
        nickname: "운영자",
        time: "2022.09.29"
      }
    ],
  };

  const [contents, setContents] = useState([]);
  const limit = 20;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  return (
    <>
      <div className="notice">
        <div className="notice-middle">
          <div className="notice-card">
            {noticeList.contents.slice(offset, offset + limit).map((el, index) => {
             return (
              <div className="notice-list-box" key={index}>
                <p className="notice-list-title">{el.title}</p>
                <div className="notice-list-bottom">
                  <p className="notice-list-detail">{el.nickname} {el.time} </p>
                  <img className="notice-image-icon" src={image_icon} />
                </div>
              </div>
              )
            })}
          </div>
          <Pagination
          total={noticeList.contents.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
        </div>
        <div className="notice-bottom"/>
      </div>
    </>
  );
}

export default NoticeList;