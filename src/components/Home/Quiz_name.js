import { useContext } from 'react'
import { AppContext } from '../../App'
import './Quiz_name.css'

export const Quiz_name= () => {
    const {setScore,setScreenState} = useContext(AppContext)

    const start = () => {
        setScreenState('quiz')
        setScore(0)
    }
    return (
        <div className='quiz_name'>
            <h2>Ready to go on a voyage of Practice?</h2>
            <div className='form'>
            <form>
                <div className='input'>
                <input placeholder="Enter your name..." type="text" required/>
                </div>
                <button onClick={start}>Start Quiz</button>
            </form>
            </div>
        </div>
    )
}