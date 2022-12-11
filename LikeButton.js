import React, { useEffect, useState } from "react";
import axios from "axios";
import like from 'C:\Users\이상\Desktop\Front\front\src\button\likeicon.png';

function LikeButton({boardId, boardTitle, boardContent, boardWriter}) {
    const userFrom = localStorage.getItem("userId");
    const [likeCounts, setLikeCounts] = useState(0);
    const [userLiked, setUserLiked] = useState(false);
  
    let variables = {
      userFrom: userFrom,
      boardFrom: boardId,
      boardWriter: boardWriter,
      boardTitle: boardTitle,
      boardContent: boardContent,
    };
  
    const getLikeInfo = () => {
      axios
        .post("/like/likeCounts", variables)
        .then((response) => {
          if (!response.data.success) {
            alert("좋아요 정보를 가져오는데 실패했습니다.");
            return;
          }
          let responsedData = response.data.likeCounts;
          setLikeCounts(responsedData);
        })
        .catch((e) => console.log(e));
    };
  
    const ifUserHasLiked = () => {
      axios
        .post("/like/liked", variables)
        .then((response) => {
          if (!response.data.success) {
            alert("좋아요 정보를 가져오는데 실패했습니다.");
            return;
          }
          let responsedData = response.data.liked;
          setUserLiked(responsedData);
        })
        .catch((e) => console.log(e));
    };
  
    const changeToDislike = () => {
      axios
        .post(`/like/dislike`, variables)
        .then((response) => {
          if (!response.data.success) {
            alert("좋아요 삭제를 실패했습니다.");
            return;
          }
          setLikeCounts(likeCounts - 1);
        })
        .catch((e) => console.log(e));
    };
  
    const changeToLike = () => {
      axios
        .post(`/like`, variables)
        .then((response) => {
          if (!response.data.success) {
            alert("좋아요 등록을 실패했습니다.");
            return;
          }
          setLikeCounts(likeCounts + 1);
        })
        .catch((e) => console.log(e));
    };
  
    const handleLike = (event) => {
      event.preventDefault();
      userLiked ? changeToDislike() : changeToLike();
    };
  
    useEffect(() => {
      getLikeInfo();
      ifUserHasLiked();
    },[likeCounts, userLiked]);
  
    return (
      <>
        <button onClick={handleLike}>
          <ButtonImage src={like} alt="like" />
          <LikeCounted>{likeCounts}</LikeCounted>
        </button>
      </>
    );
  }
  
  export default LikeButton;
  