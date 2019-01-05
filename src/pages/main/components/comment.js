import React from 'react';
import {Glyphicon, Button} from "react-bootstrap";
import {dateFormatter, commentCounter, upvoteItem, downvoteItem, createComment} from "../utils";
import CommentModal from "./comment-modal";

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      showCommentModal: false
    }
  }

  componentWillMount() {
    this.props.comment.date = dateFormatter(this.props.comment.timeStamp);
  }

  upVote = () => {
    upvoteItem(this.props.comment);
    this.props.updatePost();
  };

  downVote = () => {
    downvoteItem(this.props.comment);
    this.props.updatePost();
  };

  showCommentModal = () => {
    this.setState({showCommentModal: true})
  };

  onModalClose = (commentText) => {
    this.setState({showCommentModal: false});
    if (commentText) {
      const comment = createComment(commentText);
      this.props.comment.comments.push(comment);
      this.props.updatePost();
    }
  };

 render() {
   const comment ={...this.props.comment};
   const upVoteClass = `up-vote ${comment.isUpvoted && 'upvoted'}`;
   const downVoteClass = `down-vote ${comment.isDownvoted && 'downvoted'}`;
   return (
     <div className='comment'>
       <Glyphicon glyph='arrow-up' className={upVoteClass} onClick={this.upVote}/>
       <span className='vote-count'>{comment.voteCount}</span>
       <Glyphicon glyph='arrow-down' className={downVoteClass} onClick={this.downVote}/>
       <p className='comment-text'>{comment.text}</p>
       <span className='comment-date'>Submitted on {comment.date} by {comment.userName}</span>
       <div className='comment-comments'>
        <span>
          {commentCounter(comment.comments)} comments
        </span>
         <Button onClick={this.showCommentModal}>Add comment</Button>
       </div>
       <CommentModal show={this.state.showCommentModal} onHide={this.onModalClose}/>
     </div>
   )
 }
}

export default Comment;
