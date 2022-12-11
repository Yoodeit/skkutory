import React from 'react';
import { withRouter } from 'react-router-dom';
import UpdateTime from '../../Common/UpdateTime';
import DeleteComment from './DeleteComment';

function AddComment(props) {
    const currentUser = window.localStorage.getItem('userId');
    return (
      <>
        <CommentBox key={props.id}>
          <CommentUser>
            <span style={{display: 'flex'}}>
              <CommentUserImg src={profile} alt="profile"/>
              <CommentUserID>{props.writer}</CommentUserID>
            </span>
            { props.user === currentUser 
              ? <DeleteComment 
                  id={props.id} 
                  user={props.user} 
                  onRemove={props.onRemove}
                /> 
              : null }
          </CommentUser>
          <CommentContent>{props.content}</CommentContent>
          <CommentTime>
            <UpdateTime time={props.time}/>
          </CommentTime>
        </CommentBox>
      </>
    )
  }
  
  export default withRouter(AddComment);