import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivetRoute = ({children}) => {

    const {user,loading}= use(AuthContext);
    const location = useLocation()
    console.log(location)
    if(loading){
        return  <span className="loading loading-infinity loading-xl"></span>
    }
    if(!user){
        return <Navigate to='/login'></Navigate>
    }

    return children;
    
};

export default PrivetRoute;