import React, { useState, useEffect,useContext } from 'react'
import './Profile.css'
import { signout } from '../authService.tsx'
// import MyImage from '../../assets/images.png'
import { authContext } from '../authContext.tsx'
import { db } from "../firebaseConfig.tsx";
import { doc, updateDoc , getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged  } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom'
import { FaCamera } from "react-icons/fa";

interface User {
  uid : string,
}

export const Profile : React.FC = () => {
    // Extracts currentUser object from authContext using useContext hook
    const { currentUser } = useContext(authContext) ?? {};
    // Declares a state variable 'image' initialized to null, with 'setImage' as its updater function
    const [image, setImage] = useState<File | null>(null);
    // Declares a state variable 'imageUrl' initialized to an empty string, with 'setImageUrl' as its updater function
    const [imageUrl, setImageUrl] = useState<string>("");
    // Declares a state variable 'uploadpic' initialized to false, with 'setUploadPic' as its updater function
    const [uploadpic, setUploadPic] = useState<boolean>(false);
    // Declares a state variable 'userId' initialized to null, with 'setUserId' as its updater function
    const [userId, setUserId] = useState<string | null>(null);
    const [loginModal,setLoginModal] = useState<boolean>(false)
    const navigate = useNavigate()

    // Retrieves the Firebase authentication instance
    const auth = getAuth();

    // Sets up an effect that runs once after the initial render to monitor authentication state changes
    useEffect(() => {
      // Subscribes to authentication state changes
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // If a user is logged in, update 'userId' with the user's UID
          setUserId(user.uid);
          console.log("Logged-in User ID:", user.uid);
        } else {
          // If no user is logged in, reset 'userId' to null
          setUserId(null);
          console.log("No user logged in");
        }
      });

      // Cleanup function to unsubscribe from the auth listener when the component unmounts
      return () => unsubscribe();
    }, []); // Empty dependency array ensures this effect runs only once

    // Sets up an effect that runs whenever 'userId' changes to fetch the user's profile picture
    useEffect(() => {
      if (!userId) return; // If 'userId' is null, exit early

      // Defines an asynchronous function to fetch the user's profile picture
      const fetchImage = async () => {
        try {
          // Creates a reference to the user's document in the 'users' collection
          const docRef = doc(db, "users", userId);
          // Retrieves the document snapshot
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            // If the document exists, update 'imageUrl' with the profile picture URL
            setImageUrl(docSnap.data().profilePic);
          } else {
            console.log("No profile picture found.");
          }
        } catch (error) {
          console.error("Error fetching image:", error);
        }
      };

      // Calls the fetchImage function
      fetchImage();
    }, [userId]); // Dependency array includes 'userId' to rerun the effect when 'userId' changes

    // Defines an asynchronous function to handle image upload
    const uploadImage = async () => {
      if (!image || !userId) return; // If 'image' or 'userId' is not set, exit early

      // Creates a FormData object to hold the image file and upload preset
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "ml_default");

      try {
        // Sends a POST request to Cloudinary's upload endpoint with the form data
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dceyw053f/image/upload",
          { method: "POST", body: formData }
        );
        // Parses the JSON response from Cloudinary
        const data = await response.json();
        console.log("Cloudinary Response:", data); // Logs the response for debugging

        if (!data.secure_url) {
          console.error("Upload failed: No secure_url returned from Cloudinary");
          return;
        }
        // Updates 'imageUrl' state with the secure URL of the uploaded image
        setImageUrl(data.secure_url);
        setUploadPic(false);

        // Creates a reference to the user's document in the 'users' collection
        const userRef = doc(db, "users", userId);
        // Updates the 'profilePic' field in the user's document with the new image URL
        await updateDoc(userRef, { profilePic: data.secure_url });
        console.log("Image URL saved to Firestore:", data.secure_url);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    };

    
    const handlesignout = async(e) => {
        e.preventDefault()
        try{
            await signout()
            setLoginModal(false)
        }
        catch(err){
            alert(err.message);
        }
    }

    const settings = () => {
      navigate("/settings")
    }
    const login = () => {
      navigate("/login")
    }


    
    return (
        <div className='profile'>
            <div className='profile-head'>
            <h2>Profile</h2>
            {uploadpic && 
            <div className="upload-overlay">
              <div className="upload-content">
              <div>
              <input
                type="file"
                onChange={(e) => {
                  const file = e.target.files ? e.target.files[0] : null;
                  if (file) {
                    setImage(file);
                  }
                }}
                accept="image/*"
              />
            </div>

              <div className='upload-buttons'>
                <button onClick={() => setUploadPic(false)}>Cancel</button>
                <button onClick={uploadImage}>Upload</button>
              </div>
              </div>
              </div>
              }
              <div className="profile-picture-container">
              <div className="profile-picture">
            {imageUrl ? (
            <div>
            <img src={imageUrl} alt="Uploaded" width="200" onClick={() => setUploadPic(true)}/>
            </div>) : <img src={require('../../assets/images.png')} alt="defaultpic" onClick={() => setUploadPic(true)}/>
             }
            <div className="camera-icon">
               <FaCamera size={15} onClick={() => setUploadPic(true)}/>
            </div>
            </div>
            </div>
            {currentUser ? (<div>
                <p>{currentUser.email}</p>
                </div>) : 
                (<div>
                    <p>Not logged in</p>
                </div>)}
            </div>
            <div className='profile-body'>
            <div className='score-rank'>
            <p>Last Quiz Score</p>
            <p>00.0</p>
            </div>
            <div className='score-rank'>
            <p>Weekly Score</p>
            <p>00.0</p>
            </div>
            <div className='score-rank'>
            <p>Weekly Rank</p>
            <p>0</p>
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
            <button onClick={settings}>Settings</button>
            </div>
            {currentUser ? <div className='signout'>
            <button onClick={() => setLoginModal(true)}>Log Out</button>
            </div> : <div className='signout'>
            <button onClick={login}>Log In</button>
            </div>}
            {loginModal && <div className='logout-overlay'>
              <div className="logout-content">
              <p>Are you sure you want to log out?</p>
              <div className='login-yesno-buttons'>
                <button onClick={handlesignout}>Yes</button>
                <button onClick={() => setLoginModal(false)}>No</button>
              </div>
              </div>
              </div>}
        </div>
    )
}