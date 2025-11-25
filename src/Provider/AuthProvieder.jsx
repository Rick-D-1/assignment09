import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';
import { onAuthStateChanged } from 'firebase/auth';
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvieder = ({ children }) => {
    // loading
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);




    const registerWithEmailPassword = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser)
            setLoading(false)

        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authData = {
        registerWithEmailPassword, setUser,
        user,
    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvieder;