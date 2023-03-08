import { PayloadAction } from "@reduxjs/toolkit";
import {
  CATEGORY_FETCH,
  COMPANY_FETCH,
  JOBS_FETCH,
  SEARCH_FETCH,
} from "../ActionTypes/jobsAction";
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
    case COMPANY_FETCH:
      return {
        Jobs: action.payload as Jobs[],
      };
    case CATEGORY_FETCH:
      return {
        Jobs: action.payload as Jobs[],
      };
    case SEARCH_FETCH:
      return {
        Jobs: action.payload as Jobs[],
      };

    default:
      return state;
  }
};
export default jobsReducer;
