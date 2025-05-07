
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { AuthContext } from './AuthContext';
import { auth } from "../firebase.init";
import { useEffect, useState } from "react";

const AuthProvaider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading] = useState(true);


    const createUser =(email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signOutUser = ()=>{
        setLoading(true)
        return signOut(auth);
    }


//     onAuthStateChanged(auth,(currentUser)=>{
//    if(currentUser){
//     console.log('has current user',currentUser)
//    }
//    else{
//     console.log('current user',currentUser)
//    }
//     })

   useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser =>{
        console.log('on auth stat change,',currentUser)
        setUser(currentUser)
        setLoading(false)
    })
    return ()=>{
       unSubscribe() ;
    }
   },[])


    const userInfo = {
        createUser,
        signInUser,
        user,
        signOutUser,
        loading,
    }

    return (
        <AuthContext value={userInfo}>
          {children}
        </AuthContext>
    );
};

export default AuthProvaider;