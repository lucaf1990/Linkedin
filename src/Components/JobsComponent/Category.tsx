import { Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import {
  CATEGORY_FETCH,
  COMPANY_FETCH,
  fetchCategory,
  fetchCompany,
  fetchJobs,
  JOBS_FETCH,
} from "../../Redux/ActionTypes/jobsAction";
import { useDispatch, useSelector } from "react-redux";
import NewsSideBar from "../NewsComponents/NewsSideBar";
import RightBar from "../NewsComponents/rightCard";
import { RootState } from "../../Redux/Store";
import JobsCard from "./JobsCard";
import { useParams } from "react-router-dom";

const Category = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const MyCategory = useSelector((state: RootState) => state.jobs.Jobs);

  useEffect(() => {
    (async () => {
      let data = await fetchCategory(category);
      dispatch({
        type: CATEGORY_FETCH,
        payload: data.data,
      });
    })();
  }, []);
  return (
    <div className="d-flex mt-3 justify-content-center">
      <NewsSideBar />
      <div>
        {MyCategory.slice(0, 10).map((singJob, i) => (
          <JobsCard key={i} job={singJob} />
        ))}
      </div>
      <RightBar />
    </div>
  );
};

export default Category;
