import { PayloadAction } from "@reduxjs/toolkit";
import {
  FOLLOWER_POST,
  HOME_FETCH,
  LIKED_POST,
  REMOVE_LIKE,
} from "../ActionTypes/homeAction";
import { Me, MyHomeState, postFetch } from "../Interfaces";

const initialState: MyHomeState = {
  postsFetch: [],
  followers: [],
  likes: [],
};

const homeReducer = (
  state = initialState,
  action: PayloadAction<postFetch[] | string | postFetch | number>
) => {
  switch (action.type) {
    case HOME_FETCH:
      return {
        ...state,
        postsFetch: action.payload as postFetch[],
      };
    case FOLLOWER_POST:
      return {
        ...state,
        followers: [...state.followers, action.payload as string],
      };
    case LIKED_POST:
      return {
        ...state,
        likes: [...state.likes, action.payload as postFetch],
      };
    case REMOVE_LIKE:
      return {
        ...state,
        likes: state.likes.filter((post) => post._id !== action.payload),
      };

    default:
      return state;
  }
};
export default homeReducer;
