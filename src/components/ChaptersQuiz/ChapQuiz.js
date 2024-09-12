import { useContext } from 'react'
import './ChapQuiz.css'
import { AppContext } from '../../App'

export const ChapQuiz = () => {
    const {setScreenState} = useContext(AppContext);
    return (
        <div className="chapquiz">
            <h1>Take Quiz</h1>
            <div className='chaptersofquiz'>
            <button onClick={() => setScreenState('chap1')}>Chapter 1</button>
            <button onClick={() => setScreenState('chap2')}>Chapter 2</button>
            <button onClick={() => setScreenState('chap3')}>Chapter 3</button>
            <button onClick={() => setScreenState('chap4')}>Chapter 4</button>
            <button onClick={() => setScreenState('chap5')}>Chapter 5</button>
            <button onClick={() => setScreenState('chap6')}>Chapter 6</button>
            <button onClick={() => setScreenState('chap7')}>Chapter 7</button>
            <button onClick={() => setScreenState('chap8')}>Chapter 8</button>
            <button onClick={() => setScreenState('chap9')}>Chapter 9</button>
            <button onClick={() => setScreenState('chap10')}>Chapter 10</button>
            <button onClick={() => setScreenState('chap11')}>Chapter 11</button>
            <button onClick={() => setScreenState('chap12')}>Chapter 12</button>
            </div>
        </div>
    )
}