import './Login.css'
import { signIn } from '../authService.tsx'
// import Quizmenu from '../../assets/QuizImg.jpeg'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'

export const Login : React.FC = () => {
    const [email,setEmail] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const [error, setError] = useState<string>("")
    const navigate = useNavigate()
    const [isLoading,setIsLoading] = useState<boolean>(false)

    const handleLogIn = async(e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        try{
            await signIn(email, password)
            setError("Login successful")
            setIsLoading(false)
            navigate("/home")
        }catch (err){
            setIsLoading(false)
            setError(err)
        }
    setError('')}
    
    return (
        <div className='login'>
            <img src={require('../../assets/QuizImg.jpeg')} alt=''/>
            <p>Login</p>
            <div className='loginform'>
            <form onSubmit={handleLogIn}>
            <input value={email} placeholder='Email' type='text' onChange={(e) => setEmail(e.target.value)}/>
            <input name={password} placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value)}/>
            <div  className='forgotpassword'>
            <Link to="/forgotpassword"><p>Forgot Password?</p></Link>
            </div>
            <button className='loginbutton'>LOG IN</button>
            </form>
            </div>
            <div>
            </div>
            <div className='register'>
            <p>New Here? <Link to="/signup" className='link'> Register</Link></p>
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