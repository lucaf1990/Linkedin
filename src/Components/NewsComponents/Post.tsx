import React from "react";
import InputOption from "./InputOption";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

type PostProps = {
  name: String;
  description: String;
  message: String;
  /*da mettere la foto*/
};

function Post(props: PostProps) {
  const { name, description, message } = props;
  return (
    <div className="post">
      <div className="post_header">
        {/* avatar */}
        <div className="post_info">
          <h2>{name} </h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{message}</p>
      </div>
      <div className="post_buttons">
        <InputOption Icon={<ThumbUpOffAltIcon />} title="Like" />
        <InputOption Icon={<InsertCommentOutlinedIcon />} title="Comment" />
        <InputOption Icon={<ShareOutlinedIcon />} title="Share" />
        <InputOption Icon={<SendOutlinedIcon />} title="Send" />
      </div>
    </div>
  );
}

export default Post;
