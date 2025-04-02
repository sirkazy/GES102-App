import './ChapQuiz.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { AppContext } from '../../App.tsx'
import React from 'react';

export const ChapQuiz : React.FC = () => {
    const appContext = useContext(AppContext);
        if (!appContext) {
          throw new Error("Home component must be wrapped with AppContextProvider");
        }  
    const {setScore } = appContext

    const default_score = () => {
        setScore(0)
    }
    return (
        <div className="chapquiz">
            <h1>Take Quiz</h1>
            <div className='chaptersofquiz'>
            <Link to="/chap1"><button onClick={default_score}>Chapter 1</button></Link>
            <Link to="/chap2"><button onClick={default_score}>Chapter 2</button></Link>
            <Link to="/chap3"><button onClick={default_score}>Chapter 3</button></Link>
            <Link to="/chap4"><button onClick={default_score}>Chapter 4</button></Link>
            <Link to="/chap5"><button onClick={default_score}>Chapter 5</button></Link>
            <Link to="/chap6"><button onClick={default_score}>Chapter 6</button></Link>
            <Link to="/chap7"><button onClick={default_score}>Chapter 7</button></Link>
            <Link to="/chap8"><button onClick={default_score}>Chapter 8</button></Link>
            <Link to="/chap9"><button onClick={default_score}>Chapter 9</button></Link>
            <Link to="/chap10"><button onClick={default_score}>Chapter 10</button></Link>
            <Link to="/chap11"><button onClick={default_score}>Chapter 11</button></Link>
            <Link to="/chap12"><button onClick={default_score}>Chapter 12</button></Link>
            </div>
        </div>
    )
}