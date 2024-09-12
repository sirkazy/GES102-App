import { useState } from 'react'
import {Textbook} from '../../Helpers/Textbook'
import './Slides.css'
import menuIcon from '../../assets/MenuIcon_3.png'

export const Slides = () => {
    const [count,setCount] = useState(0);
    const [menu,setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu)
    }

    const chapter1 = () => {
        setCount(0)
    }
    const chapter2 = () => {
        setCount(1)
    }
    const chapter3 = () => {
        setCount(2)
    }
    const chapter4 = () => {
        setCount(3)
    }
    const chapter5 = () => {
        setCount(4)
    }
    const chapter6 = () => {
        setCount(5)
    }
    const chapter7 = () => {
        setCount(6)
    }
    const chapter8 = () => {
        setCount(7)
    }
    const chapter9 = () => {
        setCount(8)
    }
    const chapter10 = () => {
        setCount(9)
    }
    const chapter11 = () => {
        setCount(10)
    }
    const chapter12 = () => {
        setCount(11)
    }
    return (
        <div className="slides">
            <ul className={menu ? '' : 'hideToggleMenu'}>
                <li onClick={chapter1}>Chapter 1</li>
                <li onClick={chapter2}>Chapter 2</li>
                <li onClick={chapter3}>Chapter 3</li>
                <li onClick={chapter4}>Chapter 4</li>
                <li onClick={chapter5}>Chapter 5</li>
                <li onClick={chapter6}>Chapter 6</li>
                <li onClick={chapter7}>Chapter 7</li>
                <li onClick={chapter8}>Chapter 8</li>
                <li onClick={chapter9}>Chapter 9</li>
                <li onClick={chapter10}>Chapter 10</li>
                <li onClick={chapter11}>Chapter 11</li>
                <li onClick={chapter12}>Chapter 12</li>
            </ul>
            <img src={menuIcon} className='menuIcon' onClick={toggleMenu}/>
            <div className='body'>
            <h1>{Textbook[count].Topic}</h1>
            <p>{Textbook[count].Slide}</p>
            </div>
        </div>
    )
}