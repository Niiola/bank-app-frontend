import React from 'react';
import { Navigate } from 'react-router-dom';
import {toast} from 'react-toastify';



export const ProtectedRoute = (props) => {
    if (localStorage.getItem("token")){
        return props.children;
    }else{
        toast("Redirecting to Login Page");
        return <Navigate to='/User_login'/>
    }
}
