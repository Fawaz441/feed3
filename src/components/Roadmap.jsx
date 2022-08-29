import React from 'react'
import roadmapImg from '../assets/roadmap.svg'
import arrow from '../assets/arrow.svg'

function Roadmap() {

  const Roadmapdata = [
    {
      text:" Building infrastructure for gamers and brands to engage and transact with $FD3",
     
    },
    {
      text: "Launching partnerships so gamers can give AI powered voice feedback",
     
    },
    {
      text: "Developing the proprietary FD3 feedback economy protocol " ,
     
    },
    {
      text: "Sharing the FD3 ecosystem with brands all over the world " ,
     
    },
   
  ];

  return (
    <div className="roadmap" >
      <div className="container"  id="roadmap">
        <h2 className="title">Roadmap</h2>
        <p className="description">
        Building the first and best horizontal feedback stack for web3
        </p>
        <a href='https://feed3.gitbook.io/feed3/roadmap'><button>See full roadmap</button></a>
        <div className='roadmap-img'>
           <img src={roadmapImg} alt=''/>
       </div>
        <div className='roadmap-mobile'>
          {Roadmapdata.map((item, index) => (
            <div className='roadmap-item'>
              <img src={arrow} alt='arrow'/> 
              <p key={index}>{item.text}</p>
            </div>
            ))}
         

        </div>
      </div>
      
      

       
    </div>
  )
}

export default Roadmap