import { PayloadAction } from "@reduxjs/toolkit";
import { HOME_FETCH } from "../ActionTypes/homeAction";
import { MyHomeState, postFetch } from "../Interfaces";

const initialState: MyHomeState = {
  postsFetch: [],
};

const homeReducer = (
  state = initialState,
  action: PayloadAction<postFetch[]>
) => {
  switch (action.type) {
    case HOME_FETCH:
      return {
        ...state,
        postsFetch: action.payload as postFetch[],
      };

    default:
      return state;
  }
};
export default homeReducer;
