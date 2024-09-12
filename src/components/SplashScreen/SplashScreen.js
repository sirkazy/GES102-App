import { useEffect } from "react"
import Splash from '../../assets/Splash_Screen.jpg'
import './SplashScreen.css'
import { motion } from "framer-motion"

export const SplashScreen = ({onFinish}) => {
    useEffect(() => {
        const timer = setTimeout(onFinish, 3000);
        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className="splashscreen">
            <h1>GES 102 QUIZ APP</h1>
            <img src={Splash}/>
            <h3>App built by Sir Kazy</h3>
            <motion.div className='loading' initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}} exit={{opacity: 1, x: -100}}><p>Loading...</p></motion.div>
        </div>
    )
}