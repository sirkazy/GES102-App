import { Link } from 'react-scroll'
import './Login.css'
import { useContext } from 'react'
import { AppContext } from '../../App'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { dataBase } from '../firebaseConfig'
import Quizmenu from '../../assets/QuizImg.jpeg'

export const Login= () => {
    const handleSubmit = async(e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        await signInWithEmailAndPassword(dataBase,email,password).then(data => {
            console.log(data,'authData')
            setScreenState('home')
        }).catch(err => {
            alert(err)
            setScreenState('login')
        })
    }
    const {setScreenState} = useContext(AppContext)
    return (
        <div className='login'>
            <img src={Quizmenu} alt=''/>
            <p>Login</p>
            <div className='loginform'>
            <form onSubmit={(e) => handleSubmit(e)}>
            <input name='email' placeholder='Email' type='text'/>
            <input name='password' placeholder='Password' type='password'/>
            <div  className='forgotpassword'>
            <p><Link to='forgotpasssword' onClick={() => setScreenState('forgotpassword')}>Forgot Password?</Link></p>
            </div>
            <button className='loginbutton'>LOG IN</button>
            </form>
            </div>
            <div className='register'>
            <p>New Here? <Link to='signup' className='link' onClick={() => setScreenState('signup')}>Register</Link></p>
            </div>
        </div>
    )
}