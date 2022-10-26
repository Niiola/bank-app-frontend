import React, {useState} from 'react';
import styles from './transfer.module.css'
import axios from "axios";
// import APIService from '../Components/APIService';
import {toast} from "react-toastify";
import Navbar from '../Components/navbar'




export function Transfer() {

    const [senderAccount, setSourceAccNumber]= useState("");
    const [recieverAccount, setDestinationAccNumber]= useState("");
    const [pin, setpin]= useState("");
    const [amount, setAmount] = useState("");
    
   
    const handleSubmit = async () => {
        const token= localStorage.getItem('token')
        // console.log(token)
        try{
            const response = await axios.post("http://127.0.0.1:5000/transfer", {pin, senderAccount, recieverAccount,amount},{
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

        // APIService.Transfer({pin, senderAccount, recieverAccount,amount})
        // .then(resp => console.log(resp))
        // .catch(error => console.log(error))
        
    }
    const Submit = event =>{
        event.preventDefault();
        setSourceAccNumber('')
        setDestinationAccNumber('')
        setpin('')
        setAmount('')

    }
    return (
    <>
    <div>
        <div>
            <Navbar/>
         </div>
        <div className ={styles.trnCont}>
            <h1> Transfer Funds </h1>
            <form onSubmit={Submit}>
                <input type = 'text' placeholder = 'Sender Account' value={senderAccount} onChange={(e)=>setSourceAccNumber(e.target.value)}></input>
                <input type = 'text' placeholder = 'Destination Account' value={recieverAccount} onChange={(e)=>setDestinationAccNumber(e.target.value)}></input>
                <input type= 'text' placeholder='Amount' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                <input type = 'password' placeholder = 'Pin' value={pin} onChange={(e)=>setpin(e.target.value)}></input>
                <br/>
                <button 
                    className='btn btn-primary' 
                    type='submit' 
                    onClick={handleSubmit}>Transfer
                </button>
                {/* <button type='submit' onClick={handleSubmit}>Transfer</button> */}
                {/* <input type= 'submit' value='Transfer' onClick={handleSubmit}></input> */}
                <hr></hr>
                <label for="available">Available Balance</label>
                <input type="" name="available" value="" readonly></input>
            </form>
        </div>
        </div> 
    </>
    )
}