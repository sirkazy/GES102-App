import React, { useContext, useState, useEffect } from "react"
import { AppContext } from "../../App.tsx"
import { chapters } from '../ChaptersQuiz/chapters.tsx';
import './QuizResult.css'
import { useNavigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom";
// import Goldtrophy from "../../assets/trophy.png"
// import BronzeTrophy from "../../assets/bronze_trophy.png";
// import SilverTrophy from "../../assets/silver_trophy.png";
// import failureImage from "../../assets/failure_image.png";

type ChapterKeys = keyof typeof chapters;

export const QuizResult: React.FC = () => {
  const { score, setScore } = useContext(AppContext) ?? { score: 0, setScore: () => {} };
  const [exit, setExit] = useState<boolean>(false);
  const navigate = useNavigate();
  const { chapterId } = useParams<{ chapterId: string }>();

  const questions = chapterId && chapterId in chapters ? chapters[chapterId as ChapterKeys]?.questions || [] : [];

  const [finalScore, setFinalScore] = useState<number>(0);

  useEffect(() => {
    const percentage = Math.round((score / questions.length) * 100);
    setFinalScore(percentage);
  }, [score, questions.length]);

  const triggerexit = () => {
    setExit(true);
  };

  const handleYes = () => {
    navigate('/home');
    setExit(false);
  };

  const handleNo = () => {
    setExit(false);
  };

  return (
    <div className="quizResult">
      <h1>Quiz Result</h1>
      {
        finalScore >= 80 ? (
          <div className="trophies">
            <img src={require("../../assets/trophy.png")} alt="trophy" />
            <p>You passed the test excellently.</p>
          </div>
        ) : finalScore >= 60 ? (
          <div className="trophies">
            <img src={require("../../assets/bronze_trophy.png")} alt="good" />
            <p>You did well, but you can do better.</p>
          </div>
        ) : finalScore >= 50 ? (
          <div className="trophies">
            <img src={require("../../assets/silver_trophy.png")} alt="average" />
            <p>You scored average. You need to step up!</p>
          </div>
        ) : (
          <div className="trophies">
            <img src={require("../../assets/failure_image.png")} alt="failed" />
            <p>You scored below average. Don't give up! Stand up and try again!.</p>
          </div>
        )
      }
      <h1>Your Result : {score}/{questions.length}</h1>
      <div className="triggerexit">
        <button onClick={triggerexit}>Finish Quiz</button>
        <Link to="/chapquiz"><button>Retry</button></Link>
      </div>
      {exit &&
        <div className='exit-overlay'>
          <div className='exit-content'>
            <p>Are you sure you want to exit?</p>
            <div className="yesno">
              <div className='yes'>
                <button onClick={handleNo}>Cancel</button>
              </div>
              <div className='no'>
                <button onClick={handleYes}>Yes</button>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};
