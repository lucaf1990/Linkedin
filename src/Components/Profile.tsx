import { useEffect } from "react";
import {
  EXPERIENCE_FETCH,
  FetchMyExperience,
  FetchMyProfile,
  FetchProfiles,
  ME,
  PROFILES_FETCH,
} from "../Redux/ActionTypes";
import { useDispatch } from "react-redux";
import ActivityProfile from "./ProfileComponent/ActivityProfile";
import ProfileSection from "./ProfileComponent/ProfileSection";
import { Col, Row } from "react-bootstrap";
import SideBar from "./ProfileComponent/SideBar";
import About from "./ProfileComponent/About";
import Experience from "./ProfileComponent/Experience";

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      let data = await FetchMyProfile();
      let data2 = await FetchMyExperience();
      let data3 = await FetchProfiles();
      dispatch({
        type: ME,
        payload: data,
      });
      dispatch({
        type: EXPERIENCE_FETCH,
        payload: data2,
      });
      dispatch({
        type: PROFILES_FETCH,
        payload: data3,
      });
      console.log(data3);
    })();
  }, []);
  return (
    <Row style={{ justifyContent: "center" }}>
      <Col xs={6} className="ms-5">
        <ProfileSection />
        <ActivityProfile />
        <About />
        <Experience />
      </Col>
      <Col xs={2}>
        <SideBar />
      </Col>
    </Row>
  );
};

export default Profile;
