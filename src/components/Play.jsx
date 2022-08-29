import React from "react";
import Video from "./Video";

export default function Play() {
  return (
    <div className="play">
      <div className="container">
        <div className="content">
          <h1 className="title">Play games, Record Voice Feedback, Earn Crypto Rewards  & <span className="gradient"> Repeat.</span></h1>
          <p className="description">
          Empowering the web 3.0 gaming community with limitless opportunities to record and submit voice-note feedback in exchange for $FD3 tokens.  
          </p>
         
        </div>
       
        <div className="mobile-wrapper">
         <Video/>
        </div>
      </div>
    </div>
  );
}