import {SET_POSTS, SET_USERNAME, UPDATE_POST, ADD_POST} from "./action-types";
import MockData from '../data-mock';

export const setPosts = () => ({
  type: SET_POSTS,
  payload: MockData
});

export const updatePost = (id, post) => ({
  type: UPDATE_POST,
  payload: {id, post}
});

export const setUserName = (userName) => ({
  type: SET_USERNAME,
  payload: userName
});

export const addPost = (post) => ({
  type: ADD_POST,
  payload: post
});

