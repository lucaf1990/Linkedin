import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchMyProfile,
  FetchProfiles,
  ME,
  PROFILES_FETCH,
} from "../Redux/ActionTypes";
import { FetchHome, HOME_FETCH } from "../Redux/ActionTypes/homeAction";
import { RootState } from "../Redux/Store";

import Feed from "./NewsComponents/Feed";
import NewsSideBar from "./NewsComponents/NewsSideBar";
import RightBar from "./NewsComponents/rightCard";

function Home() {
  const myState = useSelector((state: RootState) => state.home.postsFetch);
  const myStateMe = useSelector((state: RootState) => state.profile.me);

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
    (async () => {
      let data = await FetchHome();
      dispatch({
        type: HOME_FETCH,
        payload: data,
      });
      let data3 = await FetchProfiles();
      dispatch({
        type: PROFILES_FETCH,
        payload: data3,
      });
    })();
    console.log("sono state");
  }, [myStateMe._id]);

  return (
    <div className="d-flex mt-3 justify-content-center">
      <NewsSideBar />
      <Feed />
      <RightBar />
    </div>
  );
}
export default Home;
