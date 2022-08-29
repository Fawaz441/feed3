import React, { useContext } from 'react'
import Countdown from './Countdown'
import { ProjectContext } from '../context/ProjectContext';

function Timer() {
  const projectContext = useContext(ProjectContext);

  if (!projectContext.activeStage) {
    return <div/>;
  }

  return (
    <div className='timer'>
        <div className='container'>
            <p className='title'><span className=''></span>Presale {projectContext.activeStage.name} Ends In</p>
            <Countdown/>
            <a href="http://presale.feed3.io/register" target='_blank' rel="noreferrer"> <button>Join Presale</button></a>
            {/* <a href="http://presale.feed3.io/" target='_blank' rel="noreferrer"> <button>Login  </button></a> */}

        </div>
       
    </div>
  )
}

export default Timer