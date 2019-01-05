import React from 'react';
import { connect } from 'react-redux';
import { Button, ListGroup } from 'react-bootstrap'
import './main.css';
import Post from './components/post';
import * as mainActions from "../../actions/main-actions";

class Main extends React.Component {

  componentDidMount() {
    this.props.getPosts();
  }
  testFunc = () => {console.log('hai')};
  render() {
    return (
      <div className='main'>
        <Button bsStyle='primary' onClick={this.testFunc}>Add Link</Button>
        <ListGroup componentClass='ul' className='posts-list'>
          {this.props.posts.map(item =>
            <Post post={item} key={item.timeStamp} updatePost={this.props.updatePost}/>)}
        </ListGroup>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {posts: Object.keys(state.posts).map(key => state.posts[key])}
}

const  mapDispatchToProps = (dispatch) =>({
  getPosts: () => {dispatch(mainActions.setPosts())},
  updatePost: (id, post) => {dispatch(mainActions.updatePost(id, post))}
});
export default connect(mapStateToProps, mapDispatchToProps)(Main)
