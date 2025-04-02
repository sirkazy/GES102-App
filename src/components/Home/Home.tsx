import './Home.css';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../App.tsx';
import { motion } from 'framer-motion';
import { Quiz_name } from './QuizName.tsx';
import { authContext } from '../authContext.tsx';
import { signout } from '../authService.tsx';
import { db } from '../firebaseConfig.tsx';
import { doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
    const appContext = useContext(AppContext);
    if (!appContext) {
      throw new Error("Home component must be wrapped with AppContextProvider");
    }    
    const { setScore } = appContext;
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const { currentUser } = useContext(authContext) ?? {};
    const [userId, setUserId] = useState<string | null>(null);
    const [profilePic, setProfilePic] = useState<string | null>(null);
    const [loginModal, setLoginModal] = useState<boolean>(false);
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUserId(user ? user.uid : null);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (!userId) return;

        const fetchProfilePic = async () => {
            try {
                const docRef = doc(db, "users", userId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setProfilePic(docSnap.data().profilePic);
                } else {
                    console.log("No profile picture found.");
                }
            } catch (error) {
                console.error("Error fetching profile picture:", error);
            }
        };

        fetchProfilePic();
    }, [userId]);

    const handleSignOut = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            await signout();
            setLoginModal(false);
        } catch (err: any) {
            setLoginModal(false);
            alert(err.message);
        }
    };

    const rapid_test = () => {
        setScore(0);
        setIsModalOpen(true);
    };

    const take_quiz = () => {
        setScore(0);
    };

    return (
        <div className='home'> <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
            <div className='tophead'>
                <div className="img-mail-sign">
                    <div>
                        <div className='user-data-left'>
                            {userId ? (
                                <>
                                    {profilePic ? (
                                        <img src={profilePic} alt="Profile" width="150" />
                                    ) : (
                                        <img src={require('../../assets/images.png')} alt="Default" />
                                    )}
                                </>
                            ) : (
                                <img src={require('../../assets/images.png')} alt="Default" />
                            )}
                        </div>
                        <div className='user-data-right'>
                            {currentUser ? (
                                <div>
                                    <p>{currentUser.email}</p>
                                </div>
                            ) : (
                                <div>
                                    <p>Not logged in</p>
                                </div>
                            )}
                        </div>
                    </div>
                    {currentUser ? (
                        <div className="signinbutton">
                            <button onClick={() => setLoginModal(true)}>Sign Out</button>
                        </div>
                    ) : (
                        <div className="signinbutton">
                            <Link to="/login"><button>Sign In</button></Link>
                        </div>
                    )}
                </div>
                {loginModal && (
                    <div className='logout-overlay'>
                        <div className="logout-content">
                            <p>Are you sure you want to log out?</p>
                            <div className='login-yesno-buttons'>
                                <button onClick={handleSignOut}>Yes</button>
                                <button onClick={() => setLoginModal(false)}>No</button>
                            </div>
                        </div>
                    </div>
                )}
                <div className='head'>
                    <div className='topbox'>
                        <div className='topbox-left'>
                            <p><strong>Good Day</strong></p>
                            <p>Welcome to GES 102 quiz test platform</p>
                            <motion.div whileTap={{ scale: 0.9 }}>
                                <Link to="/about"><button>Learn More</button></Link>
                            </motion.div>
                        </div>
                        <div className='topbox-right'>
                            <img src={require('../../assets/quizresult.jpeg')} alt="Quiz Result" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='main-body'>
                <div className='first'>
                    <div className='box'>
                        <img src={require('../../assets/Rapid_Test.jpeg')} onClick={rapid_test} alt="Rapid Test" />
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <li onClick={rapid_test}>Rapid Test</li>
                        </motion.div>
                        <Quiz_name isOpen={isModalOpen} isClose={() => setIsModalOpen(false)} />
                    </div>
                    <div className='box'>
                        <Link to="/slides">
                            <img src={require('../../assets/ReadSlides.jpeg')} alt="Read Slides" />
                        </Link>
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <Link to="/slides"><li>Read Slides</li></Link>
                        </motion.div>
                    </div>
                </div>
                <div className='second'>
                    <div className='box'>
                        <Link to="/chapquiz">
                            <img src={require('../../assets/TakeQuiz.webp')} onClick={take_quiz} alt="Take Quiz" />
                        </Link>
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <Link to="/chapquiz"><li onClick={take_quiz}>Take Quiz</li></Link>
                        </motion.div>
                    </div>
                    <div className='box'>
                        <Link to="/genknow">
                            <img src={require('../../assets/DidYouKnow.webp')} alt="Did You Know" />
                        </Link>
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <Link to="/genknow"><li>General Knowledge</li></Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
        </div>
    );
};
