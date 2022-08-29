import React, { useState, useEffect, useContext } from "react";
import { ProjectContext } from '../context/ProjectContext';

function Countdown() {
    const [countdownDays, setcountdownDays] = useState();
    const [countdownHours, setcountdownHours] = useState();
    const [countdownMinutes, setcountdownMinutes] = useState();
    const [countdownSeconds, setcountdownSeconds] = useState();
  
    let interval;

    const projectContext = useContext(ProjectContext);

    useEffect(() => {
      startcountdown();
    });
  
    const startcountdown = () => {
      if (!projectContext.activeStage) {
        return;
      }
      const countDownDate = new Date(projectContext.activeStage.end_date).getTime();
  
      interval = setInterval(() => {
        const now = new Date().getTime();
  
        const distance = countDownDate - now;
  
        const days = Math.floor(distance / (24 * 60 * 60 * 1000));
        const hours = Math.floor(
          (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
        const seconds = Math.floor((distance % (60 * 1000)) / 1000);
  
        if (distance < 0) {
          clearInterval(interval.current);
        } else {
          setcountdownDays(days);
          setcountdownHours(hours);
          setcountdownMinutes(minutes);
          setcountdownSeconds(seconds);
        }
      });
    };

  if (!projectContext.activeStage) {
    return <div/>;
  }

  return (
    <div className='countdown'>
          <div className="countdown-clock ">
             <section>
                <p>{countdownDays}</p>
                  <small>Days</small>
              </section>
                <span>:</span>
               <section>
                <p>{countdownHours}</p>
                <small>Hours</small>
                </section>{" "}
                <span>:</span>
                <section>
                 <p>{countdownMinutes}</p>
                 <small>Minutes</small>
                </section>{" "}
                <span>:</span>
                <section>
                <p>{countdownSeconds}</p>
               <small>Seconds</small>
             </section>
          </div>
        
    </div>
  )
}

export default  Countdown;