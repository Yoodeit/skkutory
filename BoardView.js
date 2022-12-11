import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import BoardAdd from './BoardAdd';

function BoardView({ history, match }) {
    const userFrom = localStorage.getItem("userId");
    const writerFrom = localStorage.getItem("userNickname");
    const [totalPage, settotalPage] = useState(0);
    const [currentPage, setcurrentPage] = useState(1);
    const [WriterIcon, setWriterIcon] = useState(true);
    const [BoardWriter, setBoardWriter] = useState("익명");
    const [Content, setContent] = useState([]);
    const [inputs, setInput] = useState({
      boardTitle: "",
      boardContent: "",
    });
    const { boardTitle, boardContent } = inputs;

    useEffect(() => {
        FetchBoard();
        console.log('fetch')
      }, [currentPage]);
    
      const FetchBoard = () => {
        axios
          .post("/board/getBoard", { page: currentPage })
          .then((response) => {
            if (response.data.success) {
              setContent(response.data.boards);
              settotalPage(Math.ceil(response.data.count/5));
            } else {
              alert("게시글을 보여줄 수 없습니다.");
            }
          });
      };

      const onRemove = (id) => {
        setContent(Content.filter((Content) => Content._id !== id));
        FetchBoard();
      };
    
      const onChange = (e) => {
        const { value, name } = e.target;
        setInput({
          ...inputs,
          [name]: value,
        });
      };
    
      const onIconClick = () => {
        if (WriterIcon) {
          setWriterIcon(false);
          setBoardWriter(writerFrom);
        } else {
          setWriterIcon(true);
          setBoardWriter("익명");
        }
      };
    
      const onSubmit = (e) => {
        e.preventDefault();
        if (!boardTitle) {
          alert(`제목을 작성해주세요`);
          return;
        } else if (!boardContent) {
          alert(`내용을 작성해주세요`);
          return;
        } else if (boardContent.length > 300) {
          alert(`내용을 300자 이내로 작성해주세요`);
          return;
        }
        let variables = {
          userFrom: userFrom,
          boardTitle: boardTitle,
          boardContent: boardContent,
          boardWriter: BoardWriter,
        };
        axios.post("/board/upload", variables).then((response) => {
          if (response.status === 200) {
            setInput({
              boardTitle: "",
              boardContent: "",
            });
            FetchBoard();
          } else {
            alert("게시글 업로드에 실패하였습니다.");
          }
        });
      };
    }

    export default withRouter(BoardView);