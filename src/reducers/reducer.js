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
    default:
      return state;
  }
}
