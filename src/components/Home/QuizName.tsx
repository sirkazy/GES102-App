import React, { useContext } from 'react'
import { AppContext } from '../../App.tsx'
import './QuizName.css'
import { Link } from 'react-router-dom'

interface Quiz_nameProps {
    isOpen? : boolean
    isClose? : () => void
}
export const Quiz_name : React.FC<Quiz_nameProps> = ({isOpen, isClose}) => {


    if (!isOpen) return null;
    return (
        <div className='modal-overlay'>
            <div className="modal-content">
            <h2>Ready to go on a voyage of Practice?</h2>
                <input placeholder="Enter your name..." type="text" required/>
                <div className="modal-buttons">
                <button onClick={isClose} className='cancel'>Cancel</button>
                <Link to="/quiz"><button className='start'>Start</button></Link>
                </div>
        </div>
        </div>
    )
}