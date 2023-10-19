import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [users,setUsers] = useState(null);
    const [loading,setLoading] = useState(true)
    const provider = new GoogleAuthProvider();

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email,password)
    }
    const google = () =>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUsers(currentUser)
            setLoading(false)
           })
           return () =>{
            unSubscribe();
           }
    },[])

    const authInfo = {users, loading, createUser, loginUser, google, logOut}
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes={
    children: PropTypes.node
}
export default AuthProvider;