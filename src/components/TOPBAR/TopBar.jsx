import React from "react";
import "./topbar.css";
import { Search, Person ,Chat,Notifications} from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Social D</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search  className="searchIcon"/>
          <input className="searchInput" placeholder="Find smth" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topBarlinks">
          <span className="topBarlink">HomePage</span>
          <span className="topBarlink">Timeline</span>
        </div>
        <div className="topBarIcons">
          <div className="topbarIcontItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIcontItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIcontItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}
