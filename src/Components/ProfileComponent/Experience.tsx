import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import { Container, Row, Col, Button } from "react-bootstrap";
import { GiPencil } from "react-icons/gi";
import ModalExperiences from "./ModalExperiences";
import { useState } from "react";
import ModalModifyEperience from "./ModalModifyExperience";

const Experience = () => {
  const mystate = useSelector(
    (state: RootState) => state.profile.experiencesFetch
  );

  const moment = require("moment");

  const [showModalExperience, setShowModalExperience] = useState(false);

  const handleShowModalExperience = () => {
    setShowModalExperience(true);
  };

  const handleCloseModalExperience = () => {
    setShowModalExperience(false);
  };
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
            <>
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
              <Col xs={1} className="mt-3">
                <Button id="modal-btn" onClick={handleShowModal}>
                  {" "}
                  <GiPencil />
                </Button>
                {/* role: string;
  company: string;
  startDate: Date;
  description: string | null;
  area: string; */}
                <ModalExperiences
                  show={showModal}
                  handleClose={handleCloseModal}
                  experienceId={e}
                  // non da piu nessun errore sul codice pero cmq non va errori in console non so se dipende dalle nmììmodifiche del
                  // put fatto da kevin
                />
              </Col>
            </>
          ))}
        </Col>
        {/* <ModalModifyEperience
            show={showModalExperience}
            handleClose={handleCloseModalExperience}
          />
        <Col xs={1} className="mt-3">
          <Button id="modal-btn" onClick={handleShowModal}>
            {" "}
            <GiPencil />
          </Button>
        </Col> */}
      </Row>
    </Container>
  );
};

export default Experience;
