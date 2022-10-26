import styles from './admin-dashboard.module.css'
import{ useNavigate } from 'react-router-dom'
import {useState, useEffect} from 'react'

export function Admin() {
    const navigate = useNavigate()
    // const [data, setData]= useState([])
    return (
       <div className={styles.dashCont}>
        <div onClick={() => navigate('/login')}>
             Login
        </div>
        
        {/* <div onClick={() => navigate('/signup')}>
            signup
        </div> */}

        {/* <div onClick={() => navigate('/new')}>
             Create New Customer
        </div>
        <div onClick={() => navigate('/deposit')}>
            Deposit
        </div> */}
        
       </div>
    )
}