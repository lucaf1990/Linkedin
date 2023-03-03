import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMyProfile,
  fetchProfiles,
  ME,
  PROFILES_FETCH,
} from "../Redux/ActionTypes";
import { fetchHome, HOME_FETCH } from "../Redux/ActionTypes/homeAction";
import { RootState } from "../Redux/Store";

import Feed from "./NewsComponents/Feed";
import NewsSideBar from "./NewsComponents/NewsSideBar";
import RightBar from "./NewsComponents/rightCard";

function Home() {
  const myState = useSelector((state: RootState) => state.profile.me);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let data = await fetchMyProfile();
      dispatch({
        type: ME,
        payload: data,
      });
      console.log("me", data);
      let data3 = await fetchProfiles();
      dispatch({
        type: PROFILES_FETCH,
        payload: data3,
      });
    })();

    console.log("sono state")
  }, []);
  useEffect(() => {
    (async () => {
      let data2 = await fetchHome();
      console.log(data2);
      dispatch({
        type: HOME_FETCH,
        payload: data2,
      });
    })();
  }, [myState]);

  return (
    <div className="d-flex mt-3 justify-content-center">
      <NewsSideBar />
      <Feed />
      <RightBar />
    </div>
  );
}
export default Home;
