import React from 'react';
import { connect } from 'react-redux';
import {Button, ListGroup} from "react-bootstrap";
import Post from "./components/post";
import {Link} from "react-router-dom";
import * as actions from "../../actions/actions";

const PostList = (props) => {
  return (
<div>
  <Link to='/new'><Button bsStyle="info">Add Link</Button></Link>
  <ListGroup componentClass='ul' className='posts-list'>
    {props.posts.map(item =>
      <Post post={item} key={item.timeStamp} updatePost={props.updatePost}/>)}
  </ListGroup>
</div>
  )
};


const mapDispatchToProps = dispatch =>({
  updatePost: (id, post) => {dispatch(actions.updatePost(id, post))}
});

export default connect(null, mapDispatchToProps)(PostList)
