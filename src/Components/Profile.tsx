import { useEffect } from "react";
import { FetchMyExperience, FetchMyProfile, ME, PROFILES_FETCH } from "../Redux/ActionTypes";
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
      let data2= await FetchMyExperience()
        dispatch({
          type: ME,
          payload: data,
        });
        dispatch({
          type: PROFILES_FETCH,
          payload: data2
        })
      console.log(data);
    })();
  }, []);
  return (
    <Row>
      <Col xs={7} className="ms-5">
        <ProfileSection />
        <ActivityProfile />
        <About />
        <Experience/>
      </Col>
      <Col xs={3}>
        <SideBar />
      </Col>
    </Row>
  );
};

export default Profile;
