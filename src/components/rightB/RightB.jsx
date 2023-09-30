import React from "react";
import "./rightB.css";
import {Users} from '../../Info'
import Online from "../online/online";


export default function RightB() {
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        <div className="birtdayContainer">
          <img className="birthdayIMG" src="assets/gift.png" alt="" />
          <span className="birtdayText">
            <b>Bruce Wayne</b> and<b> 3 people</b> hav a bithday{" "}
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAD" />
        <h4 className="rightbartitle">OnlineFriends</h4>
        <ul className="rightBarFriendsList">
       
        {Users.map(u=>(
            <Online key={u.id} user={u}/>
        ))}
        </ul>
      </div>
    </div>
  );
}
