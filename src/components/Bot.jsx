import React from "react";
import { BsArrowRight } from "react-icons/bs";
import bot from '../assets/bot.svg'
import fe1 from '../assets/fe1.svg'
import fe2 from '../assets/fe2.svg'
import fe3 from '../assets/fe3.svg'
import roll from '../assets/roll.svg'



export default function Bot() {
  return (
    <div className="bot">
      <div className="container">
        <div className="content">
          <h2 className="sub-title">F3-BOTS</h2>
          <h1 className="title">Own your piece of <span className="gradient">freeda V-1</span></h1>
          <p className="description">
            Unlock passive income with feedback processing iNFTs
          </p>

          <div className="f3-container">
             <div className="f3-item">
                 <img src={fe1} alt='icon'/>
                 <h3 className="f3-item-description">5,000 origin F3-Bot iNFTs</h3>
             </div>

             <div className="f3-item">
                 <img src={fe2} alt='icon'/>
                 <h3 className="f3-item-description">You buy, we deploy, you earn</h3>
             </div>

             <div className="f3-item">
                 <img src={fe3} alt='icon'/>
                 <h3 className="f3-item-description">Join waiting list</h3>
             </div>
             
          </div>
           <div className="btn-container"> 
                <button className="black-btn">
                  Coming Soon 
                  <img src={roll} alt="icon" />
                </button>
                <a href="https://feed3.gitbook.io/feed3/f3-bots-intelligent-nfts" target='_blank' rel="noreferrer"><button className='white-btn'>Learn more <BsArrowRight size={25} /></button></a>
            </div>
        </div>

        <div className="image-container">
          <div className="image">
            <img src={bot} alt="home" />
          </div>
          
        </div>
      </div>
      <div className="ellipse">
      </div>
    </div>
  );
}
