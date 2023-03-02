import { useEffect } from "react";
import {
  EXPERIENCE_FETCH,
  FetchMyExperience,
  FetchMyProfile,
  ME,
} from "../Redux/ActionTypes";
import { useDispatch, useSelector } from "react-redux";
import ActivityProfile from "./ProfileComponent/ActivityProfile";
import ProfileSection from "./ProfileComponent/ProfileSection";
import { Col, Row } from "react-bootstrap";
import SideBar from "./ProfileComponent/SideBar";
import About from "./ProfileComponent/About";
import Experience from "./ProfileComponent/Experience";
import { RootState } from "../Redux/Store";
import Footer from "./Footer";

const Profile = () => {
  const myState = useSelector((state: RootState) => state.profile.me);

  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      let data = await FetchMyProfile();
      dispatch({
        type: ME,
        payload: data,
      });
      console.log("me", data);
    })();
  },[]);
  useEffect(() => {
    (async () => {
      if (myState._id) {
        let data2 = await FetchMyExperience(myState._id);
        dispatch({
          type: EXPERIENCE_FETCH,
          payload: data2,
        });
      }
    })();
  }, [myState._id]);

  return (
    <Row style={{ justifyContent: "center" }}>
      <Col xs={6} className="ms-5">
        <ProfileSection />
        <ActivityProfile />
        <About />
        <Experience />
      </Col>
      <Col xs={3}>
        <SideBar />
      </Col>
      <Footer />
    </Row>
  );
};

export default Profile;
