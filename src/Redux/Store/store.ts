import { combineReducers } from "@reduxjs/toolkit";
import profileReducer from "../Reducers";

const reducers = combineReducers({
  profile: profileReducer,
});

export default reducers;
