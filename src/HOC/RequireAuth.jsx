import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const RequireAuth = (props) => {
    const {isLogin} = useAuth();

    if (!isLogin) {
        return <Navigate to="/"/>;
    }
    
    return props.children;
};

export default RequireAuth;