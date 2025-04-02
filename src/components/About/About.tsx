import './About.css'
import React from 'react'
import Kazy from '../../assets/KazyImg2.jpg'
import { motion } from 'framer-motion'

export const About : React.FC = () => {
    return (
        <motion.div className="about" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 2}}>
        <div className='aboutapp'>
        <h1>ABOUT THE APP</h1>
        <div className='aboutapp-body'>
        <p>This app was specifically created with the aim of preparing students for GES102 tests and exam.
            It contains likely questions (past questions included) that students can come across in their tests and exam. By answering
            most of the questions,students get a 90% chance of scoring high in the tests and exam.
        </p>
        </div>
        </div>
        <h1>ABOUT THE DEVELOPER</h1>
        <div className='aboutdev'>
           <div className='about-left'>
           <motion.div initial={{opacity: 0, x: -200}} animate={{opacity: 1, x:  0}} exit={{opacity: 0, x: 200}} transition={{duration: 3}}><img src={Kazy}/></motion.div>
           </div>
           <div className='about-right'>
            <p>Sir Kazy is a passionate computer science student at the university of Ibadan,specializing in
                front-end development with React.js.
            </p>
            <p>With a strong foundation in creating dynamic and responsive web applications,He is constantly
                expanding his skills and knowledge. 
            </p>
            <p>Sir Kazy's current goal is to evolve into a full-stack developer,enabling him to build comprehensive and innovative 
                solutions from the ground up.
            </p>
            <p>Join him on his journey as he navigates the exciting world of technology and development
            </p>
            <p>Remember the name - SIR KAZY!!!</p>
            </div>
            </div>
        </motion.div>
    )
}