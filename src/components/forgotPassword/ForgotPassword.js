import './ForgotPassword.css'
import QuizImg from '../../assets/QuizImg.jpeg'
import { sendPasswordResetEmail } from 'firebase/auth'
import { dataBase } from '../firebaseConfig'
import { useContext } from 'react'
import { AppContext } from '../../App'

export const ForgotPassword = () => {
    const {setScreenState} = useContext(AppContext)
    const handleforgotSubmit = async(e) => {
        e.preventDefault()
        const emailval = e.target.email.value
        sendPasswordResetEmail(dataBase,emailval).then(data=>{
            alert('Check your gmail')
            setScreenState('login')
        }).catch(err=>{
            alert(err)
        })
    }
    return(
        <div className="forgotpassword">
            <img src={QuizImg}/>
            <p className='forgotheader'>Forgot Password?</p>
            <p className='forgotpara'>Please enter the email address associated with your account</p>
            <div className='forgotform'>
            <form onSubmit={(e) => handleforgotSubmit(e)}>
            <input name='email' placeholder="Email" type="email" required/>
            <button>Reset</button>
            </form>
            </div>
        </div>
    )
}