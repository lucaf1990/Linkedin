/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBTypography,
  MDBCardImage,
  MDBIcon,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import {
  addMyComment,
  COMMENTS_FETCH,
  deleteMyComment,
  fetchComments,
} from "../../Redux/ActionTypes/commentAction";
import { NewComments } from "../../Redux/Interfaces";
import CommentModalModify from "./CommentModalModify";

const Comments = ({ postId }: { postId: string }) => {
  const myProfile = useSelector((state: RootState) => state.profile.me);

  const myComments = useSelector(
    (state: RootState) => state.comments.commentsFetch
  );
  const [commentPayload, setCommentPayload] = useState<NewComments>({
    comment: "",
    rate: "",
    elementId: postId,
    author: myProfile.email,
  });
  console.log(commentPayload.elementId);

  const handleChange = (e: any) => {
    setCommentPayload({
      ...commentPayload,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      let data = await fetchComments(postId);
      dispatch({
        type: COMMENTS_FETCH,
        payload: data,
      });
    })();
  }, []);

  const handleSubmit = async (obj: NewComments) => {
    let data = await addMyComment(obj);

    let data2 = await fetchComments(postId);
    dispatch({
      type: COMMENTS_FETCH,
      payload: data2,
    });
  };
  const handleDelete = async (obj: any) => {
    let data = await deleteMyComment(obj);

    let data2 = await fetchComments(postId);
    dispatch({
      type: COMMENTS_FETCH,
      payload: data2,
    });
  };

  return (
    <section className="gradient-custom ">
      <MDBContainer className="py-5" style={{ maxWidth: "1000px" }}>
        <MDBRow className="justify-content-center">
          <MDBCol md="12">
            <MDBCard>
              <MDBCardBody className="p-4">
                <MDBTypography tag="h4" className="text-center mb-4 pb-2">
                  Comments
                </MDBTypography>

                <MDBRow>
                  <MDBCol>
                    <MDBInput
                      label="Add a comment"
                      type="text"
                      name="comment"
                      value={commentPayload.comment}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                    <MDBInput
                      label="Rate from 1 to 5"
                      type="text"
                      name="rate"
                      value={commentPayload.rate}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                    />
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBCol>
                    <div className="form-file">
                      <input type="file" id="fileInput" />
                    </div>
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBCol>
                    <MDBBtn
                      onClick={() => {
                        handleSubmit(commentPayload);
                      }}
                    >
                      Submit
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBCol>
                    {myComments?.map((comment, i) => (
                      <div key={i} className="flex-grow-1 flex-shrink-1">
                        <button onClick={() => handleDelete(comment)}>X</button>
                        <div>
                          <CommentModalModify comment={comment} />
                        </div>
                        <div>
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="mb-1">
                              {comment?.author}
                              <span className="small"></span>
                            </p>
                            <a href="#!">
                              <MDBIcon fas icon="reply fa-xs" />
                              <span className="small"> reply</span>
                            </a>
                          </div>
                          <p className="small mb-0">{comment?.comment}</p>
                        </div>
                        {comment?.rate}
                      </div>
                    ))}
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};
export default Comments;
