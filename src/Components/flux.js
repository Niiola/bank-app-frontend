// import {toast} from "react-toastify";
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';

// const getState =({ getStore, getActions,setStore}) =>{
//     return{
//         store:{
//             token:null ,
//             message:null,
//             demo:[
//                 {
//                 title:"FIRST",
//                 background:"white",
//                 initial:"white"
//                 },
//                 {
//                 title:"SECOND",
//                 background:"white",
//                 initial:"white"
//                 }
//             ]
//         },
//         actions:{
//             exampleFunction:()=>{
//                 getActions().changeColor(0, "green");
//             },

//             syncTokenFromLocalStore:()=>{
//                 const token = localStorage.getItem("token");
//                     if (token && token!="" && token !=undefined) setStore({token: token});
//             },

//             logout:()=>{
//                 localStorage.removeItem("token");
//                 setStore({token: null});
//             },

//             // login: async (email,password)=>{
//             //     const navigate =useNavigate()
//             //     try {
//             //         const response = await axios.post('http://127.0.0.1:5000/Adminlogin',{email, password}) 
//             //     if(response.status === 200) {
//             //         // console.log("this came from the backend",response.data.data)
//             //         localStorage.setItem("token", response.data?.data);
//             //         setStore({token: response.data?.data})
//             //         toast.success(response.data.description)
//             //         setTimeout(() => {
//             //             navigate("/Admin_dashboard")
//             //         }, 100); 
//             //         return true;
//             //     }
//             //     else{
//             //         alert("there has been some error")
//             //         return false;
//             //     }
//             //     }
//             //      catch (error) {
//             //         toast.error(error.response.data.description)
//             //         console.log(error.response);
//             //     }
//             // },
//             // getMessage:  ()=>{
//             //     const store =getState();
//             //     const opts ={
//             //         headers: {
//             //             "Authorization": "Beare" + store.token
//             //         }
//             //     };
//             //     fetch("http://127.0.0.1:5000/deposit",opts)
//             //     .then(resp =>resp.json())
//             //     .then(data => setStore({message:data}))
                
//                 // .catch(error=>console.log("error"),error);

//                 // try{
//                 //     const resp = await
//                 //     // const data = await resp.json()
//                 //     setStore({message:data.message})
//                 //     return data;
//                 // }catch(error){
//                 //     console.log("error loading message from backend", error);
//                 // }
//             // },
//             changeColor:(index,color)=>{
//                 const store=getStore();
//                 const demo=store.demo.map((elm,i)=>{
//                     if (i===index) elm.background=color;
//                     return elm;
//                 });
//                 setStore({demo:demo});
//             }
//         }

//     };
// };

// export default getState;