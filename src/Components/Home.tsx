import { async } from "q";
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
  const followers = useSelector((state: RootState) => state.home.followers);
  console.log(followers);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      let data = await fetchMyProfile("me");
      dispatch({
        type: ME,
        payload: data,
      });
      let data3 = await fetchProfiles();
      dispatch({
        type: PROFILES_FETCH,
        payload: data3,
      });
    })();
  }, []);
  useEffect(() => {
    (async () => {
      let data2 = await fetchHome(followers);
      console.log(data2);

      dispatch({
        type: HOME_FETCH,
        payload: data2,
      });
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
