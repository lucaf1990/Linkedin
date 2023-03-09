import { async } from "q";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMyProfile,
  fetchProfiles,
  ME,
  PROFILES_FETCH,
} from "../../Redux/ActionTypes";
import { fetchHome, HOME_FETCH } from "../../Redux/ActionTypes/homeAction";
import { RootState } from "../../Redux/Store";
import Feed from "../NewsComponents/Feed";
import NewsSideBar from "../NewsComponents/NewsSideBar";
import RightBar from "../NewsComponents/rightCard";
import SinglePost from "../NewsComponents/SinglePost";

function LikedPost() {
  const followers = useSelector((state: RootState) => state.home.followers);
  const liked = useSelector((state: RootState) => state.home.likes);
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
      <div>
        {liked.map((singPost, i) => (
          <SinglePost key={i} post={singPost} />
        ))}
      </div>
      <RightBar />
    </div>
  );
}
export default LikedPost;
