import { createContext, useState } from "react";
import PropTypes from 'prop-types'; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [users,setUsers] = useState(null);
    const [loading,setLoading] = useState(true)

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser = (email,password) =>{
        return signInWithEmailAndPassword(email,password)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    const authInfo = {users, loading, createUser, loginUser, logOut}
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