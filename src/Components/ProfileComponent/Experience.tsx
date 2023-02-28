import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import { Container,Row,Col } from "react-bootstrap";
const Experience = () => {
    const mystate = useSelector((state: RootState) => state.profile.profilesFetch);
    return (
      <Container>
        <Row id="ActivityProfile">
        {mystate.map((e)=>(
            <Col style={{ padding: "0" }}>
              <Col id="ActivityCol">
                <h5>Experience</h5>
              </Col>
              <Col>
                <p>{e.bio}</p>
              </Col>
            </Col>
        ))}
        </Row>
      </Container>
    );
  };
  
  export default Experience;