import React from 'react'
import Card from '../card/Card'
import style from './userList.module.css'
const UserList = (props) => {
  return (
    <Card className={style.users}>
        <ul>
            {props.users.map((data)=> <li key={data.id}> {`Name: ${data.username}, Age: ${data.age} ${data.id}`}</li>)}
        </ul>
    </Card>
  )
}

export default UserList