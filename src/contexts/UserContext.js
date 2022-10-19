import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {
     const [user, setUser] = useState({});

     const createUser = (email, password) =>{
          return createUserWithEmailAndPassword(auth, email, password);
     }
     const signIn = (email, password) =>{
          return signInWithEmailAndPassword(auth, email, password);
     }
     const logOut = () =>{
          return signOut(auth);
     }
     useEffect(()=>{
          const unSubscribe = onAuthStateChanged(auth, currentUser =>{
               setUser(currentUser);
               console.log(currentUser);
          })
          return ()=> unSubscribe();
     })

     const authInfo = {user,createUser, signIn, logOut};

     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};



export default UserContext;