import { PayloadAction } from "@reduxjs/toolkit";
import { PROFILES_FETCH, ME } from "../ActionTypes";
import { Me, MyState,ArrMe } from "../Interfaces";

const initialState: MyState = {
  profilesFetch: [],
  me: {} as Me,
};

const profileReducer = (state = initialState, action: PayloadAction<Me>) => {
  switch (action.type) {
    case PROFILES_FETCH:
      return {
        ...state,
        profilesFetch: [...state.profilesFetch, action.payload],
      };
    case ME:
      return {
        ...state,
        me: action.payload,
      };

    default:
      return state;
  }
};
export default profileReducer;
