import React from "react";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import InputOption from "./InputOption";
import EventIcon from "@mui/icons-material/Event";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";

function Feed() {
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input type="text" placeholder="write a post" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed_inputOption" style={{ display: "flex" }}>
          <InputOption
            Icon={<ImageIcon style={{ color: "#70B5F9" }} />}
            title="Photo"
          />
          <InputOption
            Icon={<SmartDisplayIcon style={{ color: "lightgreen" }} />}
            title="Video"
          />
          <InputOption
            Icon={<EventIcon style={{ color: "#e7a33e" }} />}
            title="Event"
          />
          <InputOption
            Icon={<CalendarViewDayIcon style={{ color: "lightorange" }} />}
            title="Write Article"
          />
        </div>
      </div>
    </div>
  );
}

export default Feed;
