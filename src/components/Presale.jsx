import React, { useContext } from 'react'
import { ProjectContext } from '../context/ProjectContext';
function Presale() {
    const projectContext = useContext(ProjectContext);

    if (!projectContext.stages) {
        return <div/>;
    }

  return (
    <div className="presale">
        <div className='container'>
            <div className="title-container">
                <h2 className="title">PRESALE STAGES</h2>
            </div>
            <div className='table-container'>
                <table className='web-table'>
                    <tr className='table-header'>
                        <th>Stage</th>
                        <th>Date</th>
                        <th>Number of Tokens</th>
                        <th>Start price</th>

                    </tr>
                    <tr>
                        <td>Stage 1 </td>
                        <td>{(new Date(projectContext.stages[0].start_date)).toDateString()} to {(new Date(projectContext.stages[0].end_date)).toDateString()}</td>
                        <td>1.059 billion tokens</td>
                        <td>0.005</td>

                    </tr>
                    <tr>
                        <td>Stage 2 </td>
                        <td>{(new Date(projectContext.stages[1].start_date)).toDateString()} to {(new Date(projectContext.stages[1].end_date)).toDateString()}</td>
                        <td>1 billion tokens</td>
                        <td>0.008</td>

                    </tr>
                    <tr>
                        <td>Stage 3 </td>
                        <td>{(new Date(projectContext.stages[2].start_date)).toDateString()} to {(new Date(projectContext.stages[2].end_date)).toDateString()}</td>
                        <td>1 billion tokens</td>
                        <td>0.01</td>

                    </tr>
                </table>
                <div className='mobile-table-container'>
                    <div className='table'>
                        <h4>stage 1</h4>
                        <div className='mobile-table'>
                            <div className='table-pink'>
                                <p>Date</p>
                                <p>Number of Tokens</p>
                                <p>Start price</p>
                            </div>
                            < div className='table-white'>
                                <p>{(new Date(projectContext.stages[0].start_date)).toDateString()} to {(new Date(projectContext.stages[0].end_date)).toDateString()}</p>
                                <p>1.059 billion tokens</p>
                                <p className='last'>0.005</p>
                            </div>
                        </div>

                    </div>

                    <div className='table'>
                      <h4>stage 2</h4>
                      <div className='mobile-table'>
                        <div className='table-pink'>
                            <p >Date</p>
                            <p>Number of Tokens</p>
                            <p>Start price</p>
                        </div>
                        < div className='table-white'>
                            <p >{(new Date(projectContext.stages[1].start_date)).toDateString()} to {(new Date(projectContext.stages[1].end_date)).toDateString()}</p>
                            <p>1 billion tokens</p>
                            <p className='last'>0.008</p>
                         </div>
                        </div>
                    </div>

                    <div className='table'>
                        <h4>stage 3</h4>
                       <div className='mobile-table'>
                        <div className='table-pink'>
                            <p>Date</p>
                            <p>Number of Tokens</p>
                            <p>Start price</p>
                        </div>
                         < div className='table-white'>
                            <p>{(new Date(projectContext.stages[2].start_date)).toDateString()} to {(new Date(projectContext.stages[2].end_date)).toDateString()}</p>
                            <p>1 billion tokens</p>
                            <p className='last'>0.01</p>
                         </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='description'>
                <p>Join the Feedback-to-earn revolution connecting gamers to developers</p>
            </div>
            <a href="http://presale.feed3.io/" target='_blank' rel="noreferrer"><button>Join Presale</button></a>
      </div>
    </div>

  )
}

export default Presale