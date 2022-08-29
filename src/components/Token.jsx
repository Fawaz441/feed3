import React from 'react'
import line from "../assets/line.svg"
import icon from "../assets/settings.svg"
import icon2 from "../assets/clock.svg"
import icon3 from "../assets/encrypted.svg"

function Token() {
  return (
    <div className='token'>
        <div className='container'>
            <div className='token-header'>
                <h5>Home {'>'} Tokenomics</h5>
                <h1>Tokenomics</h1>
            </div>
            <img src={line} alt="line"/>
            <div className='token-item-container'>
                <div className='token-item item-1'>
                    <h1>Feedback-to-Earn Economy Crypto</h1>
                    <p>$FD3 is the feedback-to-earn token in the Feed3 ecosystem. Built on top of Binance Smart Chain, it works as a strong catalyst in leveling up the games to the next level of engagement.</p>
                    <a href="https://feed3.gitbook.io/feed3/" target='_blank' rel="noreferrer"><button>Read Whitepaper</button></a>
                </div>
                <div className='token-item'>
                    <img src={icon} alt='icon'/>
                    <h2>Utility</h2>
                    <p>$FD3 token is a cryptocurrency reward to the gamers submitting valuable voice-note feedback to the game development teams. </p>
                </div>
                <div className='token-item'>
                    <img src={icon2} alt='icon'/>
                    <h2>Fast & Affordable</h2>
                    <p>Built on top of the BNB Smart Chain, the $FD3 token can be traded at a blazingly fast speed (300 TPS) with a gas fee as low as USD 0.00001533 only. </p>
                </div>
                <div className='token-item'>
                    <img src={icon3} alt='icon'/>
                    <h2>Anti-Scripting</h2>
                    <p>Protection of the $FD3 economy from the misuse or exploitation by the bots that are becoming common day by day.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Token