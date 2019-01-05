import {SET_POSTS, UPDATE_POST} from "./action-types";
import MockData from '../data-mock';

export const setPosts = () => ({
  type: SET_POSTS,
  payload: MockData
});

export const updatePost = (id, post) => ({
  type: UPDATE_POST,
  payload: {id, post}
});
