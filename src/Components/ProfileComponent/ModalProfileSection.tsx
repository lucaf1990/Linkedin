import { Button, Form, Modal, DropdownButton, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  changeMyProfileInfo,
  FetchMyProfile,
  ME,
} from "../../Redux/ActionTypes";
import { RootState } from "../../Redux/Store";
import { MyProfileChanges, Me } from "../../Redux/Interfaces";
import { useEffect, useState } from "react";

const ModalProfileSection = ({
  show,
  handleClose,
  changeProfileInfo,
}: {
  show: boolean;
  handleClose: () => void;
  changeProfileInfo: Me;
}) => {
  const myProfile = useSelector((state: RootState) => state.profile.me);
  const dispatch = useDispatch();
  // INIZIA
  const [profilePayload, setprofilePayload] = useState<MyProfileChanges>({
    name: myProfile.name,
    surname: myProfile.username,
    bio: myProfile.bio,
    area: myProfile.area,
    title: myProfile.title,
  });
  const handleChange = (e: any) => {
    console.log("changed payload", e.target.name, e.target.value);

    setprofilePayload({
      ...profilePayload,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setprofilePayload({
      name: myProfile.name,
      surname: myProfile.surname,
      bio: myProfile.bio,
      area: myProfile.area,
      title: myProfile.title,
    });
  }, [changeProfileInfo]);
  const handleSubmit = async(obj: MyProfileChanges) => {
      let changes = await changeMyProfileInfo(obj);
      let data = await FetchMyProfile();
      dispatch({
        type: ME,
        payload: data,
      });
      console.log("me", data);
  
  };

  //FINE
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
              <Form.Control
                name="name"
                required
                type="text"
                placeholder=""
                onChange={(e) => handleChange(e)}
                value={profilePayload.name}
                autoFocus
              />
              <Form.Label className="mt-3">Last name*</Form.Label>
              <Form.Control
                required
                name="surname"
                type="text"
                placeholder=""
                value={profilePayload.surname}
                onChange={(e) => handleChange(e)}
              />
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
              <Form.Control
                name="bio"
                required
                type="text"
                placeholder=""
                value={profilePayload.bio}
                onChange={(e) => handleChange(e)}
              />
              <Form.Label className="mt-3">
                {" "}
                <h5> Current position</h5>{" "}
              </Form.Label>
              <p></p>
              <Form.Label className="mt-3">Industry*</Form.Label>
              <Form.Control
                required
                name="title"
                type="text"
                placeholder="Ex: Retail"
                value={profilePayload.title}
                onChange={(e) => handleChange(e)}
              />
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
                name="area"
                type="text"
                placeholder="Ex: United State"
                value={profilePayload.area}
                onChange={(e) => handleChange(e)}
              />
              <Form.Label className="mt-3">Postal code</Form.Label>
              <Form.Control type="text" placeholder="" />
              <Form.Label className="mt-3">City</Form.Label>
              <Form.Control type="text" placeholder="" />
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
            onClick={() => {
              handleSubmit(profilePayload);
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

export default ModalProfileSection;
