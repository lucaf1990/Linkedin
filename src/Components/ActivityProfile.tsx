import { Container, Row, Col } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { useSelector } from "react-redux";
import { Me } from "../Redux/Interfaces";
const ActivityProfile = () => {
  const mystate = useSelector((state: Me) => state);
  console.log(mystate);
  return (
    <Container>
      <Row id="ActivityProfile">
        <Col id="ActivityCol">
          <h5>Activity</h5>
          <p className="p-activity"> followers </p>

          <h5>{}hasn't posted lately </h5>
          <p className="p-activity">
            {} recent post and comment will be displayed here{" "}
          </p>
          <Dropdown.Toggle id="ActivityToggle">
            Show all activity
          </Dropdown.Toggle>
        </Col>
      </Row>
    </Container>
  );
};

export default ActivityProfile;
