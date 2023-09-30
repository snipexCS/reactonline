import React from 'react'
import './online.css'

export default function Online({user}) {
  return (
    <li className="rifghtBarFRiend">
    <div className="rightBarImgContainer">
      <img
        src={user.profilePicture}
        alt=""
        className="rightBarProfilImg"
      />
      <span className="rightbarONLINe"></span>
    </div>
    <span className="rightBarusername">{user.username}</span>
  </li>
  )
}
