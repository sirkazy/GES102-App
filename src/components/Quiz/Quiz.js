import './Quiz.css'
import {Questions} from '../../Helpers/Questions'
import { useContext, useState } from 'react'
import { Timer } from '../Timer/Timer'
import { AppContext } from '../../App'

export const Quiz = () => {
    const {setScreenState,score,setScore} = useContext(AppContext)
    const [count,setCount] = useState(0);
    const [optionChosen,setOptionChosen] = useState(null);
    const [timeUp,setTimeUp] = useState(false)
    const [showAlert, setShowAlert] = useState(false)

    const handleTimeUp = () => {
        setTimeUp(true);
        alert("Time Up")
        setScreenState('quizResult')
    }
    const next = () => {
        if (optionChosen !== null){
            if (optionChosen === Questions[count].answer){
                setScore(score+1)
                setCount(count+1)
            }else{
                setScore(score)
                setCount(count+1)
            }
        }else{
            setScore(score)
            setCount(count+1)
        }
    }
    const prev = () => {
        setCount(count-1);
        setShowAlert(false)
    }
    const finish = () => {
        if (optionChosen !== ""){
            if (optionChosen === Questions[count].answer){
                setScore(score+1)
                setShowAlert(true)
            }else{
                setScore(score)
                setShowAlert(true)
        }
         }else{
            setScore(score)
            setShowAlert(true)
        }
    }

    const handleYes = () => {
        setScreenState('quizResult')
        setShowAlert(false)
    }
    const handleNo = () => {
        setShowAlert(false)
    }

    return (
        <div className="quiz">
            <div className='timer'>
            <Timer initialTime={900} onTimeUp={handleTimeUp}/>
            </div>
            <h1>GES 102 Rapid Test</h1>
            <p>{count+1} of {Questions.length}</p>
            <div className='quizhead'>
            <div className='quizQuestion'>
            <h2>{Questions[count].question}</h2>
            </div>
            </div>
            <div className='quizbuttons'>
            <button onClick={() => setOptionChosen('A')}>A. {Questions[count].optionA}</button>
            <button onClick={() => setOptionChosen('B')}>B. {Questions[count].optionB}</button>
            <button onClick={() => setOptionChosen('C')}>C. {Questions[count].optionC}</button>
            <button onClick={() => setOptionChosen('D')}>D. {Questions[count].optionD}</button>
            </div>
            {count == Questions.length -1 ?
            <div>
             <div className='prev'>
             <button onClick={prev}>Prev</button>
             </div>
            <div className='next'> 
            <button onClick={finish}>Finish</button>
            </div>
            </div>
            : count == 0 ?
            <div>
            <div className='next'>
            <button onClick={next}>Next</button>
            </div>
            </div>
            : count > 0 ?
            <div>
            <div className='prev'>
            <button onClick={prev}>Prev</button>
            </div>
            <div className='next'>
            <button onClick={next}>Next</button>
            </div>
            </div>
            :
            <div></div>
            }
            {showAlert && 
            <div className='alertbuttons'>
                <p>Do yo want to end this quiz?</p>
                <div className='yes'>
                <button onClick={handleYes}>Yes</button>
                </div>
                <div className='no'>
                <button onClick={handleNo}>No</button>
                </div>
            </div>
                }
        </div>
    )
} 