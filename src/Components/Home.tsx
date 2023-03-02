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

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let data = await FetchHome();
      dispatch({
        type: HOME_FETCH,
        payload: data,
      });
    })();

    console.log(myState);

    (async () => {
      let data = await FetchMyProfile();
      dispatch({
        type: ME,
        payload: data,
      });

      let data3 = await FetchProfiles();
      dispatch({
        type: PROFILES_FETCH,
        payload: data3,
      });

      console.log("me", data);
    })();
  }, []);

  return (
    <div className="d-flex mt-3 justify-content-center">
      <NewsSideBar />
      <Feed />
      <RightBar />
    </div>
  );
}
export default Home;
