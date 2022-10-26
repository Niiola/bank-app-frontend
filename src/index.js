import React from 'react';
import ReactDOM from 'react-dom/client';
import {Bounce, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProtectedRoute } from './Components/ProtectedRoute';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


// import { Dashboard } from './new-customer/User/dashboard/dashboard'
// import { NewCustomer } from './new-customer/new-customer'
// import { Deposit } from './deposit/deposit'
import {User} from './user/User'
import {Dashboard} from './dashboard/dashboard'
import {Admin} from './admin/Admin'
import {NewCustomer} from './new-customer/new-customer'
import {Login} from './admin/login/Login'

// import {NewAdmin} from './Admin/New-Admin/New-Admin'
import {Deposit} from './deposit/deposit'
import { Navbar } from './Components/navbar';

// import { Withdraw } from './withdraw/withdraw'
// import { Transfer } from './transfer/transfer'
import './index.css'
// import { Balance } from './new-customer/User/balance/balance'
import {Withdraw} from './withdraw/withdraw'
import {Transfer} from './transfer/transfer'
import Balance from './balance/balance'
import App from './try'



// import {App} from './Admin/Admin-dashboard/App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { UserLogin } from './user/Login/User_login';
import { ProtectedRoute2 } from './Components/ProtectedRoute2';
import { Admin_dashboard } from './admin/admin-dashboard/Admin_dashboard';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <Navbar/> */}
    <Routes>
      {/* <Route path="/try" element={<App/>} /> */}
      <Route path="/" element={<User/>} />
      <Route path="/User_login" element={<UserLogin/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/Admin" element={<Admin/>} />
      <Route path="/Admin_dashboard" element={<ProtectedRoute2> <Admin_dashboard/></ProtectedRoute2>} />
      <Route path="/user-dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute> } />
      <Route path="/new" element={<ProtectedRoute2><NewCustomer /></ProtectedRoute2>  } />
      <Route path="/deposit" element={<ProtectedRoute2> <Deposit /></ProtectedRoute2> } />
      {/* <Route path="/withdraw" element={<Withdraw />} /> */}
      <Route path="/transfer" element={<ProtectedRoute> <Transfer /> </ProtectedRoute> } />
      <Route path="/balance" element={<Balance />} />
      
    </Routes>
    <ToastContainer 
        position='top-right'
        autoClose={2500}
        transition={Bounce}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable/>
  </BrowserRouter>
);

