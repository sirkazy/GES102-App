import { useContext, useState } from "react"
import { AppContext } from "../../App"
import { Questions } from "../../Helpers/Questions"
import './QuizResult.css'

export const QuizResult = () => {
    const {setScreenState,score,setScore} = useContext(AppContext)
    const [exit, setExit] = useState(false)

    const triggerexit = () => {
        setExit(true)
    }

    const handleYes = () => {
        setScreenState('home')
        setExit(false)
    }
    
    const handleNo = () => {
        setExit(false)
    }

    return (
        <div className="quizResult">
            <h1>Quiz Result</h1>
            <p>Congratulations on the completion of your rapid test</p>
            <h1>{score}/50</h1>
            <button onClick={triggerexit}>Exit</button>
            {exit &&
            <div className="exit">
                <p>Do you want to exit?</p>
                <div className="yes">
                <button onClick={handleYes}>Yes</button>
                </div>
                <div className="no">
                <button onClick={handleNo}>No</button>
                </div>
            </div>
            }
        </div>
    )
}