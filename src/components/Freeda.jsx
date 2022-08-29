import React from "react";
import freeda from '../assets/freeda.svg'
import freedaMobile from '../assets/freeda-mobile.svg'
import { BsArrowRight } from "react-icons/bs";

import Countup from "./Countup";

export default function Freeda() {
  return (
    <div className="freeda">
      <div className="container">
        <div className="content">
          <h1 className="title">say こんにちは to <span className='gradient'>freeda v-1 </span>powered by <span className='gradient'>real-time secW2</span> conversation <span className='gradient'>AI</span> </h1>
          <div className="sub-title">
             <Countup className="subtitle-header" end={2249733}  />
            <p className="description">
            seconds of voice feedback analyzed
            </p>
          </div>
          <p>Freeda governs and processes the audio feedback and determines the quantity of $FD3 tokens to disburse to the players based on multiple factors. </p>
           <a href="https://feed3.gitbook.io/feed3/deep-neural-network-freeda" target='_blank' rel="noreferrer"><button >Learn more <BsArrowRight size={25} /></button></a>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={freeda} alt="home" className="freeda-web" />
            <img src={freedaMobile} alt="home" className="freeda-mobile" />
          </div>
          
        </div>
      </div>
    </div>
  );
}
