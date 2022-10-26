import React, { useState, useEffect,Component } from 'react'
import styles from './balance.module.css'
import axios from "axios";
import {toast} from "react-toastify";
// import React, { Component } from 'react'
import Navbar from '../Components/navbar'


class Balance extends React.Component {

    constructor() {
      super()
      this.state = {
         transactions:null
      }
    }

    componentDidMount(){
        const token= localStorage.getItem('token')
        fetch('http://127.0.0.1:5000/TransactionHistory',{
            headers:{
                Authorization:`Bearer ${token}`,
              'content-type':"application/json"
            },
            method:'GET',
        })
        .then(res => res.json())
        .then(data => this.setState({transactions:data}))
        .catch(error => console.log(error))
    }

    // _renderTransactions(transaction,index){
    //     return <div>
    //                 <li >{transaction.SendersAccount}</li>
    //                 <li >{transaction.RecieversAccount}</li>
    //            </div>
         
    // }

  render() {
    const {transactions} = this.state;
    // console.log(transactions)
    return (
      <div>
        <div>
          <Navbar/>
        </div>
        <div className ={styles.balCont}>
          <h1>Transaction History</h1>
          <table className ={styles.tab}>
              <tr>
                  <th className ={styles.row}>FROM</th>
                  <th className ={styles.row}>TO</th>
                  <th className ={styles.row}>DATE</th>
              </tr>
            
              
                  { transactions? (
                      transactions.map((trans) =>{
                          const {From, TO, Date} =trans
                          return <tr>
                              <td className ={styles.row}>{From}</td>
                              <td className ={styles.row}>{TO}</td> 
                              <td className ={styles.row}>{Date}</td>
                              </tr>
                      
                          // return <li>From: {From} To: {TO}</li>
                      } ))
                      :( 
                        " no transaction to display"      )
                      
                  }
              
          </table>

        </div>
      </div>
    )
  }
}

export default Balance



{/* 
// export function Balance() {

    const [datas, setData] = useState([]);


    useEffect(()=> {
        const token= localStorage.getItem('token')

      fetch("http://127.0.0.1:5000/allusers",  {
        'method':'GET',
        headers:{
            Authorization:`Bearer ${token}`,
          'content-type':"application/json"
        }
      })
      .then(res => res.json())
      .then(res => setData(res))
      .catch(error => console.log(error))
    }, [])




//     const  [accnumber, setAccNumber]= useState("");
    
//     const handleSubmit = event => {
//     event.preventDefault();
       
//     //get method
//     axios.get('https://jsonplaceholder.typicode.com/users', { accnumber})
//      .then(res=>{
//         //nsetPost(response.data)
//         console.log(res);
//         console.log(res.data);
//         window.location = "/retrieve" //This line of code will redirect you once the submission succeeds
//         })
//  }

    return (
        <>
           <div className ={styles.balCont}>
            <h1> Transaction History </h1>
            <form>

            {datas && datas.map(data => {
            return (
              <div key= {data.User_Id}>
                {/* <h2>{data.SendersAccount}</h2> */}
                {/* <input>{data.SendersAccount}</input>
                <input>{data.RecieversAccount}</input> */}
                {/* <input>{data.accountNumber}</input>
                <input>{data.accountNumber}</input> */}



        //           <h2>{data.accountNumber}</h2>
        //           <h2>{data.email}</h2>
        //           <h2>{data.user}</h2>
        //           <h2>{data.Fname}</h2> 

        //       </div>
        //     )
        // })}


                {/* <input type = 'number' placeholder = 'Account Number' value={accnumber} onChange={(e)=>setAccNumber(e.target.value)}></input>
                <input type='submit' value='Check balance' onClick={handleSubmit}></input>
                <hr></hr>
                <label for="available">Available Balance</label>
                <input type="" name="available" value="" readonly></input> */}
//             </form>
//         </div> 
//         </>
//     )
// } */}