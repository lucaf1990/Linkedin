import { Row } from "react-bootstrap";
import { Jobs } from "../../Redux/Interfaces";
import { Link } from "react-router-dom";
function JobsCard({ job }: { job: Jobs }) {
  return (
    <Row
      className="post feed flex-column mx-3 mb-3 mt-0"
      style={{ width: "746px" }}
    >
      <div className="post_info">
        <h5>{job.title}</h5>
        <Link to={`/Company/${job.company_name}`}>
          <p>{job.company_name}</p>
        </Link>
        <Link to={`/Category/${job.category}`}>
          <p>{job.category}</p>
        </Link>
        <p>{job.job_type}</p>
        <p>{job.publication_date}</p>
      </div>
    </Row>
  );
}

export default JobsCard;
