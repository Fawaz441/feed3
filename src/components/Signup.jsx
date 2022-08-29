import React from 'react'
import submit from '../assets/submit.svg'
import mailLeft from '../assets/mail-left.svg'
import mailRight from '../assets/mail-right.svg'


function Signup() {
  return (
    <div className='signup'>
        <div className='container'> 
            <h2 className='title'>sign up for the <br/>latest news</h2>
            <form>
                <input type='email' placeholder='E-mail address' className='email'/>
                <input type="image" src={submit} alt="Submit"   className='submit'/>
            </form>
            <div className='form-img'>
                <img src={ mailRight} className='mail-left' alt="mail left"/>
                <img src={mailLeft} className='mail-right' alt="mail right"/>

            </div>
        </div>
    </div>
  )
}

export default Signup