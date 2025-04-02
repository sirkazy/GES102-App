import './SignUp.css'
import React, {useState } from 'react'
// import Quizmenu from '../../assets/QuizImg.jpeg'
import { signUp } from '../authService.tsx'
import { Link, useNavigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'

export const SignUp : React.FC = () => {
    const [name,setName] = useState<string>("")
    const [email,setEmail] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const [error, setError] = useState<string>("")
    const navigate = useNavigate()
    const [isLoading,setIsLoading] = useState<boolean>(false)


    const handleSignUp = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        try{
            await signUp(email, password)
            console.log("Sign Up successfully")
            setIsLoading(false)
            navigate("/login")
        }catch(err){
            setIsLoading(false)
            setError(err.message)
            }
        }
    return (
        <div className='signup'>
            <img src={require('../../assets/QuizImg.jpeg')} alt=''/>
            <p className='signupheader'>Sign up</p>
            <div className='signupform'>
            <form onSubmit={handleSignUp}>
                <input placeholder='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input placeholder='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button className='signupbutton' >SIGN UP</button>
            </form>
            </div>
            <div>
            </div>
            <div className='signuplink'>
            <p>Already have an account? <Link className='link'to="/login">Sign In</Link></p>
            </div>
            {error && <p style={{color:'red'}}>{error}</p>}
            {isLoading && 
            <div className='loading-overlay'>
            <div className="loading-content">
                <ClipLoader color='purple' size={30}/>
            </div>
            </div>
            }
        </div>
    )
}