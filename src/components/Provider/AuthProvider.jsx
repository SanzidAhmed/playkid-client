import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
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
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;