import { Questions1 } from "../../Helpers/Chap1Question"
import { useContext, useState } from 'react'
import { AppContext } from '../../App'
import './Chapters.css'

export const Chapter1 = () => {
    const [count,setCount] = useState(0);
    const [option,setOption] = useState("")
    const {setScreenState,score,setScore} = useContext(AppContext)
    const [showAlert, setShowAlert] = useState(false)

    const next = () => {
        if (option !== null){
            if (option === Questions1[count].answer){
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
        if (option !== ""){
            if (option === Questions1[count].answer){
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
        <div className="chapter1">
            <h1>Chapter1</h1>
            <h1>{count+1} of {Questions1.length}</h1>
            <div className="quizhead">
            <h2>{Questions1[count].question}</h2>
            </div>
            <button onClick={() => setOption('A')}>A. {Questions1[count].optionA}</button>
            <button onClick={() => setOption('B')}>B. {Questions1[count].optionB}</button>
            <button onClick={() => setOption('C')}>C. {Questions1[count].optionC}</button>
            <button onClick={() => setOption('D')}>D. {Questions1[count].optionD}</button>
            {count == Questions1.length -1 ?
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
    <button onClick={() => setScreenState('chapquiz')} className='backhome'>Back to Chapters Menu</button>
    </div>
    )
}