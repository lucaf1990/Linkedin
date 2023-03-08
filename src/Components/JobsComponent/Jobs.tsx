import { Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import { fetchJobs, JOBS_FETCH } from "../../Redux/ActionTypes/jobsAction";
import { useDispatch, useSelector } from "react-redux";
import NewsSideBar from "../NewsComponents/NewsSideBar";
import RightBar from "../NewsComponents/rightCard";
import { RootState } from "../../Redux/Store";
import JobsCard from "./JobsCard";

const Jobs = () => {
  const dispatch = useDispatch();

  const AllJobs = useSelector((state: RootState) => state.jobs.Jobs);

  useEffect(() => {
    (async () => {
      let data = await fetchJobs();
      dispatch({
        type: JOBS_FETCH,
        payload: data.data,
      });
    })();
  }, []);
  return (
    <div className="d-flex mt-3 justify-content-center">
      <NewsSideBar />
      <div>
        {AllJobs.slice(0, 10).map((singJob, i) => (
          <JobsCard key={i} job={singJob} />
        ))}
      </div>
      <RightBar />
    </div>
  );
};

export default Jobs;
