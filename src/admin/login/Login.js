import React, {useContext, useState} from 'react';
// import APIService from '../Components/APIService';
// import APIService from '../../Components/APIService';
// import styles from './login.css'
import styles from './new-admin.module.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify";





export function Login() { 
   const [email, setEmail]= useState("");
   const [password, setPassword] = useState ("");
   const token =  localStorage.getItem("token");  
   const navigate =useNavigate()



    const handleSubmit = async() => {
        try {
            const response = await axios.post('http://127.0.0.1:5000/Adminlogin',{email, password}) 
        if(response.status === 200) {
            // console.log("this came from the backend",response.data.data)
            localStorage.setItem("token", response.data?.data);
            toast.success(response.data.description)
            setTimeout(() => {
                navigate("/Admin_dashboard")    
            }, 100);
            
            // return response.json();
        }
        }
         catch (error) {
            toast.error(error.response.data.description)
            console.log(error.response);
        }
    };
    
    const Submit = event =>{
        event.preventDefault();
        setEmail('')
        setPassword('')
    }
    return (
        <div className={styles.custCont}>
            <h1> ADMIN LOGIN</h1>
            <form onSubmit={Submit}>
                <div>
                    <input type='email' 
                            placeholder='Email' 
                            value = {email} 
                            onChange = {(e)=>setEmail(e.target.value)} />
                </div>
                <div>
                    <input type='password' 
                            placeholder='Password' 
                            value= {password} 
                            onChange = {(e)=> setPassword(e.target.value)} />
                </div>
                <br/>
                <div>
                <button 
                    className='btn btn-primary' 
                    type='submit' 
                    onClick={handleSubmit}>LogIn
                </button>
            </div>
            </form>
            
        </div>
    )
}
