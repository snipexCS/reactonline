import React from "react";
import TopBar from "../../components/TOPBAR/TopBar";
import SideBar from "../../components/sidebar/SideBar";
import Feed from "../../components/feed/Feed";
import RightB from "../../components/rightB/RightB";
import './home.css'

export default function () {
  return (
    <>
      <TopBar />
      <div className="homeContainer">
        <SideBar />
        <Feed/>
        <RightB/>
      </div>
    </>
  );
}
