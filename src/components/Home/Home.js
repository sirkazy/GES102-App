import './Home.css'
import { useContext } from 'react'
import { AppContext } from '../../App'
import TakeQuiz from '../../assets/TakeQuiz.webp'
import Rapid_Test from '../../assets/Rapid_Test.jpeg'
import ReadSlides from '../../assets/ReadSlides.jpeg'
import DidYouKnow from '../../assets/DidYouKnow.webp'
import Topboxright from '../../assets/quizresult.jpeg'
import MyImage from '../../assets/images.png'
import { motion } from 'framer-motion'

export const Home = () => {
    const {score,setScore,setScreenState} = useContext(AppContext)
    
    const Click_Rapid_Test = () => {
        setScore(0)
        setScreenState('quiz_name')
    }
    const Take_Quiz = () => {
        setScore(0)
        setScreenState('chapquiz')
    }
      
    return (
        <motion.div className='home' initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 4}}>
            <div className='tophead'>
                <div className='hello'>
             <div className='hello-left'>     
            <img src={MyImage}/>
            </div>  
            <div className='hello-right'>
            <p><strong>Hi User</strong></p>
            <p>@User</p>
            </div>
            </div>
            <div className='head'>
            <div className='topbox'>            
                <div className='topbox-left'>
                <p><strong>Good Day</strong></p>
                <p>Welcome to GES 102 quiz test platform</p>
                <motion.div whileTap={{scale: 0.9}}><button onClick={() => setScreenState('about')}>Learn More</button></motion.div>
                </div>
                <div className='topbox-right'>
                    <img src={Topboxright}/>
                </div>
            </div>
            </div>
            </div>
             <div className='imgslinks'>
                <div className='play'>
                <p><strong>Let's Play!</strong></p>
                <p>Select an option of your choice</p>
                </div>
                <div className='first'>
                <div className='box'>
                <img src={Rapid_Test} onClick={Click_Rapid_Test}/>
                <motion.div whileHover={{scale: 1.1}}><li onClick={Click_Rapid_Test}>Rapid Test</li></motion.div>
                </div>
                <div className='box'>
                <img src={ReadSlides} onClick={() => {setScreenState('slides')}}/>
                <motion.div whileHover={{scale: 1.1}}><li onClick={() => {setScreenState('slides')}}>Read Slides</li></motion.div>
                </div>
                </div>
                <div className='second'>
                <div className='box'>
                <img src={TakeQuiz} onClick={Take_Quiz}/>
                <motion.div whileHover={{scale: 1.1}}><li onClick={Take_Quiz}>Take Quiz</li></motion.div>
                </div>
                <div className='box'>
                <img src={DidYouKnow} onClick={() => {setScreenState('genknow')}}/>
                <motion.div whileHover={{scale: 1.1}}><li onClick={() => {setScreenState('genknow')}}>General Knowledge</li></motion.div>
                </div>
                </div>
            <div>
            </div>
            </div>
        </motion.div>
    )
}