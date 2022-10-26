import React, {useState} from 'react';
import styles from './withdraw.module.css'
import axios from "axios";

export function Withdraw() {
    const  [accnumber, setAccNumber]= useState("");
    const [amount, setAmount] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
       
        //post method
        axios.post('https://jsonplaceholder.typicode.com/users', { accnumber, amount })
          .then(res=>{
            console.log(res);
            console.log(res.data);
            window.location = "/retrieve" //This line of code will redirect you once the submission succeeds
          })
      }

    return (
        <div className ={styles.wthCont}>
            <h1> Withdraw Funds </h1>
            <form>
                <input type = 'number' placeholder = 'Account Number' value={accnumber} onChange={(e)=>setAccNumber(e.target.value)}></input>
                <input type='number' placeholder='Amount' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                <input type='submit' value='Withdraw' onClick={handleSubmit}></input>
                <hr></hr>
                <label for="available">Available Balance</label>
                <input type="" name="available" value="" readonly></input>
            </form>
        </div> 
            
        
        
        
       
    )
}