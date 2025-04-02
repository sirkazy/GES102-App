import React, { useState } from 'react';
import { Textbook } from '../../Helpers/Textbook.ts';
import './Slides.css';
// import menuIcon from '../../assets/MenuIcon_3.png';

export const Slides : React.FC = () => {
    const [count, setCount] = useState(0);
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    };

    const selectChapter = (index : number) => {
        setCount(index);
    };

    const chapter = Textbook[count];

    return (
        <div className="slides">
            <ul className={menu ? '' : 'hideToggleMenu'}>
                <li onClick={() => selectChapter(0)}>Chapter1</li>
                <li onClick={() => selectChapter(1)}>Chapter2</li>
                <li onClick={() => selectChapter(2)}>Chapter3</li>
                <li onClick={() => selectChapter(3)}>Chapter4</li>
                <li onClick={() => selectChapter(4)}>Chapter5</li>
                <li onClick={() => selectChapter(5)}>Chapter6</li>
                <li onClick={() => selectChapter(6)}>Chapter7</li>
                <li onClick={() => selectChapter(7)}>Chapter8</li>
                <li onClick={() => selectChapter(8)}>Chapter9</li>
                <li onClick={() => selectChapter(9)}>Chapter10</li>
                <li onClick={() => selectChapter(10)}>Chapter11</li>
                <li onClick={() => selectChapter(11)}>Chapter12</li>
            </ul>

            <img src={require('../../assets/MenuIcon_3.png')} className="menuIcon" onClick={toggleMenu} alt="Menu" />

            <div className="body">
                <h1 className="chapter-title">{chapter.chapter}</h1>
                <h1>{chapter.topic}</h1>
                {chapter.slides.map((slide, idx) => (
                    <div key={idx} className="slide">
                        <h2 className="slide-title">{slide.title}</h2>
                        <p className="slide-content">{slide.content}</p>
                        {/* {slide.subtopics && (
                            <div className="subtopics-container">
                                <h3>Subtopics:</h3>
                                <ul>
                                    {slide.subtopics.map((sub, idx2) => (
                                        <li key={idx2} className="subtopic-item">
                                            <h4>{sub.title}</h4>
                                            <p>{sub.content}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )} */}
                    </div>
                ))}
            </div>
        </div>
    );
};
