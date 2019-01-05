import React from 'react';
import { connect } from 'react-redux';
import {Button, Glyphicon, Panel} from 'react-bootstrap';
import {dateFormatter, commentCounter, noopFunc, upvoteItem, downvoteItem, createComment} from '../../utils';
import CommentList from './comment-list';
import CommentModal from './comment-modal';

class Post extends React.Component {
  constructor() {
    super();
    this.state = {
      isShowingComments: false
    }
  }

  componentWillMount() {
    this.props.post.date = dateFormatter(this.props.post.timeStamp);
  }

  updatePost = () => {
    this.props.updatePost(this.props.post.timeStamp.toString(), this.props.post)
  };

  upVote = () => {
    upvoteItem(this.props.post);
    this.updatePost();
  };

  downVote = () => {
    downvoteItem(this.props.post);
    this.updatePost();
  };

  openPanel = () => {
    if (this.props.post.comments) {
      this.setState({isShowingComments: !this.state.isShowingComments});
    }
  };

  showCommentModal = () => {
    this.setState({showCommentModal: true})
  };

  onModalClose = (commentText) => {
    this.setState({showCommentModal: false});
    if (commentText) {
      const comment = createComment(commentText, this.props.currentUser);
      this.props.post.comments.push(comment);
      this.updatePost();
    }
  };

  render() {
    const post = {...this.props.post};
    const upVoteClass = `up-vote ${post.isUpvoted && 'upvoted'}`;
    const downVoteClass = `down-vote ${post.isDownvoted && 'downvoted'}`;
    return (
      <div>
        <li className='post'>
          <Glyphicon glyph='arrow-up' className={upVoteClass} onClick={this.upVote}/>
          <span className='vote-count'>{post.voteCount}</span>
          <Glyphicon glyph='arrow-down' className={downVoteClass} onClick={this.downVote}/>
          <div className='post-image'>
            <img src={post.image} alt='thumbnail'/>
          </div>
          <h4 className='post-title'><a href={post.link}>{post.title}</a></h4>
          <span className='post-date'>Submitted on {post.date} by {post.userName}</span>
          <div className='post-comments'>
            <span onClick={this.openPanel}>{commentCounter(post.comments)} comments</span>
            <Button onClick={this.showCommentModal}>Add comment</Button>
          </div>
          <Panel expanded={this.state.isShowingComments} onToggle={noopFunc}>
            <Panel.Collapse>
              <Panel.Body>
                <CommentList comments={post.comments} updatePost={this.updatePost}/>
              </Panel.Body>
            </Panel.Collapse>
          </Panel>
        </li>
        <CommentModal show={this.state.showCommentModal} onHide={this.onModalClose}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.userName
});

export default connect(mapStateToProps)(Post)
