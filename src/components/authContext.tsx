import React, { ReactNode, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig.tsx";

interface User {
    uid : string,
    email : string,
    name : string
}
interface authContextType {
    currentUser : User | undefined
}
export const authContext = createContext<authContextType | undefined>(undefined);

interface AuthProviderProps{
    children : ReactNode
}
export const AuthProvider = ({children} : AuthProviderProps) => {
    const [currentUser, setCurrentUser] = useState<User | undefined>(undefined);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user)
            {
                setCurrentUser({
                    uid : user.uid,
                    email : user.email || '',
                    name : user.displayName || ''
                })
            }else{
                setCurrentUser(undefined);
            }
            
        })
        return () => unsubscribe();
    }, [])

    return (
        <authContext.Provider value={{currentUser}}>
            {children}
        </authContext.Provider>
    )
}