import React, { useContext } from 'react';
import { AuthContext } from '../Auth-Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loader} =useContext(AuthContext);
    const location =useLocation();

    if (loader) {
        return <span className="my-24 block mx-auto loading loading-spinner loading-lg"></span>
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>

};

export default PrivateRoute;