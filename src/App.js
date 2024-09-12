import { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter, Router, Routes, Route,Link } from 'react-router-dom';
import { Menu } from './components/Menu/Menu';
import { Login } from './components/Login/Login';
import { SignUp } from './components/SignUp/SignUp';
import { Home } from './components/Home/Home';
import { ForgotPassword } from './components/forgotPassword/ForgotPassword'
import { Quiz } from './components/Quiz/Quiz';
import { Lead } from './components/LeadersBoard/Lead';
import { Profile } from './components/Profile/Profile';
import { QuizResult } from './components/QuizResult/QuizResult';
import { Slides } from './components/Slides/Slides';
import { ChapQuiz } from './components/ChaptersQuiz/ChapQuiz';
import { GenKnow } from './components/GeneralKnowledge/GenKnow';
import { Chapter1 } from './components/ChaptersQuiz/Chapter1';
import { Chapter2 } from './components/ChaptersQuiz/Chapter2';
import { Chapter3 } from './components/ChaptersQuiz/Chapter3';
import { Chapter4 } from './components/ChaptersQuiz/Chapter4';
import { Chapter5 } from './components/ChaptersQuiz/Chapter5';
import { Chapter6 } from './components/ChaptersQuiz/Chapter6';
import { Chapter7 } from './components/ChaptersQuiz/Chapter7';
import { Chapter8 } from './components/ChaptersQuiz/Chapter8';
import { Chapter9 } from './components/ChaptersQuiz/Chapter9';
import { Chapter10 } from './components/ChaptersQuiz/Chapter10';
import { Chapter11 } from './components/ChaptersQuiz/Chapter11';
import { Chapter12 } from './components/ChaptersQuiz/Chapter12';
import { Settings } from './components/Settings/Settings';
import { Navbar } from './components/bottom/Navbar';
import { Quiz_name } from './components/Home/Quiz_name';
import { SplashScreen } from './components/SplashScreen/SplashScreen';
import { About } from './components/About/About';

export const AppContext = createContext()
function App() {
  const [screenState,setScreenState] = useState('menu')
  const [score,setScore] = useState(0);
  const [showSplash,setShowSplash] = useState(true)
  const pagesWithoutNavbar = ['menu', 'signup', 'login'] 

  const handleSplashFinish = () =>{
    setShowSplash(false)
  }
  return (
    <div className="App">
      <AppContext.Provider value={{setScreenState,setScore,score}}> 
      {showSplash ? (
        <SplashScreen onFinish={handleSplashFinish}/>
      ) : (
        screenState === 'menu' && <Menu/>
      )}
      {screenState === 'login' && <Login/>}
      {screenState === 'signup' && <SignUp/>}
      {screenState === 'forgotpassword' && <ForgotPassword/>}
      {screenState === 'home' && <div className='heyhome'><Home/></div>}
      {screenState === 'quiz' && <Quiz/>}
      {screenState === 'lead' && <Lead/>}
      {screenState === 'profile' && <Profile/>}
      {screenState === 'quizResult' && <QuizResult/>}
      {screenState === 'slides' && <Slides/>}
      {screenState === 'chapquiz' && <ChapQuiz/>}
      {screenState === 'genknow' && <GenKnow/>}
      {screenState === 'chap1' && <Chapter1/>}
      {screenState === 'chap2' && <Chapter2/>}
      {screenState === 'chap3' && <Chapter3/>}
      {screenState === 'chap4' && <Chapter4/>}
      {screenState === 'chap5' && <Chapter5/>}
      {screenState === 'chap6' && <Chapter6/>}
      {screenState === 'chap7' && <Chapter7/>}
      {screenState === 'chap8' && <Chapter8/>}
      {screenState === 'chap9' && <Chapter9/>}
      {screenState === 'chap10' && <Chapter10/>}
      {screenState === 'chap11' && <Chapter11/>}
      {screenState === 'chap12' && <Chapter12/>}
      {screenState === 'settings' && <Settings/>}
      {screenState === 'quiz_name' && <Quiz_name/>}
      {screenState === 'about' && <About/>}
      <div>
      {!pagesWithoutNavbar.includes(screenState) && <Navbar/>}
      </div>
      </AppContext.Provider>
    </div>
  );
}
export default App;

