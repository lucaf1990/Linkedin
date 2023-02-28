import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import { Container, Row, Col } from "react-bootstrap";
const Experience = () => {

  const mystate = useSelector(
    (state: RootState) => state.profile.profilesFetch
    );
    console.log(mystate);

    const moment = require('moment');
    let now = moment().format();
    
  return (
    <Container>
      <Row id="ActivityProfile">
        <Col style={{ padding: "0" }}>
          <Col id="ActivityCol">
            <h5>Experience</h5>
          </Col>

          {mystate.map((e, i) => (
            <Col key={i} className='mb-4'>
              <h5>{e.role}</h5>
              <div>
              <span>{e.company}</span>
              <span style={{display:'block'}}>{}</span>
              <span>{e.area}</span>
              </div>
              <div>{e.description}</div>
            </Col>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
