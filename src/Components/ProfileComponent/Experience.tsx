import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import ModalModifyEperience from "./ModalModifyExperience";
import ModalExperiencePOST from "./ModalExperiencePOST";


const Experience = () => {
  const myState = useSelector(
    (state: RootState) => state.profile.experiencesFetch
  );
  const mystateMe = useSelector((state: RootState) => state.profile.me);

  const moment = require("moment");

  const [showModalPOST, setShowModalPOST] = useState(false);
  const handleShowModalPOST = () => {
    setShowModalPOST(true);
  };
  const handleCloseModalPOST = () => {
    setShowModalPOST(false);
  };

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {}, [myState]);
  return (
    <Container>
      <Row id="ActivityProfile">
        <Col xs={10} style={{ padding: "0", marginLeft: "30px" }}>
          <Col id="ActivityCol">
            <h5>Experience</h5>
          </Col>
          {myState?.map((e, i) => (
            <div key={i}>
              <Col className="mb-4" key={i}>
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
                <ModalModifyEperience experienceId={e} />
              </Col>
            </div>
          ))}
        </Col>
        <Col xs={1} className="mt-3">
          <Button onClick={handleShowModalPOST}>A</Button>
          <ModalExperiencePOST
            show={showModalPOST}
            handleClose={handleCloseModalPOST}
            experienceId={mystateMe._id}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
