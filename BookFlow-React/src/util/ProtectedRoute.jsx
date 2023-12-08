import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

function ProtectedRoute({ component: Component, ...rest }) {
    const token = localStorage.getItem('token');
    
    let isAdmin = false;
    if (token) {
        const decoded = jwtDecode(token);
        isAdmin = decoded.role === "Admin";
    }
    
    

    return (
        <Route {...rest} render={
            props => isAdmin ? (<Component {...props} />) : (<Redirect to='/' />)
        } />
    );
}

export default ProtectedRoute;

