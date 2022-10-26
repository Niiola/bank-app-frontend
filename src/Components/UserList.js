import React from 'react'

function UserList(props) {
  return (
    <div>
        {props.datas && props.datas.map(data => {
            return (
              <div key= {data.User_Id}>
                  <h2>{data.accountNumber}</h2>
                  <h2>{data.email}</h2>
                  <h2>{data.user}</h2>
                  <h2>{data.Fname}</h2>

              </div>
            )
        })}
    </div>
  )
}

export default UserList