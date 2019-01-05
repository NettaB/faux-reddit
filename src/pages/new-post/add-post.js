import React from 'react';
import { connect } from 'react-redux';
import { FormGroup, FormControl, ControlLabel, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addPost } from '../../actions/actions';

const createPost = (title, link, image = 'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png', userName) => ({
  title,
  link,
  image,
  userName,
  timeStamp: new Date().getTime(),
  voteCount: 0,
  comments: []
});

const AddPost = (props) => {
  let postTitle;
  let postLink;
  let postImage;
  const addPostTitle = (e) => {
    postTitle = e.target.value;
  };

  const addPostLink = (e) => {
    postLink = e.target.value;
  };

  const addImageLink = (e) => {
    postImage = e.target.value;
  };

  const savePost = () => {
    const post = createPost(postTitle, postLink, postImage, props.currentUser);
    props.addPost(post);
    props.history.push('/');
  };

  return (
    <div className='form_center'>
      <form>
        <FormGroup>
          <ControlLabel>Title</ControlLabel>
          <FormControl type='text' onChange={addPostTitle}/>
          <ControlLabel>Link</ControlLabel>
          <FormControl type='text' onChange={addPostLink}/>
          <ControlLabel>Image Link</ControlLabel>
          <FormControl type='text' onChange={addImageLink}/>
        </FormGroup>
        <Row>
          <Button onClick={savePost}>Save</Button>
          <Link to='/'><Button>Cancel</Button></Link>
        </Row>
      </form>
    </div>
  )
};

const mapStateToProps = state => ({
  currentUser: state.userName
});

const mapDispatchToProps = dispatch => ({
  addPost: (post) => {
    dispatch(addPost(post))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
