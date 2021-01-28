import {
  ADD_ALL_POSTS,
  LIKE_POST,
  UNLIKE_POST,
  ADD_COMMENT_TO_POST,
  GET_LIKED_POSTS,
  ADD_MY_POST,
} from "./types";

export function addAllPosts(payload) {
  return { type: ADD_ALL_POSTS, payload };
}
export function likePost(payload) {
  return { type: LIKE_POST, payload };
}
export function unlikePost(payload) {
  return { type: UNLIKE_POST, payload };
}
export function addCommentToPost(payload) {
  return { type: ADD_COMMENT_TO_POST, payload };
}
export function getLikedPosts() {
  return { type: GET_LIKED_POSTS };
}
export function addMyPost(payload) {
  return { type: ADD_MY_POST, payload };
}
