import React, { useContext, useState , useEffect} from 'react'
import {auth} from '../firebase.js'
import {GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

function AuthProvider({children}) {
    
    const provider = new GoogleAuthProvider()
    const [isLogIn, setIsLogIn] = useState(true)
    const [currentUser, setCurrentUser] = useState()

     const signInWithGoogle = async () => {
            await signInWithPopup(auth, provider)
            .then(result => {
                console.log('log in')
            })
    }
     const handleSignOut = async () => {
        await signOut(auth).then(() => {
                console.log('sign out')
            }).catch((error) => {
                // An error happened.
            })
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setIsLogIn(false)
        })
        return unsubscribe
    }, [])

    const value ={
        signInWithGoogle,
        handleSignOut,
        currentUser
    }
  return (
    <AuthContext.Provider value= {value}>
        { !isLogIn && children}
</AuthContext.Provider>
  )
}
export default AuthProvider