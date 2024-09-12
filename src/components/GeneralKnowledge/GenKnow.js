import { useContext, useState } from 'react'
import { AppContext } from '../../App'
import './GenKnow.css'
import { Facts } from '../../Helpers/Facts'

export const GenKnow = () => {
    const {setScreenState} = useContext(AppContext)
    const [count,setCount] = useState(0);
    const prev = () =>{
        setCount(count-1)
    }
    const next = () => {
        setCount(count+1)
    }
    return (
        <div className='genknow'>
            <h1>DID YOU KNOW?</h1>
            <h2>{Facts[count].fact}</h2>
            {count == Facts.length -1 ?
            <div>
             <div className='prev'>
             <button onClick={prev}>Prev</button>
             </div>
            </div>
            : count == 0 ?
            <div>
            <div className='next'>
            <button onClick={next}>Next</button>
            </div>
            </div>
            : count > 0 ?
            <div>
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
