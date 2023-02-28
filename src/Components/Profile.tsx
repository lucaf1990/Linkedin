import { useEffect } from "react";
import { FetchMyProfile, ME } from "../Redux/ActionTypes";
import { useDispatch } from "react-redux";
import ActivityProfile from "./ActivityProfile";
import ProfileSection from "./ProfileSection";
import { Col, Row } from "react-bootstrap";
import SideBar from "./SideBar";

const Profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      let data = await FetchMyProfile();
      console.log(data);
      dispatch({
        type: ME,
        payload: data,
      });
    })();
  }, []);
  return (
    <Row>
      <Col xs={7} className="ms-5">
        <ProfileSection />
        <ActivityProfile />
      </Col>
      <Col xs={3}>
        <SideBar />
      </Col>
    </Row>
  );
};

export default Profile;
