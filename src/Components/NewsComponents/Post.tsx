import React, { useState } from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";
import SinglePost from "./SinglePost";

const Post = () => {
  const [postsToShow, setPostsToShow] = useState<number>(10);
  const posts = useSelector((state: RootState) => state.home.postsFetch);

  const handleShowMore = () => {
    setPostsToShow(postsToShow + 10);
  };

  return (
    <>
      {posts?.slice(0, postsToShow).map((post, i) => (
        <SinglePost key={i} post={post} index={i} select={false} />
      ))}
      {posts && posts.length > postsToShow && (
        <Row>
          <button onClick={handleShowMore} className="mostraAltro">
            Mostra altro
          </button>
        </Row>
      )}
    </>
  );
};

export default Post;
