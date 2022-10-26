import styles from '../admin-dashboard.module.css';
import{ useNavigate } from 'react-router-dom'
import Navbar2 from '../../Components/navbar2';


export function Admin_dashboard() {
    const navigate = useNavigate()
    return (
        <div>
            <div>
                <Navbar2/>
            </div>
            <div className={styles.dashCont}>
                <div onClick={() => navigate('/new')}>
                    Create New Customer
                </div>
                <div onClick={() => navigate('/deposit')}>
                    Deposit
                </div>
            </div>
       </div>
    )
}