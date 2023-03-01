import { combineReducers } from "@reduxjs/toolkit";
import profileReducer from "../Reducers";
import homeReducer from "../Reducers/home";

const reducers = combineReducers({
  profile: profileReducer,
  home: homeReducer,
});

export default reducers;
