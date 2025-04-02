import React, { createContext, useState, ReactNode } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { Menu } from "./components/Menu/Menu.tsx";
import { Login } from "./components/Login/Login.tsx";
import { SignUp } from "./components/SignUp/SignUp.tsx";
import { Home } from "./components/Home/Home.tsx";
import { Quiz } from "./components/RapidTest/Rapid_Test.tsx";
import { Lead } from "./components/LeadersBoard/Lead.tsx";
import { Profile } from "./components/Profile/Profile.tsx";
import { RapidTestResult } from "./components/RapidTestResult/RapidTestResult.tsx";
import { Slides } from "./components/Slides/Slides.tsx";
import { ChapQuiz } from "./components/ChaptersQuiz/ChapQuiz.tsx";
import { GenKnow } from "./components/GeneralKnowledge/GenKnow.tsx";
import { Settings } from "./components/Settings/Settings.tsx";
import { Navbar } from "./components/bottom/Navbar.tsx";
import { Quiz_name } from "./components/Home/QuizName.tsx";
import { SplashScreen } from "./components/SplashScreen/SplashScreen.tsx";
import { About } from "./components/About/About.tsx";
import { GenericQuiz } from "./components/ChaptersQuiz/GenericQuiz.tsx";
import { QuizResult } from "./components/QuizResult/QuizResult.tsx";

interface AppContextType {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

const App: React.FC = () => {
  const [score, setScore] = useState<number>(0);
  const [showSplash, setShowSplash] = useState<boolean>(true);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  return (
    <div className="App">
      <AppContext.Provider value={{ setScore, score }}>
        {showSplash ? (
          <SplashScreen onFinish={handleSplashFinish} />
        ) : (
          <MainContent />
        )}
      </AppContext.Provider>
    </div>
  );
};

const MainContent: React.FC = () => {
  const location = useLocation();
  const pagesWithoutNavbar = ["/", "/signup", "/login"];

  return (
    <>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/lead" element={<Lead />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/RapidTestResult" element={<RapidTestResult />} />
        <Route path="/quizResult/:chapterId" element={<QuizResult />} />
        <Route path="/slides" element={<Slides />} />
        <Route path="/chapquiz" element={<ChapQuiz />} />
        <Route path="/genknow" element={<GenKnow />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/quiz_name" element={<Quiz_name isOpen={true} isClose={() => {}}/>} />
        <Route path="/about" element={<About />} />
        {[
          "chap1",
          "chap2",
          "chap3",
          "chap4",
          "chap5",
          "chap6",
          "chap7",
          "chap8",
          "chap9",
          "chap10",
          "chap11",
          "chap12",
        ].map((chap) => (
          <Route key={chap} path={`/${chap}`} element={<GenericQuiz chapterId={chap} />} />
        ))}
      </Routes>
      {!pagesWithoutNavbar.includes(location.pathname) && <Navbar />}
    </>
  );
};

export default App;
