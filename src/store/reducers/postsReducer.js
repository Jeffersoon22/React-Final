import {
  ADD_ALL_POSTS,
  LIKE_POST,
  UNLIKE_POST,
  ADD_COMMENT_TO_POST,
  ADD_MY_POST,
  GET_LIKED_POSTS,
} from "../actions/types";

const initialState = {
  allItems: [],
  likedPosts: [],
  myPosts: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_ALL_POSTS:
      return {
        ...state,
        allItems: action.payload,
      };
    case LIKE_POST:
      let newItems = [...state.allItems];
      newItems.forEach((el) => {
        if (el.id === action.payload) {
          el.liked = true;
        }
      });
      console.log(newItems);
      return {
        ...state,
        allItems: newItems,
      };
    case UNLIKE_POST:
      let newState = [...state.allItems];
      newState.forEach((el) => {
        if (el.id === action.payload) {
          el.liked = false;
        }
      });
      return {
        ...state,
        allItems: newState,
      };

    case ADD_COMMENT_TO_POST:
      let newArr = [...state.allItems];
      newArr.forEach((el) => {
        if (el.id === action.payload.id) {
          el.comments = [...el.comments, action.payload.comment];
        }
      });
      return {
        ...state,
        allItems: newArr,
      };
    case GET_LIKED_POSTS:
      let allPosts = [...state.allItems];
      let myLikedPosts = [];
      allPosts.forEach((el) => {
        if (el.liked) {
          myLikedPosts = [...myLikedPosts, el];
        }
      });
      return {
        ...state,
        likedPosts: myLikedPosts,
      };
    case ADD_MY_POST:
      let myPostsArr = [...state.myPosts, action.payload];
      return {
        ...state,
        myPosts: myPostsArr,
      };
    default:
      return state;
  }
}
