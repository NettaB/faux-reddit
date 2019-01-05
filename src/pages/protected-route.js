import React from 'react';
import { connect } from 'react-redux';
import PostList from "./post-list/post-list";
import SignIn from "./sign-in/sign-in";

const ProtectedRoute = (props) => {
  return (
    <div>
      {props.userName ? <PostList posts={props.posts}/> : <SignIn/>}
    </div>
  )
};

const mapStateToProps = state => ({
  posts: Object.keys(state.posts).map(key => state.posts[key]),
  userName: state.userName
});

export default connect(mapStateToProps)(ProtectedRoute)
