import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from './../assets/assets';
import './Navbar/Navbar.css';



const Navbar = ({setShowLogin}) => {
    const [menu,setMenu]=useState("home");
  return (
    <div className='navbar'>
       <Link to='/' ><img src={assets.logo} alt="" className="log" /></Link>
       <ul className="navbar-menu">
        <Link to="/" onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
        <a href= "#clues" onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Clues</a>
        <a href="#socials" onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Socials</a>
        <a href="#footer" onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</a>
       </ul>
       <div className="navbar-right">
<button onClick={()=>setShowLogin(true)}>Submit</button>
       </div>
    </div>
  )
}

export default Navbar