import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password )
    }
    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logoutUser = () => {
        signOut(auth)
    }
    const signInGoogle = (provider) => {
        return signInWithPopup(auth, provider)
    }
    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, currentUser => {
              setUser(currentUser);
          })
          // stop observing while unmounting
          return () => {
              return unsubscribe();
          }
      },[])



    const authInfo = {
        user,
        createUser,
        loginUser,
        logoutUser,
        signInGoogle,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;