import { useContext } from 'react'
import './Profile.css'
import { AppContext } from '../../App'
import { dataBase } from '../firebaseConfig'
import { signOut } from 'firebase/auth'
import MyImage from '../../assets/images.png'

export const Profile = () => {
    const {setScreenState} = useContext(AppContext)
    const handlesignout = () => {
        signOut(dataBase).then(val => {
            console.log("val")
            setScreenState('login')
        })
    }
    return (
        <div className='profile'>
            <div className='profile-head'>
            <h2>Profile</h2>
            <img src={MyImage}/>
            <p>User</p>
            <p>User005@gmail.com</p>
            </div>
            <div className='profile-body'>
            <div className='score-rank'>
            <p>Last Game Score</p>
            <p>30.0</p>
            </div>
            <div className='score-rank'>
            <p>Weekly Score</p>
            <p>60.0</p>
            </div>
            <div className='score-rank'>
            <p>Weekly Rank</p>
            <p>1</p>
            </div>
            <div className='score-rank'>
            <p>Monthly Score</p>
            <p>0.0</p>
            </div>
            <div className='score-rank'>
            <p>Monthly Rank</p>
            <p>0</p>
            </div>
            </div>
            <div className='profile-settings'>
            <button onClick={() => setScreenState('settings')}>Settings</button>
            </div>
            <div className='signout'>
            <button onClick={handlesignout}>Logout</button>
            </div>
        </div>
    )
}