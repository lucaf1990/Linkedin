import { useEffect } from "react";
import { FetchMyProfile, ME } from "../Redux/ActionTypes";
import { useDispatch } from "react-redux";
import ActivityProfile from "./ActivityProfile";
import ProfileSection from "./ProfileSection";
import { Container } from "react-bootstrap";

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
    <Container>
      <ProfileSection />
      <ActivityProfile />;
    </Container>
  );
};

export default Profile;
