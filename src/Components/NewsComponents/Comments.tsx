/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBTypography,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";
export default function Comments() {
  const [comment, setComment] = useState("");
  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  return (
    <section className="gradient-custom vh-100">
      <MDBContainer className="py-5" style={{ maxWidth: "1000px" }}>
        <MDBRow className="justify-content-center">
          <MDBCol md="12">
            <MDBCard>
              <MDBCardBody className="p-4">
                <MDBTypography tag="h4" className="text-center mb-4 pb-2">
                  Comments
                </MDBTypography>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="comment"
                    name="comment"
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={handleCommentChange}
                  />
                </div>

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
}
