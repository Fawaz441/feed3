import React from "react";
import trio from "../assets/try.png";
import gamer from "../assets/gamer.svg";
import { BsArrowRight } from "react-icons/bs";

export default function Gamers() {
  return (
    <div className="gamer">
      <div className="container">
        <div className="content">
          <h1 className="title">Gamers <span className='gradient'>earn</span><br/> Brands <span className='gradient'>learn</span>.</h1>
          <p className="description">
          Feedback-to-earn (FB2E) provides web3 brands with decentralised analytics to improve and scale - while rewarding and retaining communities. 
          </p>
           <a href="https://feed3.gitbook.io/feed3/feedback-to-earn-fb2e-model" target='_blank' rel="noreferrer"><button className='white-btn'>Learn more <BsArrowRight size={25} /></button></a>
        </div>
        <div className="image-container" >
          <div className="image" >
            <img src={trio} alt="home" width='100%'/>
            <img src={gamer} alt="home" />
          </div>
        </div>
      </div>
    </div>
  );
}
