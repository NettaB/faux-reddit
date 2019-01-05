import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './main.css';
import PostList from './post-list/post-list';
import SignIn from './sign-in/sign-in';
import AddPost from './new-post/add-post';
import * as actions from "../actions/actions";

class Main extends React.Component {

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <Router>
        <div>
          {this.props.userName ?  <PostList posts={this.props.posts}/>: <SignIn/>}
          <Route path="/new" component={AddPost}/>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => ({
  posts: Object.keys(state.posts).map(key => state.posts[key]),
  userName: state.userName
});

const mapDispatchToProps = dispatch =>({
  getPosts: () => {dispatch(actions.setPosts())}
});
export default connect(mapStateToProps, mapDispatchToProps)(Main)
