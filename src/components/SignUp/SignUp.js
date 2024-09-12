import { Link } from 'react-scroll'
import './SignUp.css'
import { useContext } from 'react'
import { AppContext } from '../../App'
import { dataBase } from '../firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import Quizmenu from '../../assets/QuizImg.jpeg'


export const SignUp= () => {
    const {setScreenState} = useContext(AppContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        await createUserWithEmailAndPassword(dataBase,email,password).then(data => {
            console.log(data,'authdata')
            setScreenState('login')
        }).catch(err => {
            alert(err)
            setScreenState('signup')
        })
    }
    return (
        <div className='signup'>
            <img src={Quizmenu} alt=''/>
            <p className='signupheader'>Sign up</p>
            <div className='signupform'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input placeholder='Name' type='text' name='name'/>
                <input placeholder='Email' type='email' name='email'/>
                <input placeholder='Password' type='password' name='password'/>
                <button className='signupbutton' >SIGN UP</button>
            </form>
            </div>
            <div className='signuplink'>
            <p>Already have an account? <Link className='link' onClick={() => setScreenState('login')}>Sign In</Link></p>
            </div>
        </div>
    )
}