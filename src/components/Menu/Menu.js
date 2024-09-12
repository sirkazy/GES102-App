import './Menu.css'
import menu from '../../assets/Quizmenu.png'
import menuarrow from '../../assets/menuarrow.png'
import { useContext } from 'react'
import { AppContext } from '../../App'
import Quizmenu from '../../assets/QuizImg.jpeg'
import { motion } from 'framer-motion'

export const Menu = () => {
    const {setScreenState} = useContext(AppContext)

    return (
        <motion.div className='menu' initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 1}}>
            <div className='trivia'>
            <h2>GES 102 QUIZ</h2>
            </div>
            <div  className='para'>
            <p>Challenge your knowledge and take a quiz of your interest</p>
            </div>
            <div className='menuimage'>
            <img src={menu}/>
            </div>
            <div className='menubutton'>
            <motion.div whileTap={{scale: 0.9}}><button onClick={() => setScreenState('signup')}>Get Started<img src={menuarrow}/></button></motion.div>
            </div>
        </motion.div>
    )
}