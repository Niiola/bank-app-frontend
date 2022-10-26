export default class APIService{
    static Transfer(senderaccount,recieveraccount,pin,amount){
        return fetch(`http://127.0.0.1:5000/transfer`, {
            'method':'POST',
            headers:{
              'content-type':"application/json"
            },
            body : JSON.stringify(senderaccount,recieveraccount,pin,amount)   
        })
        .then(resp => resp.json())
    }

    static Deposit(accountNumber,amount){
        
        return fetch(`http://127.0.0.1:5000/deposit`, {
            'method':'POST',
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`,
            //   "Authorization": "Beare" + localStorage.getItem('token'),
              'content-type':"application/json"
            },
            body : JSON.stringify(accountNumber,amount)   
        })
        .then(resp => resp.json())
    }

   

    static AddUser(firstName, lastName, email, password1, password2,pin){
        return fetch(`http://127.0.0.1:5000/signup`, {
            'method':'POST',
            headers:{
              'content-type':"application/json"
            },
            body : JSON.stringify(firstName, lastName, email, password1, password2,pin)
        })
        .then(resp => resp.json())
    }

    
}
