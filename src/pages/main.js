import React from 'react';
import { connect } from 'react-redux';
import './main.css';
import * as actions from "../actions/actions";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddPost from "./new-post/add-post";
import ProtectedRoute from "./protected-route";

class Main extends React.Component {

  componentDidMount() {
      this.props.getPosts();
  }

  render() {
    return (

      <Router>
        <div>
          <Route exact path='/' component={ProtectedRoute}/>
          <Route path='/new' component={AddPost}/>
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
