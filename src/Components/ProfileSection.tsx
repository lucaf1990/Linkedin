import { Container, Button } from "react-bootstrap";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store";

const ProfileSection = () => {
  const data = useSelector((state: RootState) => state.profile.me);
  console.log(data);

  return (
    <Container>
      <div style={{ position: "absolute" }}>
        <img
          src={data.image}
          alt={data.name}
          style={{
            height: "130px",
            width: "130px",
            padding: "0",
            borderRadius: "100%",
            border: "4px white solid ",
            position: "relative",
            top: "110px",
            left: "150px",
          }}
        />
      </div>
      <Row id="profileProfile" className="flex-column">
        <Col>
          <img
            src={data.image}
            alt={data.name}
            style={{ height: "200px", width: "100%" }}
          />
        </Col>
        <Col id="profileCol" className="mt-5">
          <h6 style={{ fontWeight: "bold" }}>
            {data.name} {data.surname}
          </h6>
          <p style={{ margin: "0", fontSize: "0.8em" }}>{data.title}</p>
          <p style={{ margin: "0", marginBottom: "1rem", fontSize: "0.8em" }}>
            {data.area}
          </p>
        </Col>
        <Col>
          <Button className="Profile-Btn1">Collegati</Button>
          <Button className="Profile-Btn2 btn-light text-primary">
            Messaggio
          </Button>
          <Button className="Profile-Btn3 btn-light text-secondary">
            Altro
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default ProfileSection;
