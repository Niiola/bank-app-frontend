import React from 'react'
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify";
import styles from '../dashboard/dashboard.module.css'



function Navbar2() {
    const navigate =useNavigate();
    const handleSubmit = ()=>{
        localStorage.removeItem("token");
        toast.success("Logging Out")
        setTimeout(() => {
            navigate("/login")
        }, 200);
    }
  return (
    <div className={styles.navbar}>
        <button className={styles.navbar2} onClick={handleSubmit}>LOG OUT</button>
    </div>
  )
}

export default Navbar2
