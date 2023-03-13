import React, { useState } from "react";
import InputOption from "./InputOption";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { useDispatch, useSelector } from "react-redux";
import { BsThreeDots } from "react-icons/bs";
import { ImEmbed2 } from "react-icons/im";
import { Dropdown } from "react-bootstrap";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import StarIcon from "@mui/icons-material/Star";
import LinkIcon from "@mui/icons-material/Link";
import SmsIcon from "@mui/icons-material/Sms";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ModifyPostModal from "./ModifyPostModal";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  deletePost,
  fetchHome,
  HOME_FETCH,
  LIKED_POST,
  REMOVE_LIKE,
} from "../../Redux/ActionTypes/homeAction";
import { newPost, postFetch } from "../../Redux/Interfaces";
import Comments from "../HomeCommentComponents/Comments";
import { RootState } from "../../Redux/Store";
import { type } from "os";

const SinglePost = ({
  post,
  index,
  select,
}: {
  post: postFetch;
  index: number;
  select: boolean;
}) => {
  const myProfile = useSelector((state: RootState) => state.profile.me);
  const followers = useSelector((state: RootState) => state.home.followers);
  const [showComments, setShowComments] = useState(false);
  const [selected, setSelected] = useState(select);

  const handleChange = () => {
    setShowComments(!showComments);
  };
  const dispatch = useDispatch();
  const AddLike = () => {
    setSelected(!selected);
    if (selected === false) {
      dispatch({
        type: LIKED_POST,
        payload: post,
      });
    } else {
      dispatch({
        type: REMOVE_LIKE,
        payload: post._id,
      });
    }
  };

  // const AddLike = () => {
  //   if (likes.map((l) => l._id).includes(post._id)) {
  //     setSelected(false);
  //     dispatch({
  //       type: REMOVE_LIKE,
  //       payload: post._id,
  //     });
  //   } else {
  //     setSelected(true);
  //     dispatch({
  //       type: LIKED_POST,
  //       payload: post,
  //     });
  //   }
  // };

  const IconaCliccata = selected ? "blue" : "grey";

  const handleDelete = async (obj: newPost) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let x = await deletePost(obj);
    let data = await fetchHome(followers);
    dispatch({
      type: HOME_FETCH,
      payload: data,
    });
  };

  return (
    <div className="post">
      <div className="post_header">
        <img
          src={post.user.image}
          alt="profile"
          style={{
            height: "40px",
            width: "40px",
            marginRight: "10px",
            borderRadius: "100%",
          }}
        />
        <div className="post_info d-flex justify-content-between w-100">
          <div>
            <h5>
              {post.user.name} {post.user.surname}
            </h5>
            <p>{post.user.title}</p>
          </div>
          <Dropdown>
            <Dropdown.Toggle variant="white">
              <BsThreeDots className="m-2" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <StarIcon /> Feature on top profile
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <BookmarkIcon /> Save
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                <LinkIcon /> Copy Link to post
              </Dropdown.Item>
              <Dropdown.Item href="#/action-4">
                <ImEmbed2 /> Embed this post
              </Dropdown.Item>
              {post.user._id === myProfile._id ? (
                <>
                  <div key={post._id}>
                    <Dropdown.Item href="#/action-5">
                      <ModifyPostModal modifyPost={post} />
                    </Dropdown.Item>
                  </div>
                  <div onClick={() => handleDelete(post)}>
                    <Dropdown.Item href="#/action-6">
                      <DeleteIcon /> Delete post
                    </Dropdown.Item>
                  </div>
                </>
              ) : (
                ""
              )}
              <Dropdown.Item href="#/action-7">
                <SmsIcon /> Who can comment on this post
              </Dropdown.Item>
              <Dropdown.Item href="#/action-8">
                <VisibilityIcon /> Who can see this post
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="post_body">
        <p>{post.text}</p>
      </div>
      <div>
        <img
          src={post.image ? post.image : ""}
          alt=""
          style={{ width: "350px" }}
        />
      </div>
      <div className="post_buttons">
        <span onClick={AddLike}>
          <InputOption
            Icon={<ThumbUpOffAltIcon style={{ color: IconaCliccata }} />}
            title="Like"
          />
        </span>
        <span onClick={handleChange}>
          <InputOption Icon={<InsertCommentOutlinedIcon />} title="Comment" />
        </span>
        <InputOption Icon={<ShareOutlinedIcon />} title="Share" />
        <InputOption Icon={<SendOutlinedIcon />} title="Send" />
      </div>
      {showComments && (
        <div>
          <Comments postId={post._id} />
        </div>
      )}
    </div>
  );
};

export default SinglePost;
