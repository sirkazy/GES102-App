import './Menu.css'
// import menu from '../../assets/Quizmenu.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import React from 'react'

export const Menu : React.FC = () => {

    return (
        <div className='menu'> <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}>
            <div className='trivia'>
            <h2>GES 102 QUIZ</h2>
            </div>
            <div  className='para'>
            <p>Challenge your knowledge and take a quiz of your interest</p>
            </div>
            <div className='menuimage'>
            <img src={require('../../assets/Quizmenu.png')}/>
            </div>
            <div className='menubutton'>
            <motion.div whileTap={{scale: 0.9}}><Link to="/home"><button>Continue<FaArrowRight className='arrow-icon'/></button></Link></motion.div>
            </div>
        </motion.div>
        </div>
    )
}