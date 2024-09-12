import './Navbar.css'
import { useContext } from 'react'
import { AppContext } from '../../App'
import {FaHome, FaTRO, FaUser} from 'react-icons/fa'

export const Navbar = () => {
    const {setScreenState} = useContext(AppContext)
    return(
        <div className="navbar">
            <div className='nav-item'>
                <FaHome onClick={() => setScreenState('home')}/>
                <span onClick={() => setScreenState('home')}>Home</span>
            </div>
            <div className='nav-item'>
                <FaHome onClick={() => setScreenState('lead')}/>
                <span onClick={() => setScreenState('lead')}>Leadersboard</span>
            </div>
            <div className='nav-item'>
                <FaUser onClick={() => setScreenState('profile')}/>
                <span onClick={() => setScreenState('profile')}>Profile</span>
            </div>
            </div>
    )
}