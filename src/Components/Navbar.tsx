import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import HeaderOption from "./ProfileComponent/HeaderOption";
import Logo from "../linkedin.png";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Navbar() {
  return (
    <div className="header">
      <div className="header_left">
        <img src={Logo} alt="LinkedIn icon" />
        <div className="header_search" style={{ height: "1.8rem" }}>
          <SearchIcon />
          <input type="text" placeholder="Cerca" />
        </div>
      </div>
      <div className="header_right">
        <Link to={"/"}>
          <HeaderOption
            Icon={<HomeIcon style={{ fontSize: "1.5em" }} />}
            title="Home"
          />
        </Link>
        <HeaderOption
          Icon={<SupervisorAccountIcon style={{ fontSize: "1.5em" }} />}
          title="My Network"
        />
        <HeaderOption
          Icon={<BusinessCenterIcon style={{ fontSize: "1.5em" }} />}
          title="Jobs"
        />
        <HeaderOption
          Icon={<ChatIcon style={{ fontSize: "1.5em" }} />}
          title="Messaging"
        />
        <HeaderOption
          Icon={<NotificationsIcon style={{ fontSize: "1.5em" }} />}
          title="Notifications"
        />
        <Link to={"/Profile"}>
          <HeaderOption
            Icon={<AccountCircleIcon style={{ fontSize: "1.5em" }} />}
            title="Profile"
          />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
