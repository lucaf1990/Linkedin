import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import SinglePost from "./SinglePost";
import { FC } from "react";
import { postFetch } from "../../Redux/Interfaces";
const Post: FC = () => {
  const myState = useSelector((state: RootState) => state.home.postsFetch);

  return (
    <>
      {myState?.slice(0, 100).map((post: postFetch, i: number) => (
        <SinglePost key={i} post={post} />
      ))}
    </>
  );
};

export default Post;
