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
  COMMENTS_FETCH,
  fetchComments,
} from "../../Redux/ActionTypes/commentAction";

const Comments = ({ postId }: { postId: string }) => {
  const [comment, setComment] = useState("");

  const myComments = useSelector(
    (state: RootState) => state.comments.commentsFetch
  );

  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      let data = await fetchComments();

      dispatch({
        type: COMMENTS_FETCH,
        payload: data,
      });
    })();
  }, []);

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
                      value={comment}
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
                    <MDBBtn>Submit</MDBBtn>
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MDBCol>
                    <div className="d-flex flex-start">
                      <MDBCardImage
                        className="rounded-circle shadow-1-strong me-3"
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                        alt="avatar"
                        width="65"
                        height="65"
                      />

                      <div className="flex-grow-1 flex-shrink-1">
                        <div>
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="mb-1">
                              Maria Smantha{" "}
                              <span className="small">- 2 hours ago</span>
                            </p>
                            <a href="#!">
                              <MDBIcon fas icon="reply fa-xs" />
                              <span className="small"> reply</span>
                            </a>
                          </div>
                          <p className="small mb-0">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page.
                          </p>
                        </div>
                        5"
                      </div>
                    </div>
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
