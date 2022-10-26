import React from 'react'
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify";
import styles from '../dashboard/dashboard.module.css'



function Navbar() {
    const navigate =useNavigate();
    const handleSubmit = ()=>{
        localStorage.removeItem("token");
        toast.success("Logging Out")
        setTimeout(() => {
            navigate("/User_login")
        }, 200);
    }
  return (
    <div className={styles.navbar}>
        <button className={styles.navbar2} onClick={handleSubmit}>LOG OUT</button>
    </div>
  )
}

export default Navbar




















// import React, { useContext } from "react";
// // import { Link } from "react-router-dom";
// // import { Context } from "./appContext";

// export const Navbar= ()=>{
//     // const {store, actions}= useContext(Context)
//     return(
//         <nav className="navbar navbar-light bg-light nb-3">
//             <Link to='/'>
//                 <span>react blueprint</span>
//             </Link>
//             <div className="ml-auto">
//                 {!store.token ?
//                     <Link to='/Login'>
//                         <button className="btn btn-primary">log in</button>
//                     </Link>
//                 :
//                 <button onClick={()=>actions.logout()} className="btn btn-primary">logout</button>
//                 }
                
//             </div>

//         </nav>
//     )
// }