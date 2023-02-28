import { Button, Form, Modal } from "react-bootstrap";

const ModalModifyEperience = ({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: () => void;
}) => {
  return (
    <>
      {/* role: string;
  company: string;
  // startDate: Date;
  description: string | null;
  area: string; */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit work experiences</Modal.Title>
        </Modal.Header>
        <h6>*Indicates required</h6>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="mt-3">Role*</Form.Label>
              <Form.Control required type="text" placeholder="" autoFocus />
              <Form.Label className="mt-3">Company*</Form.Label>
              <Form.Control required type="text" placeholder="" />
              <Form.Label className="mt-3">Start Date*</Form.Label>
              <Form.Control required type="date" placeholder="" />
              <Form.Label className="mt-3">Description*</Form.Label>
              <Form.Control required type="textarea" placeholder="" />
              <Form.Label className="mt-3">Area</Form.Label>
              <Form.Control required type="textarea" placeholder="" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="Profile-Btn1"
            style={{ margin: "0", fontSize: "1.2em", fontWeight: "bolder" }}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalModifyEperience;
