import React, {useContext, useEffect, useState} from 'react';
import styles from './deposit.module.css'
import axios from "axios";
import APIService from '../Components/APIService';
import {toast} from "react-toastify";
import Navbar2 from '../Components/navbar2';




export function Deposit() {
    // const {store,actions}= useContext(Context);
    const  [accountNumber, setAccountNumber]= useState("");
    const [amount, setAmount] = useState("");

    const handleSubmit = async () => {
        const token= localStorage.getItem('token')
        // console.log(token)
        try{
            const response = await axios.post("http://127.0.0.1:5000/deposit", {accountNumber,amount},{
                headers: {
                    Authorization:`Bearer ${token}`

                }
            })
            if (response.status===200){
                toast.success(response.data.description)
            }
            console.log(response.data)
            // APIService.Deposit({accountNumber,amount})
            //     .then(resp => console.log(resp))
            //     .catch(error => console.log(error))
           
               
        } catch(error){
            console.error(error.response)
            toast.error(error.response.data.description)
        }
        
        
    }
    const Submit = event =>{
        event.preventDefault();
        setAccountNumber('')
        setAmount('')

    }

    // const handleSubmit = event => {
    //     // event.preventDefault();
       
    //     // //post method
    //     // axios.post('https://jsonplaceholder.typicode.com/users', { accnumber, amount })
    //     //   .then(res=>{
    //     //     console.log(res);
    //     //     console.log(res.data);
    //     //     window.location = "/retrieve" //This line of code will redirect you once the submission succeeds
    //     //   })
    //   }


    // useEffect(() =>{
    //     if(store.token && store.token!=""&& store.token!=undefined) actions.getMessage();
    // },[store.token]);

    
    
    return (
        <div>
            <div>
                <Navbar2/>
            </div>
            <div className ={styles.depositCont}>
                <h1> Deposit Funds </h1>
                <form onSubmit={Submit}>
                    <input type = 'text' placeholder = 'Account Number' value={accountNumber} onChange={(e)=>setAccountNumber(e.target.value)}/>
                    <input type='text' placeholder='Amount' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                    <br/>
                    <button 
                        className='btn btn-primary' 
                        type='submit' 
                        onClick={handleSubmit}>Deposit
                    </button>
                    {/* <input type='submit' value='Deposit' onClick={handleSubmit}></input> */}
                    {/* <br/> */}
                    {/* <label for="available">Available Balance</label>
                    <input type="" name="available" value="" readonly></input> */}
                </form>
            </div> 
        </div>
            
        
        
        
       
    )
}