import { Container } from "react-bootstrap";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { useSelector } from "react-redux";
import { MyState } from "../Redux/Interfaces";

const ProfileSection = () => {
  const data = useSelector((state: MyState) => state?.me);
  console.log(data);

  return (
    <Container>
      <img
        src={data?.image}
        alt={data?.name}
        style={{ height: "400px", width: "100%" }}
      />
      <img src={data?.image} alt={data?.name} style={{ height: "200px" }} />
      <Row id="profileProfile">
        <Col id="profileCol">
          <h3>
            {data?.name} {data?.surname}
          </h3>
          <h5>{data?.title}</h5>
          <p>{data?.area}</p>
        </Col>
      </Row>
    </Container>
  );
};
export default ProfileSection;
