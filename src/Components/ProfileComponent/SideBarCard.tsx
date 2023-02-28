import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";

const SideBarCard = () => {
  const data = useSelector((state: RootState) => state.profile.me);
  return (
    <Row className="border-bottom py-3">
      <img
        className="ms-4"
        src={data.image}
        alt={data.name}
        style={{
          height: "50px",
          width: "50px",
          padding: "0",
          borderRadius: "100%",
        }}
      />
      <Col>
        <h6>Nome Cognome</h6>
        <p className="p-Profile">Qualche cosa da dire su di me, non saprei</p>
        <span className="Profile-Btn3 btn-light text-secondary">Connect</span>
      </Col>
    </Row>
  );
};

export default SideBarCard;
