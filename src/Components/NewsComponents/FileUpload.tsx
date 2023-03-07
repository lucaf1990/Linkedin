/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { uploadPost } from "../../Redux/ActionTypes";

import { RootState } from "../../Redux/Store";

const FileUploader = () => {
  const myId = useSelector((state: RootState) => state.profile.me._id);

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
          <Form.Control type="file" onChange={handleFile} />
          <Button onClick={() => handleSubmit}>aaaa</Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default FileUploader;
