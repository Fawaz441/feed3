import React, { useContext } from 'react';
import token from '../assets/token.svg';
import tokenMobile from '../assets/tokenomics-mobile.svg';
import tokenMobileList from '../assets/tokenomics-list.svg';
import { ProjectContext } from '../context/ProjectContext';


function Tokenomics() {
    const projectContext = useContext(ProjectContext);

    if (!projectContext.stages) {
        return <div/>;
    }

    return (
        <div className="tokenomics"  id="tokenomics">
            <div className='container'>
                <div className="title-container">
                    <h2 className="title">Tokenomics</h2>
                </div>
                <div className='tokenomics-table-container'>
                    <div className='tokenomics-web'>
                        <img src={token} alt=''/>
                    </div>
                    <div className='tokenomics-mobile'>
                        <img src={tokenMobile} alt=''/>
                        <img src={tokenMobileList} alt='' style={{marginTop:'3rem'}}/>
                    </div>
                    <div className='tokenomics-table'>
                        <div className='table-pink'>
                            <p>Total Supply</p>
                            <p>Presale</p>
                            <p>Start Price</p>
                            <p>Ticker</p>
                            <p>Blockchain</p>
                            <p>Launch Date</p>
                        </div>
                        < div className='table-white'>
                            <p>8.74 Billion Tokens</p>
                            <p>{(new Date(projectContext.stages[0].start_date)).toDateString()}</p>
                            <p>$ 0.005</p>
                            <p>$FD3</p>
                            <p>Binance Smart Chain</p>
                            <p className='last'>{(new Date(projectContext.stages[projectContext.stages.length-1].end_date)).toDateString()}</p>
                          </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tokenomics