import * as actions from '../actions/action-types';

const initialState = {
  userName: null,
  posts: []
};

export default function mainReducer(state = initialState, action) {
  switch(action.type) {
    case actions.SET_POSTS:
      return Object.assign({}, state, {posts: action.payload});
    case actions.UPDATE_POST:
      const postId = action.payload.id;
      const updatedPost = {};
      updatedPost[postId] = action.payload.post;
      return Object.assign({}, state, updatedPost);
    case actions.SET_USERNAME:
      return Object.assign({}, state, {userName: action.payload});
    case actions.ADD_POST:
      const newPostId = action.payload.timeStamp;
      const newPost = {};
      newPost[newPostId] = action.payload;
      const newState = Object.assign({}, state);
      newState.posts = Object.assign({}, state.posts, newPost);
      return newState;
    default:
      return state;
  }
}
