import { combineReducers } from "@reduxjs/toolkit";
import profileReducer from "../Reducers";
import commentsReducer from "../Reducers/comments";
import homeReducer from "../Reducers/home";

const reducers = combineReducers({
  profile: profileReducer,
  home: homeReducer,
  comments: commentsReducer,
});

export default reducers;
