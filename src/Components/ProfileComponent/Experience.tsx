/* eslint-disable @typescript-eslint/no-unused-vars */
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
        <Col xs={10} style={{ padding: "0" }}>
          <Col id="ActivityCol" className="my-4 ms-0">
            <h5>Experience</h5>
          </Col>
          {myState.length > 0 &&
            myState.map((e, i) => (
              <div key={i} className="d-flex">
                <Col className="mb-4 d-flex" xs={5} key={i}>
                  <div>
                    <img
                      src={e.image}
                      alt={"ciao"}
                      style={{
                        height: "50px",
                        width: "50px",
                        borderRadius: "100%",
                      }}
                    />
                  </div>
                  <div className="ms-4">
                    <h5>{e.role}</h5>
                    <div>
                      <span>{e.company}</span>
                      <span style={{ display: "block" }}>{e.description}</span>
                      <span>{e.area}</span>
                    </div>
                    <div>
                      <span>{moment(e.startDate).format("MMM YYYY")}</span> -{" "}
                      <span>{moment(e.updatedAt).format("MMM YYYY")}</span>
                    </div>
                  </div>
                </Col>
                {mystateMe._id === "63fc65b1f193e60013807f4e" ||
                "63fc64fdf193e60013807f4c" ? (
                  <Col xs={1} className="mt-1">
                    <ModalModifyEperience experienceId={e} />
                  </Col>
                ) : (
                  ""
                )}
              </div>
            ))}
        </Col>
        {mystateMe._id === "63fc65b1f193e60013807f4e" ||
        "63fc64fdf193e60013807f4c" ? (
          <Col xs={1} className="mt-3">
            <Button
              onClick={handleShowModalPOST}
              className="btn btn-light rounded-circle"
            >
              +
            </Button>
            <ModalExperiencePOST
              show={showModalPOST}
              handleClose={handleCloseModalPOST}
              experienceId={mystateMe._id}
            />
          </Col>
        ) : (
          ""
        )}
      </Row>
    </Container>
  );
};

export default Experience;
