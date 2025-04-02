import './GenKnow.css'
import { Facts } from '../../Helpers/Facts.ts'
import React, { useState } from 'react';

export const GenKnow : React.FC = () => {
    const [count,setCount] = useState<number>(0);
    const prev = () =>{
        setCount(count-1)
    }
    const next = () => {
        setCount(count+1)
    }
    return (
        <div className='genknow'>
            <h1>DID YOU KNOW?</h1>
            <div className="genknow-content">
            <div className="genknow-inner-content">
            <h2>{Facts[count].fact}</h2>
            </div>
            </div>  
            {count === Facts.length -1 ?
            <div>
             <div className='prev'>
             <button onClick={prev}>Prev</button>
             </div>
            </div>
            : count === 0 ?
            <div>
            <div className='next'>
            <button onClick={next}>Next</button>
            </div>
            </div>
            : count > 0 ?
            <div className='prev-next'>
            <div className='prev'>
            <button onClick={prev}>Prev</button>
            </div>
            <div className='next'>
            <button onClick={next}>Next</button>
            </div>
            </div>
            :
            <div></div>
}
        </div>
    )
}
