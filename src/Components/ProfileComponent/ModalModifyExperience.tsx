import { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import {
  changeMyInfo,
  deleteExp,
  FetchMyExperience,
  FetchMyProfile,
} from "../../Redux/ActionTypes";
import { ArrMe, MyExperienceChanges } from "../../Redux/Interfaces";
import { GiPencil } from "react-icons/gi";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";

const ModalModifyEperience = ({ experienceId }: { experienceId: ArrMe }) => {
  const myState = useSelector((state: RootState) => state.profile.me);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [experiencePayload, setExperiencePayload] =
    useState<MyExperienceChanges>({
      _id: experienceId._id,
      role: experienceId.role,
      company: experienceId.company,
      startDate: new Date(),
      description: experienceId.description,
      area: experienceId.area,
      user: experienceId.user,
    });
  const handleChange = (e: any) => {
    console.log("changed payload", e.target.name, e.target.value);

    setExperiencePayload({
      ...experiencePayload,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    setExperiencePayload({
      _id: experienceId._id,
      role: experienceId.role,
      company: experienceId.company,
      startDate: new Date(),
      description: experienceId.description,
      area: experienceId.area,
      user: experienceId.user,
    });
  }, [experienceId]);
  const handleSubmit = (obj: MyExperienceChanges) => {
    changeMyInfo(obj);
  };

  return (
    <>
      {/* role: string;
  company: string;
  // startDate: Date;
  description: string | null;
  area: string; */}
      <Button id="modal-btn" onClick={handleShow}>
        {" "}
        <GiPencil />
      </Button>
      <Button id="modal-btn" onClick={()=>deleteExp(experiencePayload)}>
        X
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit work experiences</Modal.Title>
        </Modal.Header>
        <h6>*Indicates required</h6>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="mt-3">Role*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder=""
                autoFocus
                name="role"
                value={experiencePayload.role}
                onChange={(e) => handleChange(e)}
              />
              <Form.Label className="mt-3">Company*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder=""
                name="company"
                value={experiencePayload.company}
                onChange={(e) => handleChange(e)}
              />
              <Form.Label className="mt-3">Description*</Form.Label>
              <Form.Control
                required
                type="textarea"
                placeholder=""
                name="description"
                value={experiencePayload.description || ""}
                onChange={(e) => handleChange(e)}
              />
              <Form.Label className="mt-3">Area</Form.Label>
              <Form.Control
                required
                type="textarea"
                placeholder=""
                name="area"
                value={experiencePayload.area}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="Profile-Btn1"
            style={{ margin: "0", fontSize: "1.2em", fontWeight: "bolder" }}
            onClick={() => handleSubmit(experiencePayload)}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalModifyEperience;
