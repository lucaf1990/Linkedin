import { PayloadAction } from "@reduxjs/toolkit";
import { JOBS_FETCH } from "../ActionTypes/jobsAction";
import { Jobs, MyJobs } from "../Interfaces";

const initialState: MyJobs = {
  Jobs: [],
};

const jobsReducer = (state = initialState, action: PayloadAction<Jobs[]>) => {
  switch (action.type) {
    case JOBS_FETCH:
      return {
        Jobs: action.payload as Jobs[],
      };
    default:
      return state;
  }
};
export default jobsReducer;
