import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newPost, postFetch } from "../../Redux/Interfaces";
import {
  fetchHome,
  HOME_FETCH,
  changeMyPost,
} from "../../Redux/ActionTypes/homeAction";
import { RootState } from "../../Redux/Store";
import { Button, Form, Modal } from "react-bootstrap";
import EditIcon from "@mui/icons-material/Edit";

const ModifyPostModal = ({ modifyPost }: { modifyPost: newPost }) => {
  const [show, setShow] = useState(false);
  const followers = useSelector((state: RootState) => state.home.followers);
  const myProfile = useSelector((state: RootState) => state.profile.me);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const [postPayload, setpostPayload] = useState<newPost>({
    text: modifyPost.text,
    _id: modifyPost._id,
  });
  const handleChange = (e: any) => {
    setpostPayload({
      ...postPayload,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    setpostPayload({
      text: modifyPost.text,
      _id: modifyPost._id,
    });
  }, [modifyPost]);
  const handleSubmit = async (obj: newPost) => {
    let x = await changeMyPost(obj);
    let data = await fetchHome(followers);
    dispatch({
      type: HOME_FETCH,
      payload: data,
    });
  };

  return (
    <>
      <div onClick={handleShow}>
        <EditIcon /> Edit post
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit post</Modal.Title>
          <div className="d-flex">
            <img
              src={myProfile.image}
              alt="Profile"
              className="rounded-circle mr-3"
              style={{ height: "40px" }}
            />
            <div className="d-flex justify-content-between">
              <p className="mb-0 mt-4 ml-3 font-weight-bold">
                {myProfile.name}
                {myProfile.surname}
              </p>
            </div>
          </div>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Label className="mt-3">Area</Form.Label>
            <Form.Control
              required
              type="textarea"
              placeholder=""
              name="text"
              value={postPayload.text}
              onChange={(e) => handleChange(e)}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="Profile-Btn1"
            style={{ margin: "0", fontSize: "1.2em", fontWeight: "bolder" }}
            onClick={() => {
              handleSubmit(postPayload);
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
export default ModifyPostModal;
