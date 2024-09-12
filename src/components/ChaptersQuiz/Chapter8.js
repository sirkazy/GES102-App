import { Questions8 } from "../../Helpers/Chap8Question"
import { useContext, useState } from 'react'
import { AppContext } from '../../App'
import './Chapters.css'

export const Chapter8 = () => {
    const [count,setCount] = useState(0);
    const [option,setOption] = useState("")
    const [showAlert, setShowAlert] = useState(false)
    const {setScreenState,score,setScore} = useContext(AppContext)

    const next = () => {
        if (option !== null){
            if (option === Questions8[count].answer){
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
            if (option === Questions8[count].answer){
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
        <div className="chapter8">
            <h1>Chapter 8</h1>
            <h1>{count+1} Of {Questions8.length}</h1>
            <div className="quizhead">
            <h2>{Questions8[count].question}</h2>
            </div>
            <button onClick={() => setOption('A')}>A. {Questions8[count].optionA}</button>
            <button onClick={() => setOption('B')}>B. {Questions8[count].optionB}</button>
            <button onClick={() => setOption('C')}>C. {Questions8[count].optionC}</button>
            <button onClick={() => setOption('D')}>D. {Questions8[count].optionD}</button>
            {count == Questions8.length -1 ?
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