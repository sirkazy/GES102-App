import './Lead.css'
import { useContext } from 'react'
import { AppContext } from '../../App'

export const Lead = () => {
    const {setScreenState} = useContext(AppContext)
    return (
        <div className="lead">
            <h2>LEADERSBOARD</h2>
            <h1>COMING SOON...</h1>
        </div>
    )
}