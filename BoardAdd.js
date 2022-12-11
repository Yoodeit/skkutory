
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import LikeButton from './LikeButton';
import CommentButton from './CommentButton';
import UpdateTime from '../../Common/UpdateTime';
import BoardDelete from './BoardDelete';

function AddBoard(props) {
    const currentUser = window.localStorage.getItem('userId');
    return (
      <>
        <BoardBox key={props.id}>
          <BoardUser>
            <span style={{display: 'flex'}}>
              <BoardUserImg src={profile} alt="profile"/>
              <BoardUserID>{props.writer}</BoardUserID>
              <BoardTime>
                <UpdateTime time={props.time}/>
              </BoardTime>
            </span>
            { props.user === currentUser 
              ? <BoardDelete 
                  board={props.id} 
                  user={props.user} 
                  history={props.history}
                  onRemove={props.onRemove}
                /> 
              : null }
          </BoardUser>
          <Link to={`/board/${props.id}`}>
            <BoardTitle>{props.title}</BoardTitle>
            <BoardContent>{props.content}</BoardContent>
          </Link>
          <div style={{textAlign: "right"}}>
            <LikeButton 
              boardId={props.id} 
              boardWriter={props.writer} 
              boardTitle={props.title} 
              boardContent={props.content}
            />
            <Link to={`/board/${props.id}`}>
              <CommentButton boardId={props.id} />
            </Link>
          </div>
        </BoardBox>
      </>
    )
  }
  
  export default withRouter(AddBoard);