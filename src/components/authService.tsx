import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth"
import { auth } from "./firebaseConfig.tsx"


export const signUp = async(email : string, password : string) => {
    try{
        const userData = await createUserWithEmailAndPassword(auth, email, password)
        return userData.user
    } catch(error){
        throw error;
    }
}

export const signIn = async(email : string, password : string) => {
    try{
        const userData = await signInWithEmailAndPassword(auth, email, password)
        return userData.user
    } catch(error){
        throw error;
    }
}

export const signout = async() => {
    try{
        await signOut(auth)
    } catch(error){
        throw error;
    }
}