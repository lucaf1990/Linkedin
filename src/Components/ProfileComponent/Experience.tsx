import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import { Container, Row, Col, Button } from "react-bootstrap";
import { GiPencil } from "react-icons/gi";
import ModalExperiences from "./ModalExperiences";
import { useState } from "react";
const Experience = () => {
  const mystate = useSelector(
    (state: RootState) => state.profile.profilesFetch
  );
  console.log(mystate);

  const moment = require("moment");

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <Container>
      <Row id="ActivityProfile">
        <Col xs={10} style={{ padding: "0", marginLeft: "30px" }}>
          <Col id="ActivityCol">
            <h5>Experience</h5>
          </Col>

          {mystate.map((e, i) => (
            <Col key={i} className="mb-4">
              <h5>{e.role}</h5>
              <div>
                <span>{e.company}</span>
                <span style={{ display: "block" }}>{}</span>
                <span>{e.area}</span>
              </div>
              <div>
                <span>{moment(e.startDate).format("MMM YYYY")}</span> -{" "}
                <span>{moment(e.updatedAt).format("MMM YYYY")}</span>
              </div>
            </Col>
          ))}
        </Col>
        <Col xs={1} className="mt-3">
          <Button id="modal-btn" onClick={handleShowModal}>
            {" "}
            <GiPencil />
          </Button>
          <ModalExperiences show={showModal} handleClose={handleCloseModal} />
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
