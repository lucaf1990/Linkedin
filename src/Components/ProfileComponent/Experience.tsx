import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import { Container,Row,Col } from "react-bootstrap";
const Experience = () => {
    const mystate = useSelector((state: RootState) => state.profile.profilesFetch);
    console.log(mystate)
    return (
      <Container>
        <Row id="ActivityProfile">
          <Col style={{ padding: "0" }}>
            <Col id="ActivityCol">
              <h5>Experience</h5>
            </Col>
            
          
        {mystate.map((e,i)=>(
          <Col  key={i}>
              <p>{e.company}</p>
          </Col>
        ))}
        </Col>
        </Row>
      </Container>
    );
  };
  
  export default Experience;