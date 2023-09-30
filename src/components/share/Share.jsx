import React from "react";
import "./share.css";
import {PermMedia, Label,Room, EmojiEmotions} from '@mui/icons-material'

export default function Share() {
  return <div className="share">
    <div className="shareWrapper">
        <div className="shareTop">
            <img  className=
            'shareprofpicture'src="/assets/person/1.jpeg" alt="" />
            <input placeholder="What" className="shareInput" />
        </div>
        <hr className='sharehr'/ >
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia className="shareIcon"/>
                    <span className="shareOptiontext">
                        photo or vidio
                    </span>
                </div>
                <div className="shareOption">
                    <Label htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className="shareButton">Share</button>
        </div>
    </div>
  </div>;
}
