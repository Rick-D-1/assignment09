import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvieder';
import { Navigate, useLocation } from 'react-router';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);


    if (loading) {
        return <p><span className="loading loading-dots loading-xl"></span></p>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/LogIn'}></Navigate>

};

export default PrivetRoute;