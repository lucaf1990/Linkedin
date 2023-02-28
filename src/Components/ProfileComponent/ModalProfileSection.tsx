import { Button, Form, Modal, DropdownButton, Dropdown } from "react-bootstrap";

const ModalProfileSection = ({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: () => void;
}) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit intro</Modal.Title>
        </Modal.Header>
        <h6>*Indicates required</h6>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="mt-3">First name*</Form.Label>
              <Form.Control required type="text" placeholder="" autoFocus />
              <Form.Label className="mt-3">Last name*</Form.Label>
              <Form.Control required type="text" placeholder="" />
              <Form.Label className="mt-3">Additional name</Form.Label>
              <Form.Control type="text" placeholder="" />
              <Form.Label className="mt-3">Name Pronunciation</Form.Label>
              <h6>ℹ This can only be added using our mobile app</h6>
              <Form.Label className="mt-3">Pronouns</Form.Label>
              <DropdownButton id="dropdown-basic-button" title="Please select">
                <Dropdown.Item
                  className="dropdown-basic-button"
                  href="#/action-1"
                >
                  She/Her
                </Dropdown.Item>
                <Dropdown.Item
                  className="dropdown-basic-button"
                  href="#/action-2"
                >
                  He/Him
                </Dropdown.Item>
                <Dropdown.Item
                  className="dropdown-basic-button"
                  href="#/action-3"
                >
                  They/Them
                </Dropdown.Item>
                <Dropdown.Item
                  className="dropdown-basic-button"
                  href="#/action-3"
                >
                  Custom
                </Dropdown.Item>
              </DropdownButton>
              <Form.Label>Let others know how to refer to you</Form.Label>
              <Form.Label>
                Learn more about{" "}
                <strong>
                  <a href="https://www.linkedin.com/help/linkedin/answer/a569520">
                    gender pronouns
                  </a>
                </strong>{" "}
              </Form.Label>
              <p></p>
              <Form.Label className="mt-3">Headline*</Form.Label>
              <Form.Control required type="text" placeholder="" />
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
              <Form.Label className="mt-3">
                {" "}
                <h5> Education</h5>{" "}
              </Form.Label>
              <p></p>
              <Form.Label className="mt-3">
                {" "}
                <h5> Location</h5>{" "}
              </Form.Label>
              <br />
              <Form.Label className="mt-3">Country/Region*</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Ex: United State"
              />
              <Form.Label className="mt-3">Postal code</Form.Label>
              <Form.Control type="text" placeholder="" />
              <Form.Label className="mt-3">City*</Form.Label>
              <Form.Control required type="text" placeholder="" />
              <Form.Label className="mt-3">
                {" "}
                <h5> Contact info</h5>{" "}
              </Form.Label>

              <br />
              <Form.Label className="mt-3">
                Add or edit your profile URL, email, and more
              </Form.Label>
            </Form.Group>
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

export default ModalProfileSection;
