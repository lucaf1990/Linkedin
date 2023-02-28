import { PayloadAction } from "@reduxjs/toolkit";
import { PROFILES_FETCH, ME } from "../ActionTypes";
import { Me, MyState,ArrMe } from "../Interfaces";

const initialState: MyState = {
  profilesFetch: [],
  me: {} as Me,
};

const profileReducer = (state = initialState, action: PayloadAction<ArrMe[]|Me>) => {
  switch (action.type) {
    case PROFILES_FETCH:
      return {
        ...state,
        profilesFetch: [...state.profilesFetch, ...action.payload as ArrMe[]]
      };  
    case ME:
      return {
        ...state,
        me: action.payload as Me,
      };

    default:
      return state;
  }
};
export default profileReducer;
