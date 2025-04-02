import React, { useContext, useState } from 'react';
import { AppContext } from '../../App.tsx';
import './Chapters.css';
import { chapters } from './chapters.tsx';
import { Link, useNavigate } from 'react-router-dom';

interface GenericQuizProps{
  chapterId : string
}
export const GenericQuiz : React.FC<GenericQuizProps> = ({ chapterId }) => {
  const chapterData = chapters[chapterId];
  const {score, setScore } = useContext(AppContext) ?? {score : 0, setScore :() => {}};
  const [count, setCount] = useState<number>(0);
  const [selectedOptions, setSelectedOptions] = useState({})
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const navigate = useNavigate()

  if (!chapterData) {
    return <div>Invalid Chapter Selected</div>;
  }
  
  const questions = chapterData.questions;

  const next = () => {
         if (selectedOptions[count] && selectedOptions[count] === questions[count].answer) {
             setScore(score + 1);
         }
         setCount(count + 1);
     }
 
     const prev = () => {
         setCount(count - 1);
         setShowAlert(false);
     }
 
     const finish = () => {
      if (selectedOptions[count] && selectedOptions[count] === questions[count].answer) {
        setScore(score + 1);
    }
         setShowAlert(true);
     }
 
     const handleYes = () => {
      navigate(`/quizResult/${chapterId}`);
         setShowAlert(false);
     }
     const handleNo = () => {
         setShowAlert(false);
     }

  return (
    <div className="chapter">
      <h1>{chapterData.name}</h1>
      <h2>{chapterData.title}</h2>
      <h1>{count + 1} of {questions.length}</h1>
      <div className="quizhead">
        <div className='quizQuestion'>
              <h2>{questions[count].question}</h2>
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
                      <p>{option}.</p> 
                      <span>{questions[count][`option${option}`]}</span>
                      </div>
              </label>
          ))}
      </div>
      {count === questions.length - 1 ? (
        <div>
          <div className="prev">
            {count > 0 && <button onClick={prev}>Prev</button>}
          </div>
          <div className="next">
            <button onClick={finish}>Finish</button>
          </div>
        </div>
      ) : count === 0 ? (
        <div className="next">
          <button onClick={next}>Next</button>
        </div>
      ) : (
        <div>
          <div className="prev">
            <button onClick={prev}>Prev</button>
          </div>
          <div className="next">
            <button onClick={next}>Next</button>
          </div>
        </div>
      )}
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
            <div className="question-navigator">
        {questions.map((_,index) => {
          return (
            <button 
            key={index} 
            onClick={() => {
              setCount(index);
              window.scrollTo({top: 0, behavior: 'smooth'})
            }}
            className={`question-number ${selectedOptions[index] ? 'answered' : 'unanswered'} ${count === index && 'active'}`}
            >
              {index+1}
            </button>
          )
        })}
      </div>
      <div className="chaptermenu">
        <Link to="/chapquiz"><button>Back to Chapters Menu</button></Link>
      </div>
    </div>
  );
};
