import { useState } from 'react'
import './Navbar.css'
import React from 'react'
import {FaHome,FaTrophy,FaUser} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Navbar : React.FC = () => {
    const [active,setActive] = useState<string>("")
    return(
        <div className="navbar">
            <div className="nav-item">
                <Link to="/home"><FaHome/></Link>
                <Link to="/home"><span>Home</span></Link>
            </div>
            <div className="nav-item">
            <Link to="/lead"><FaTrophy/></Link>
            <Link to="/lead"><span>Leadersboard</span></Link>
            </div>
            <div className="nav-item">
            <Link to="/profile"><FaUser/></Link>
            <Link to="/profile"><span>Profile</span></Link>
            </div>
            </div>
    )
}
// {`nav-item ${active === "home" ? 'home' : ''}`} onClick={() => setActive("home")}