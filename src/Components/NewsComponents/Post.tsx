import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import SinglePost from "./SinglePost";

const Post = () => {
  const myState = useSelector((state: RootState) => state.home.postsFetch);

  return (
    <>
      {myState?.slice(0, 100).map((post, i) => (
        <SinglePost key={i} post={post} />
      ))}
    </>
  );
};

export default Post;
