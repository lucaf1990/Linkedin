import { Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import {
  COMPANY_FETCH,
  fetchCompany,
  fetchJobs,
  JOBS_FETCH,
  SEARCH_FETCH,
  searchJob,
} from "../../Redux/ActionTypes/jobsAction";
import { useDispatch, useSelector } from "react-redux";
import NewsSideBar from "../NewsComponents/NewsSideBar";
import RightBar from "../NewsComponents/rightCard";
import { RootState } from "../../Redux/Store";
import JobsCard from "./JobsCard";
import { useParams } from "react-router-dom";

const SearchComponent = () => {
  const dispatch = useDispatch();
  const { value } = useParams();
  const MySearch = useSelector((state: RootState) => state.jobs.Jobs);

  useEffect(() => {
    (async () => {
      let data = await searchJob(value);
      dispatch({
        type: SEARCH_FETCH,
        payload: data.data,
      });
    })();
  }, []);
  return (
    <div className="d-flex mt-3 justify-content-center">
      <NewsSideBar />
      <div>
        {MySearch.slice(0, 10).map((singJob, i) => (
          <JobsCard key={i} job={singJob} />
        ))}
      </div>
      <RightBar />
    </div>
  );
};

export default SearchComponent;
