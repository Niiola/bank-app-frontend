import styles from './dashboard.module.css'
import{ useNavigate } from 'react-router-dom'
import {useState, useEffect} from 'react'
import Navbar from '../Components/navbar'

export function Dashboard() {
    
    const navigate = useNavigate()
    const [data, setData]= useState([])
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div className={styles.dashCont}>

                <div onClick={() => navigate('/transfer')}>
                    Transfer
                </div>

                <div onClick={() => navigate('/balance')}>
                    Transaction History
                </div>

            </div>
       </div>
    )
}