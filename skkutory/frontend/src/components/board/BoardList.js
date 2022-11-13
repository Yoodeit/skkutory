import React from "react";
import { useState, useEffect } from "react";
import Pagination from "../Pagination";
import '../../css/BoardList.css'
import image_icon from "../../images/image-icon.png";

export default function BoardList() {
  const boardList = {
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
      },
      {
        title: "제목21",
        content: "내용21",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      },
      {
        title: "제목22",
        content: "내용22",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      },
      {
        title: "제목23",
        content: "내용23",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      },
      {
        title: "제목24",
        content: "내용24",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      },
      {
        title: "제목25",
        content: "내용25",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      },
      {
        title: "제목26",
        content: "내용26",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      },
      {
        title: "제목27",
        content: "내용27",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      },
      {
        title: "제목28",
        content: "내용28",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      },
      {
        title: "제목29",
        content: "내용29",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      },
      {
        title: "제목30",
        content: "내용30",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      },
      {
        title: "제목31",
        content: "내용31",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      },
      {
        title: "제목32",
        content: "내용32",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      },
      {
        title: "제목33",
        content: "내용33",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      },
      {
        title: "제목34",
        content: "내용34",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      },
      {
        title: "제목35",
        content: "내용35",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      },
      {
        title: "제목36",
        content: "내용36",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      },
      {
        title: "제목37",
        content: "내용37",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      },
      {
        title: "제목38",
        content: "내용38",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      },
      {
        title: "제목39",
        content: "내용39",
        nickname: "닉네임",
        time: "2022.09.29 21:05",
        like: 32,
        bookmark: 2
      },
      {
        title: "제목40",
        content: "내용40",
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
    <div className="board-card">
      {boardList.contents.slice(offset, offset + limit).map((el, index) => {
      return (
        <div className="board-list-box" key={index}>
          <p className="board-list-title">{el.title}</p>
          <p className="board-list-content">{el.content}</p>
          <div className="board-list-bottom">
            <p className="board-list-detail">{el.nickname} {el.time} 공감 {el.like} | 북마크 {el.bookmark}</p>
            <img className="board-image-icon" src={image_icon} />
          </div>
        </div>
      )
    })}
    </div>
      <Pagination
        total={boardList.contents.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </>
  );
}