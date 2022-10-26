// import styles from './dashboard.module.css'
import styles from '../dashboard/dashboard.module.css'
import{ useNavigate } from 'react-router-dom'
import {useState, useEffect} from 'react'

export function User() {
    const navigate = useNavigate()
    const [data, setData]= useState([])
    return (
       <div className={styles.dashCont}>
        <div onClick={() => navigate('/User_login')}>
             Login
        </div>
        
       </div>
    )
}