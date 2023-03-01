import { Col, Row } from "react-bootstrap";
import SideBarCard from "../ProfileComponent/SideBarCard";

const RightBar = () => {
  return (
    <Row className="flex-column ms-3 ">
      <Col id="profileProfile" className=".sideBar">
        <h4>Add to your feed</h4>
        <SideBarCard />

        <Col
          xs={12}
          id="SideBarToggle"
          className="m-0 p-0 text-center pt-3 pb-2 "
        >
          <h5>View all recommendations </h5>
        </Col>
      </Col>
    </Row>
  );
};

export default RightBar;
