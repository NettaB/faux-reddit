import React from 'react';
import Comment from './comment';

const CommentList = (props) => {
  if (!props.comments) {
    return null;
  }

  const createCommentList = (comment) => {
    if(comment.comments) {
      return (
        <div key={comment.timeStamp - 1}>
          <Comment key={comment.timeStamp} comment={comment} updatePost={props.updatePost}/>
          <ul className='comment-list' key={comment.timeStamp + 1}>
            {comment.comments.map(createCommentList)}
          </ul>
        </div>
      )
    } else {
      return <Comment key={comment.timeStamp} comment={comment} updatePost={props.updatePost}/>
    }
  };

  return (
    <ul className='comment-list'>
      {props.comments.map(createCommentList)}
    </ul>
  )
};

export default CommentList;
