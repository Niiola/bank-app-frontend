import React, {useState} from 'react';
import APIService from '../Components/APIService';
import styles from './new-customer.module.css'
import axios from "axios";
import {toast} from "react-toastify";
import Navbar2 from '../Components/navbar2';


export function NewCustomer() {
   const [firstName, setFirstName]= useState("");
   const [lastName, setLastName]= useState(""); 
   const [email, setEmail]= useState("");
   const [pin, setPin] = useState ("");
   const [password1, setPassword] = useState ("");
   const [password2, setConfirmPassword] = useState ("");

    const handleSubmit = async () => {
        const token= localStorage.getItem('token')
        // console.log(token)
        try{
            const response = await axios.post("http://127.0.0.1:5000/signup", {firstName, lastName, email,pin, password1, password2},{
                headers: {
                    Authorization:`Bearer ${token}`

                }
            })
            if (response.status===200){
                toast.success(response.data.description)
            }
            console.log(response.data)
           
               
        } catch(error){
            console.error(error.response)
            toast.error(error.response.data.description)
        }
        
        

    //    const resp = APIService.AddUser({firstName, lastName, email,pin, password1, password2})
    //     // .then(resp => console.log(resp))
    //     // .catch(error => console.log(error))
    //     try {
    //     if(resp.status === 200) {
    //         toast.success(resp.data.description)
    //     }
    //     if(resp.status === 401){
    //         toast.error(resp.data.message)
    //     }
    //     }
    //      catch (error) {
    //         toast.error(error.resp.data.description)
    //         console.log(error.resp);
    //     }
     
        
    }
    const Submit = event =>{
        event.preventDefault();
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setPin('')
    }

    
        // props.handleSubmit(data)
        // event.preventDefault();
       
    //     //post method
    //     // axios.post('https://jsonplaceholder.typicode.com/users', { firstname, lastname, email, password, confirmpassword })
    //     //   .then(res=>{
    //     //     console.log(res);
    //     //     console.log(res.data);
    //     //     window.location = "/retrieve" //This line of code will redirect you once the submission succeeds
    //     //   })
    //   }

    // const handleSubmit = ()=>{
    //     APIService.AddUser({body})
    //     .then(resp=>console.log(resp))
    //     .catch(error => console.log(error))
    // }

    return (
        <div>
            <div>
                <Navbar2/>
            </div>
            <div className={styles.custCont}>
                <h1> CREATE NEW ACCOUNT </h1>
                <form onSubmit={Submit}>
                    <div>
                        <input type='text' 
                                placeholder='First Name' 
                                value={firstName} 
                                onChange={(e)=>setFirstName(e.target.value)}  />
                    </div>
                    <div>
                        <input type='text'
                                placeholder='Last Name' 
                                value = {lastName} 
                                onChange = {(e)=>setLastName(e.target.value)} />
                    </div>
                    <div>
                        <input type='email' 
                                placeholder='Email' 
                                value = {email} 
                                onChange = {(e)=>setEmail(e.target.value)} />
                    </div>
                    <div>
                        <input type='password' 
                                placeholder='pin' 
                                value= {pin} 
                                onChange = {(e)=> setPin(e.target.value)} />
                    </div>
                    <div>
                        <input type='password' 
                                placeholder='Password' 
                                value= {password1} 
                                onChange = {(e)=> setPassword(e.target.value)} />
                    </div>
                    <div>
                        <input type='password' 
                                placeholder='Confirm password' 
                                value = {password2} 
                                onChange = {(e)=>setConfirmPassword(e.target.value)} />
                    </div>
                    <br/>
                    <div>
                    <button 
                        className='btn btn-primary' 
                        type='submit' 
                        onClick={handleSubmit}>Create
                    </button>
                </div>
                </form>
                
            </div>
        </div>
    )
}
