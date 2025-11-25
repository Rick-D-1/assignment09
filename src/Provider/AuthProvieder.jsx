import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
import React, { createContext } from 'react';
import auth from '../Firebase/firebase.config';
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvieder = ({ children }) => {
    const registerWithEmailPassword = (email, pass) => {
        return createUserWithEmailAndPassword(auth, email, pass)
    }


    const authData = {
        registerWithEmailPassword
    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvieder;