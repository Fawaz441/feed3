import React from "react";
import { BsArrowRight } from "react-icons/bs";
export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <h1 className="title">Voice Feedback Crypto <span className='gradient'>Rewards</span></h1>
          <p className="sub-title">Introducing the first feedback-to-earn protocol built on top of the blockchain.</p>
         
          <div className="btn-container">
            <a href="https://feed3.gitbook.io/feed3/" target='_blank' rel="noreferrer"><button className='white-btn'>Whitepaper <BsArrowRight size={25} /></button></a>
            <a href="http://presale.feed3.io/register" target='_blank' rel="noreferrer"><button >Enter Presale </button></a>
           </div>
        </div>
       
      </div>
    </div>
  );
}
