import React from "react";
import InputOption from "./InputOption";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import { useEffect } from "react";
import { FetchHome, HOME_FETCH } from "../../Redux/ActionTypes/homeAction";

const Post = () => {
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
  }, []);

  return (
    <>
      {myState.slice(60, 80).map((post, i) => {
        return (
          <div key={i} className="post">
            <div className="post_header">
              <img
                src={post.user.image}
                alt=""
                style={{
                  height: "40px",
                  width: "40px",
                  marginRight: "10px",
                  borderRadius: "100%",
                }}
              />
              <div className="post_info">
                <h2>
                  {post.user.name} {post.user.surname}
                </h2>
                <p>{post.user.title}</p>
              </div>
            </div>
            <div className="post_body">
              <p>{post.text}</p>
            </div>
            <div className="post_buttons">
              <InputOption Icon={<ThumbUpOffAltIcon />} title="Like" />
              <InputOption
                Icon={<InsertCommentOutlinedIcon />}
                title="Comment"
              />
              <InputOption Icon={<ShareOutlinedIcon />} title="Share" />
              <InputOption Icon={<SendOutlinedIcon />} title="Send" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Post;
