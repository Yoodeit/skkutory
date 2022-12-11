import axios from 'axios';
import React, { useEffect, useState } from 'react';
import comment from 'C:\Users\이상\Desktop\Front\front\src\comment\logo.svg';

function CommentButton({boardId}) {
    const userFrom = localStorage.getItem("userId");
    const [CommentCounts, setCommentCounts] = useState(0);
    let variables = {
      userFrom: userFrom,
      boardFrom: boardId,
    };
    useEffect(() => {
      axios
        .post("/comment/getComment", variables)
        .then((response) => {
          if(response.data.success) {
            setCommentCounts(response.data.commentCounts);
          } else {
            alert("댓글을 보여줄 수 없습니다.");
          }
        })
    },[])
    return (
      <button>
          <ButtonImage src={comment} alt="comment" />
          <CommentCounted>{CommentCounts}</CommentCounted>
      </button>
    )
  }
  
  export default CommentButton;