import { PayloadAction } from "@reduxjs/toolkit";
import { FOLLOWER_POST, HOME_FETCH } from "../ActionTypes/homeAction";
import { Me, MyHomeState, postFetch } from "../Interfaces";

const initialState: MyHomeState = {
  postsFetch: [],
  followers: [],
};

const homeReducer = (
  state = initialState,
  action: PayloadAction<postFetch[] | string>
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

    default:
      return state;
  }
};
export default homeReducer;
