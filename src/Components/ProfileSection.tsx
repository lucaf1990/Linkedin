import { Container } from "react-bootstrap";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store";

const ProfileSection = () => {
  const data = useSelector((state: RootState) => state.profile.me);
  console.log(data);

  return (
    <Container>
      <img
        src={data.image}
        alt={data.name}
        style={{
          height: "160px",
          width: "160px",
          padding: "0",
          borderRadius: "100%",
          border: "4px solid ",
          position: "relative",
          top: "300px",
          left: "50px",
        }}
      />
      <Row id="profileProfile" className="flex-column">
        <Col>
          <img
            src={data.image}
            alt={data.name}
            style={{ height: "300px", width: "100%" }}
          />
        </Col>
        <Col id="profileCol">
          <h3>
            {data.name} {data.surname}
          </h3>
          <h5>{data.title}</h5>
          <p>{data.area}</p>
        </Col>
      </Row>
    </Container>
  );
};
export default ProfileSection;
