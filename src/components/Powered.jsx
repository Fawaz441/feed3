import React from "react";
import { BsArrowRight } from "react-icons/bs";



export default function Home() {
  return (
    <div className="home powered">
      <div className="container">
        <div className="content">
          <h3 className="sub-header">Powered by</h3>
          <h1 className="title">FD3</h1>
          <p className="sub-title">$FD3 is the feedback-to-earn token in the Feed3 ecosystem and is a core catalyst for taking games of all sizes to the next level of engagement. Play, share feedback & earn $FD3.</p>
          <div className="btn-container">
          <a href="https://feed3.gitbook.io/feed3/feed3-target-industry" target='_blank' rel="noreferrer"><button>About FD3  </button></a>
            <a href="/tokenomics" target='_blank' rel="noreferrer"><button className="black-btn">Tokenomics <BsArrowRight size={25}/></button></a>
          </div>

        </div>
      </div>
       
    </div>
  );
}
