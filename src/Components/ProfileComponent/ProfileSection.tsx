import { Button, Container } from "react-bootstrap";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { useSelector } from "react-redux";

import { GiPencil } from "react-icons/gi";
import ModalProfileSection from "./ModalProfileSection";
import { useState } from "react";
import { RootState } from "../../Redux/Store";
const ProfileSection = () => {
  const data = useSelector((state: RootState) => state.profile.me);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <Container>
      <div style={{ position: "absolute" }}>
        <img
          src={data.image}
          alt={data.name}
          style={{
            height: "150px",
            width: "150px",
            padding: "0",
            borderRadius: "100%",
            border: "4px white solid ",
            position: "relative",
            top: "95px",
            left: "75px",
          }}
        />
      </div>
      <Row id="profileProfile" className="flex-column">
        <Col style={{ padding: "0" }}>
          {/* Per levare gli spazi alla foto grande */}
          <img
            src={data.image}
            alt={data.name}
            style={{
              height: "200px",
              width: "100%",
              borderTopLeftRadius: "15px",
              borderTopRightRadius: "15px",
            }}
          />
        </Col>
        <Row className="flex-Row">
          <Col xs={11} className="d-flex flex-column">
            <Col id="profileCol" className="mt-5">
              <h6 style={{ fontWeight: "bold" }}>
                {data.name} {data.surname}
              </h6>
              <p style={{ margin: "0", fontSize: "0.8em" }}>{data.title}</p>
              <p
                style={{ margin: "0", marginBottom: "1rem", fontSize: "0.8em" }}
              >
                {data.area}
              </p>
            </Col>
            <Col className="d-flex">
              <div className="Profile-Btn1">Collegati</div>
              <div className="Profile-Btn2 btn-light text-primary">
                Messaggio
              </div>
              <div className="Profile-Btn3 btn-light text-secondary">Altro</div>
            </Col>
          </Col>{" "}
          {data._id === "63fc65b1f193e60013807f4e" ||
          "63fc64fdf193e60013807f4c" ? (
            <Col xs={1} className="mt-3">
              <Button id="modal-btn" onClick={handleShowModal}>
                {" "}
                <GiPencil />
              </Button>
              <ModalProfileSection
                changeProfileInfo={data}
                show={showModal}
                handleClose={handleCloseModal}
              />
            </Col>
          ) : (
            ""
          )}
        </Row>
      </Row>
    </Container>
  );
};
export default ProfileSection;
