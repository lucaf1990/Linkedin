import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NewComments } from "../../Redux/Interfaces";
import { Button, Form, Modal } from "react-bootstrap";
import EditIcon from "@mui/icons-material/Edit";
import {
  COMMENTS_FETCH,
  fetchComments,
  modifyMyComment,
} from "../../Redux/ActionTypes/commentAction";

const CommentModalModify = ({ comment }: { comment: NewComments }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const [postPayload, setpostPayload] = useState<NewComments>({
    _id: comment._id,
    comment: comment.comment,
    rate: comment.rate,
    elementId: comment.elementId,
    author: comment.author,
  });
  const handleChange = (e: any) => {
    setpostPayload({
      ...postPayload,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    setpostPayload({
      _id: comment._id,
      comment: comment.comment,
      rate: comment.rate,
      elementId: comment.elementId,
      author: comment.author,
    });
  }, [comment]);
  const handleSubmit = async (obj: NewComments) => {
    let x = await modifyMyComment(obj);
    let data = await fetchComments(comment.elementId);
    dispatch({
      type: COMMENTS_FETCH,
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
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Label className="mt-3">comment</Form.Label>
            <Form.Control
              required
              type="textarea"
              placeholder=""
              name="comment"
              value={postPayload.comment}
              onChange={(e) => handleChange(e)}
            />
          </Form>
          <Form>
            <Form.Label className="mt-3">rate</Form.Label>
            <Form.Control
              required
              type="textarea"
              placeholder=""
              name="rate"
              value={postPayload.rate}
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
export default CommentModalModify;
