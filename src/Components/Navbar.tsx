import React from "react";
import "../App.css";
import HeaderOption from "./HeaderOption";
import Logo from "../linkedin.png";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Navbar() {
  return (
    <div className="header">
      <div className="header_left">
        <img src={Logo} alt="LinkedIn icon" />
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Cerca" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={<HomeIcon />} title="Home" />
        <HeaderOption Icon={<SupervisorAccountIcon />} title="My Network" />
        <HeaderOption Icon={<BusinessCenterIcon />} title="Jobs" />
        <HeaderOption Icon={<ChatIcon />} title="Messaging" />
        <HeaderOption Icon={<NotificationsIcon />} title="Notifications" />
      </div>
    </div>
  );
}

export default Navbar;
