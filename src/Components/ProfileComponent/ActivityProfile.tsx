import { Container, Row, Col } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
const ActivityProfile = () => {
  const mystate = useSelector((state: RootState) => state.profile.me);
  console.log(mystate);
  return (
    <Container>
      <Row id="ActivityProfile">
        <Col style={{ padding: "0", marginTop: "15px" }}>
          <Col id="ActivityCol">
            <h5>Activity</h5>
            <p className="p-activity">
              {Math.floor(Math.random() * 7000)} followers{" "}
            </p>

            <h5>{mystate.name} hasn't posted lately </h5>
            <p className="p-activity">
              {mystate.name} recent post and comment will be displayed here{" "}
            </p>
          </Col>
          <Col>
            <Dropdown.Toggle id="ActivityToggle">
              Show all activity
            </Dropdown.Toggle>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default ActivityProfile;
