import { Col, Row } from "react-bootstrap";
import SideBarCard from "../ProfileComponent/SideBarCard";

const RightBar = () => {
  return (
    <Row className="flex-column">
      <Col id="profileProfile" className="sideBar">
        <h6>Add to your feed</h6>
        <SideBarCard />
        <Col
          xs={12}
          id="SideBarToggle"
          className="m-0 p-0 text-center pt-3 pb-2 "
        >
          <h6>View all recommendations </h6>
        </Col>
      </Col>
    </Row>
  );
};

export default RightBar;
