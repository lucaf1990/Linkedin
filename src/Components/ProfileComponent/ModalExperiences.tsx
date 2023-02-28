import { useState } from "react";
import { Button, Form, Modal, DropdownButton, Dropdown } from "react-bootstrap";
import { useEffect } from "react";

const ModalExperiences = ({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: () => void;
}) => {
  const [myYears, setMyYears] = useState<number[]>([]);
  useEffect(() => {
    const myState = () => {
      const yearsArray = [];
      for (let i = 1923; i < 2024; i++) {
        yearsArray.push(i);
      }
      setMyYears(yearsArray);
    };
    myState();
  }, []);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Experiences</Modal.Title>
        </Modal.Header>
        <h6>*Indicates required</h6>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="mt-3">Title*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Ex: Retail Sales Manager"
                autoFocus
              />
              <Form.Label className="mt-3">Employment Type*</Form.Label>
              <DropdownButton id="dropdown-basic-button" title="Please select">
                <Dropdown.Item
                  className="dropdown-basic-button"
                  href="#/action-1"
                >
                  Full-time
                </Dropdown.Item>
                <Dropdown.Item
                  className="dropdown-basic-button"
                  href="#/action-2"
                >
                  Part-Time
                </Dropdown.Item>
                <Dropdown.Item
                  className="dropdown-basic-button"
                  href="#/action-3"
                >
                  Self-employed
                </Dropdown.Item>
                <Dropdown.Item
                  className="dropdown-basic-button"
                  href="#/action-3"
                >
                  Freelance
                </Dropdown.Item>
                <Dropdown.Item
                  className="dropdown-basic-button"
                  href="#/action-3"
                >
                  Contract
                </Dropdown.Item>
                <Dropdown.Item
                  className="dropdown-basic-button"
                  href="#/action-3"
                >
                  Internship
                </Dropdown.Item>
                <Dropdown.Item
                  className="dropdown-basic-button"
                  href="#/action-3"
                >
                  Apprenticeship
                </Dropdown.Item>
                <Dropdown.Item
                  className="dropdown-basic-button"
                  href="#/action-3"
                >
                  Seasonal
                </Dropdown.Item>
              </DropdownButton>

              <Form.Label className="mt-3">Company name</Form.Label>
              <Form.Control type="text" placeholder="Ex: Microsoft" />
              <Form.Label className="mt-3">Location</Form.Label>
              <Form.Control type="text" placeholder="Ex: Muravera" />
              <Form.Label className="mt-3">Location Type</Form.Label>
              <DropdownButton id="dropdown-basic-button" title="Please select">
                <Dropdown.Item
                  className="dropdown-basic-button"
                  href="#/action-1"
                >
                  On-site
                </Dropdown.Item>
                <Dropdown.Item
                  className="dropdown-basic-button"
                  href="#/action-2"
                >
                  Hybrid
                </Dropdown.Item>
                <Dropdown.Item
                  className="dropdown-basic-button"
                  href="#/action-3"
                >
                  Remote
                </Dropdown.Item>
              </DropdownButton>
              <Form.Label className="mt-3">
                Pick a location Type (ex: remote)
              </Form.Label>
              <br />
              <Form.Control
                type="checkbox"
                style={{
                  marginRight: "10px",
                  display: "inline-block",
                  width: "20px",
                  height: "25px",
                }}
              />
              <Form.Label>I am currently working in this role</Form.Label>

              <p></p>
              <Form.Label className="mt-3">Start date*</Form.Label>
              <p></p>
              <DropdownButton className="yearsDropdown" title="Please select">
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
              <DropdownButton className="yearsDropdown" title="Please select">
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
              <p></p>
              <Form.Label className="mt-3">
                {" "}
                <h5> Current position</h5>{" "}
              </Form.Label>
              <p></p>
              <Form.Label className="mt-3">Industry*</Form.Label>
              <Form.Control required type="text" placeholder="Ex: Retail" />
              <p></p>
              <Form.Label className="mt-3">
                Learn more about{" "}
                <strong>
                  <a href="https://www.linkedin.com/help/linkedin/answer/a720019">
                    industry options
                  </a>
                </strong>{" "}
              </Form.Label>
              <p></p>
              <Form.Label className="mt-3">Description</Form.Label>
              <Form.Control
                type="textArea"
                placeholder=""
                style={{ height: "150px" }}
              />
            </Form.Group>
            <Form.Label className="mt-3">Headline*</Form.Label>
            <Form.Control type="text" placeholder="" />
            <Form.Label className="mt-3">
              Appears below your name at the top of the profile
            </Form.Label>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="Profile-Btn1"
            style={{ margin: "0", fontSize: "1.2em", fontWeight: "bolder" }}
            onClick={() => {}}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalExperiences;
