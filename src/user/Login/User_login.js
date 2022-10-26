import React, {useState} from 'react';
// import APIService from '../Components/APIService';
// import APIService from '../../Components/APIService';
// import styles from './login.css'
import styles from './new-user.module.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify";


export function UserLogin() { 
//    const [email, setEmail]= useState("");
   const [accountNumber, setaccountNumber]= useState("");
   const [password, setPassword] = useState ("");
   const token =  localStorage.getItem("token");  
   console.log("this is your token",token)


    const navigate =useNavigate()

    // const handleSubmit = () => {
    //     APIService.LogUser({email, password})
    //     .then(resp => console.log(resp))
    //     .catch(error => console.log(error))
        
    // }
    const handleSubmit = async() => {
        try {
            const response = await axios.post('http://127.0.0.1:5000/Userlogin',{accountNumber, password}) 
        if(response.status === 200) {
            // console.log("this came from the backend",response.data.data)
            localStorage.setItem("token", response.data?.data);
            toast.success(response.data.description)
            setTimeout(() => {
                navigate("/user-dashboard")
            }, 2000);
            
            // return response.json();
        }
        }
         catch (error) {
            toast.error(error.response.data.description)
            console.log(error.response);
        }
    }
    const Submit = event =>{
        event.preventDefault();
        setaccountNumber('')
        setPassword('')
    }
    
    return (
        <div className={styles.custCont}>
            <h1> USER LOGIN</h1>
            {/* {(token && token !==" " && token !== undefined) ? ( "Welcome User" ) :( */}
                <form onSubmit={Submit}>
                {/* <div>
                    <input type='email' 
                            placeholder='Email' 
                            value = {email} 
                            onChange = {(e)=>setEmail(e.target.value)} />
                </div> */}
                 <div>
                    <input type='accountNumber' 
                            placeholder='Account Number' 
                            value = {accountNumber} 
                            onChange = {(e)=>setaccountNumber(e.target.value)} />
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
                    onClick={handleSubmit}>LOGIN
                </button>
                </div>
                </form>
            
            {/* )} */}
            
        </div>
    )
}
 