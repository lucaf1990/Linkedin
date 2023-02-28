import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";

const About = () => {
  const mystate = useSelector((state: RootState) => state.profile.me);
  return (
    <Container>
      {mystate.bio !== "" ? (
        <Row id="ActivityProfile">
          <Col style={{ padding: "0" }}>
            <Col id="ActivityCol">
              <h5>About</h5>
            </Col>
            <Col>
              <p>{mystate.bio}</p>
            </Col>
          </Col>
        </Row>
      ) : (
        ""
      )}
    </Container>
  );
};

export default About;
