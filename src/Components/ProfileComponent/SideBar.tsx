import { Col, Row } from "react-bootstrap";
import SideBarCard from "./SideBarCard";

const SideBar = () => {
  return (
    <Row className="flex-column ms-3">
      <Col id="profileProfile">
        <h6 className="pt-3 ps-1">Edit public profile & URL</h6>
        <hr />
        <h6 className="pb-2 ps-1">Add profile in another language</h6>
      </Col>
      <Col id="profileProfile">
        <h4>People you may Know</h4>
        <SideBarCard />

        <Col
          xs={12}
          id="SideBarToggle"
          className="m-0 p-0 text-center pt-3 pb-2 "
        >
          <h5>Show More 👇</h5>
        </Col>
      </Col>
    </Row>
  );
};

export default SideBar;
