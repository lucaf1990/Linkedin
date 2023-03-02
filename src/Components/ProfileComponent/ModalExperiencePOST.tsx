import { useState, useEffect, ChangeEvent } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addMyImg,
  addMyInfo,
  EXPERIENCE_FETCH,
  FetchMyExperience,
  uploadExpImg,
} from "../../Redux/ActionTypes";
import { MyExperienceChanges } from "../../Redux/Interfaces";
import { RootState } from "../../Redux/Store";

const ModalExperiencePOST = ({
  show,
  handleClose,
  experienceId,
}: {
  show: boolean;
  handleClose: () => void;
  experienceId: string;
}) => {

  const myState = useSelector((state: RootState) => state.profile.me);
  
  const [formData, setFormData] = useState(new FormData());

  const [experiencePayload, setExperiencePayload] =
    useState<MyExperienceChanges>({
      role: "",
      company: "",
      startDate: new Date(),
      description: "",
      area: "",
      user: experienceId,
      image:""
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
      role: "",
      company: "",
      startDate: new Date(),
      description: "",
      area: "",
      user: experienceId,
      image:""
    });
  }, []);
  const dispatch = useDispatch();

  const handleSubmit = async (obj: MyExperienceChanges) => {
    let x = await addMyInfo(obj);
    let modifyImg = await addMyImg(x._id,formData,myState._id)
    let data = await FetchMyExperience(experienceId);
    dispatch({
      type: EXPERIENCE_FETCH,
      payload: data,
    });
    console.log("me", data);
    setExperiencePayload({
      role: "",
      company: "",
      startDate: new Date(),
      description: "",
      area: "",
      user: experienceId,
      image:""
    });
  };
  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      prev.delete("post");
      prev.append("experience", e.target.files![0]);
      return prev;
    });
  };
  return (
    <>
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
            <Form.Group controlId="formFile">
              <Form.Label>Aggiungi Immagine:</Form.Label>
              <Form.Control type="file" onChange={handleFile} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="Profile-Btn1"
            style={{ margin: "0", fontSize: "1.2em", fontWeight: "bolder" }}
            onClick={() => {
              handleSubmit(experiencePayload);
              handleClose();
            }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalExperiencePOST;
