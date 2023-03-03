import { useState, useEffect, ChangeEvent } from "react";
import {
  Button,
  Col,
  Row,
  Dropdown,
  DropdownButton,
  Form,
  Modal,
} from "react-bootstrap";
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
  const [myYears, setMyYears] = useState<number[]>([]);
  useEffect(() => {
    const myState = () => {
      const yearsArray = [];
      for (let i = 1923; i < 2024; i++) {
        yearsArray.push(i);
      }
      setMyYears(yearsArray.reverse());
    };
    myState();
  }, []);
  const myState = useSelector((state: RootState) => state.profile.me);

  const [formData, setFormData] = useState(new FormData());

  const [experiencePayload, setExperiencePayload] = useState<
    MyExperienceChanges
  >({
    image: "",
    role: "",
    company: "",
    startDate: new Date(),
    description: "",
    area: "",
    user: experienceId,
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
      image: "",
      role: "",
      company: "",
      startDate: new Date(),
      description: "",
      area: "",
      user: experienceId,
    });
  }, []);
  const dispatch = useDispatch();

  const handleSubmit = async (obj: MyExperienceChanges) => {
    let x = await addMyInfo(obj);
    
    for(const coppia of formData.entries()){
      let modifyImg = await addMyImg(x._id, formData, myState._id);
    }
    let data = await FetchMyExperience(experienceId);
    dispatch({
      type: EXPERIENCE_FETCH,
      payload: data,
    });
    console.log("me", data);
    setExperiencePayload({
      image: "",
      role: "",
      company: "",
      startDate: new Date(),
      description: "",
      area: "",
      user: experienceId,
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
            <Row className="justify-content-around">
              <Col xs={5}>
                <DropdownButton
                  variant="white"
                  className="yearsDropdown ms-5"
                  title="Month"
                >
                  <Dropdown.Item
                    className="dropdown-basic-button"
                    href="#/action-1"
                  >
                    January
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-basic-button"
                    href="#/action-2"
                  >
                    February
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-basic-button"
                    href="#/action-3"
                  >
                    March
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-basic-button"
                    href="#/action-1"
                  >
                    April
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-basic-button"
                    href="#/action-2"
                  >
                    May
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-basic-button"
                    href="#/action-3"
                  >
                    June
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-basic-button"
                    href="#/action-1"
                  >
                    July
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-basic-button"
                    href="#/action-2"
                  >
                    August
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-basic-button"
                    href="#/action-3"
                  >
                    September
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-basic-button"
                    href="#/action-1"
                  >
                    October
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-basic-button"
                    href="#/action-2"
                  >
                    November
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-basic-button"
                    href="#/action-3"
                  >
                    December
                  </Dropdown.Item>
                </DropdownButton>
              </Col>
              <Col xs={5}>
                <DropdownButton
                  variant="white"
                  className="yearsDropdown ms-5"
                  title="Year"
                >
                  {myYears.map((elem, i) => (
                    <Dropdown.Item
                      key={i}
                      className="dropdown-basic-button"
                      href="#/action-1"
                    >
                      {elem}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </Col>
            </Row>
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
