import './Rapid_Test.css'
import { Questions } from '../../Helpers/Questions.ts'
import React, { useContext, useState } from 'react'
import { Timer } from '../Timer/Timer.tsx'
import { AppContext } from '../../App.tsx'
import { useNavigate } from 'react-router-dom'

export const Quiz : React.FC = () => {
    const { score, setScore } = useContext(AppContext) ?? { score: 0, setScore: () => {} };
    const [count, setCount] = useState<number>(0);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [timeUp, setTimeUp] = useState<boolean>(false);
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const navigate = useNavigate()

    const handleTimeUp = () => {
        setTimeUp(true);
        alert("Time Up");
        navigate('/RapidTestResult');
    }

    const next = () => {
        if (selectedOptions[count] && selectedOptions[count] === Questions[count].answer) {
            setScore(score + 1);
        }
        setCount(count + 1);
    };
    

    const prev = () => {
        setCount(count - 1);
        setShowAlert(false);
    };    

    const finish = () => {
        if (selectedOptions[count] && selectedOptions[count] === Questions[count].answer) {
            setScore(score + 1);
        }
        setShowAlert(true);
    }

    const handleYes = () => {
        navigate('/RapidTestResult');
        setShowAlert(false);
    }
    const handleNo = () => {
        setShowAlert(false);
    }

    return (
        <div className="quiz">
            <div className='timer'>
                <Timer initialTime={3600} onTimeUp={handleTimeUp} />
            </div>
            <h1>GES 102 Rapid Test</h1>
            <p>{count + 1} of {Questions.length}</p>
            <div className='quizhead'>
                <div className='quizQuestion'>
                    <h2>{Questions[count].question}</h2>
                </div>
            </div>
            <div className='quizoptions'>
    {['A', 'B', 'C', 'D'].map((option, index) => (
        <label className="label" key={option}>
                <input
                    type="radio"
                    name="option"
                    value={option}
                    checked={selectedOptions[count] === option}
                    onChange={() => setSelectedOptions({ ...selectedOptions, [count]: option })}
                />
                <div className="option-value">
                <p>{option}.</p> <span>{Questions[count][`option${option}`]}</span>
                </div>
        </label>
    ))}
</div>

            {count === Questions.length - 1 ? (
                <div className='prev-next'>
                    <div className='prev'>
                        <button onClick={prev}>Prev</button>
                    </div>
                    <div className='next'>
                        <button onClick={finish}>Finish</button>
                    </div>
                </div>
            ) : count === 0 ? (
                <div className='next'>
                    <button onClick={next}>Next</button>
                </div>
            ) : (
                <div className='prev-next'>
                    <div className='prev'>
                        <button onClick={prev}>Prev</button>
                    </div>
                    <div className='next'>
                        <button onClick={next}>Next</button>
                    </div>
                </div>
            )}
            <div className="question-navigator">
            {Questions.map((_, index) => (
                <button
                    key={index}
                    className={`question-number ${selectedOptions[index] ? 'answered' : 'unanswered'} ${count === index ? 'active' : ''}`}
                    onClick={() => {setCount(index);
                        window.scrollTo({top : 0, behavior : 'smooth'})
                    }}
                >
                    {index + 1}
                </button>
                ))}
            </div>

            {showAlert && (
                <div className='alertbuttons-overlay'>
                    <div className="alertbuttons-content">
                        <p>Are you sure you want to end this quiz?</p>
                        <div className="yesno">
                            <div className='yes'>
                                <button onClick={handleNo}>Cancel</button>
                            </div>
                            <div className='no'>
                                <button onClick={handleYes}>End</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
