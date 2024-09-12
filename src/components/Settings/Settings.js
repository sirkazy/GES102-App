import './Settings.css'
import Myimage from '../../assets/images.png'

export const Settings = () => {
    return (
        <div className="settings">
            <h2>Edit Profile</h2>
            <div className='formstyle'>
            <img src={Myimage}/>
            </div>
            <p><strong>User</strong></p>
            <p>User@gmail.com</p>
            <div className='formstyle'>
            <form>
                <label>Name</label>
                <input placeholder='Enter Name...' type='text' name='name'/>
                <label>Email</label>
                <input placeholder='Enter Email...' type='email' name='email'/>
                <button>Update Profile</button>
            </form>
            </div>
            <p>Dark Mode</p>
        </div>
    )
}