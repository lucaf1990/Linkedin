import { PayloadAction } from "@reduxjs/toolkit";
import { COMMENTS_FETCH } from "../ActionTypes/commentAction";
import { comments, myComments, MyHomeState, postFetch } from "../Interfaces";

const initialState: myComments = {
  commentsFetch: [],
};

const commentsReducer = (
  state = initialState,
  action: PayloadAction<comments[]>
) => {
  switch (action.type) {
    case COMMENTS_FETCH:
      return {
        commentsFetch: action.payload as comments[],
      };

    default:
      return state;
  }
};
export default commentsReducer;
