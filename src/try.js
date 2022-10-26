import React, {useState, useEffect} from "react";
import UserList from "./Components/UserList";


function App() {
    const [datas, setData] = useState([]);
    // const {user, setUser} = useState(null);


    useEffect(()=> {
      fetch("http://127.0.0.1:5000/allusers",  {
        'method':'GET',
        headers:{
          'content-type':"application/json"
        }
      })
      .then(res => res.json())
      .then(res => setData(res))
      .catch(error => console.log(error))
    }, [])

    // const handleSubmit = (data)=> {
    //   setUser(data)
    // }

  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>trying</h1> */}
        <UserList datas = {datas}/>
        {/* <NewUser data = {user}/> */}
      </header>
    </div>
  );
}

export default App;
