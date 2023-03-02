import { ChangeEvent, FormEvent, useState } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchHome,
  HOME_FETCH,
  uploadPost,
} from "../../Redux/ActionTypes/homeAction";
import { newPost } from "../../Redux/Interfaces";
import { RootState } from "../../Redux/Store";

const FileUploader = () => {
  const myId = useSelector((state: RootState) => state.profile.me._id);
  console.log("AAAAAAAAAAAAAAAAAA", myId);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(new FormData());

  const handleSubmit = async () => {
    let x = await uploadPost(myId, formData);
    
  };
  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => {
      prev.delete("post");
      prev.append("profile", e.target.files![0]);
      return prev;
    });
  };
  return (
    <>
      <Form>
        <Form.Group controlId="formFile">
          <Form.Label>Aggiungi un file:</Form.Label>
          <Form.Control
            type="file"
            onChange={handleFile}
          />
          <Button onClick={()=>handleSubmit}>
            aaaa
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default FileUploader;
