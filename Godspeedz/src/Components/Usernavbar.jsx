import React from 'react'
import '../CSS/Usernavbar.css';
import { Link } from "react-router-dom";

import logo from '../assets/logo.png';


const Usernavbar = () => {
  return (
    <div className = "navbar">
        <ul className  = "menu left">
            <li className = "button"><Link to = "/">Home</Link></li>
            <li className = "button"><Link to = "/Members">Members</Link></li>
            <li className = "button"><Link to = "/Calender">Calender</Link></li>
            <li className = "button"><Link to = "/Statistics">Statistics</Link></li>
        </ul>

        <img className = "logo" src={logo} alt="Logo" />

        <ul className  = "menu right">
            <li className = "button"><Link to = "/Statistics">Statistics</Link></li>
            <li className = "button"><Link to = "/Map">Map</Link></li>
            <li className = "button"><Link to = "/About">About</Link></li>
            <li className = "donate"><Link to = "/Donate">Donate</Link></li>
        </ul>
    </div>
  )
}

export default Usernavbar
