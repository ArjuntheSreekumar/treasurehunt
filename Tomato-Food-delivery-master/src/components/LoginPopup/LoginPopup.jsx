import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import './LoginPopup.css';

export const LoginPopup = ({setShowLogin}) => {
    const [currState,setCurrState]=useState("Add Details");
  return (
   <div className="login-popup">
    <form action="" className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img  onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
           {currState==="Login" ?<></>: <input type="text" placeholder='Your name' required/>}
        
        <input type="email" placeholder='Your email' required/>
        </div>
        <button>{currState==="Sign Up"?"Create account":"Submit"}</button>
    </form>
   </div>
  )
}
