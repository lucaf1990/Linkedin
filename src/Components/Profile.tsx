import { useEffect } from "react";
import { FetchMyProfile, ME } from "../Redux/ActionTypes";
import { useDispatch } from "react-redux";
import ProfileSection from "./ProfileSection";

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
  return <ProfileSection />;
};

export default Profile;
