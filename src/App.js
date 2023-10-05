import React, { useState } from 'react';
import Form from './components/form/Form';
import UserList from './components/userLst/UserList';

function App() {
  const[user, setUser] = useState([])

  const onAdd = (user) =>{
    setUser((prevValue)=>{
      return [...prevValue, user]
      
    })
  }
  return (
    <>
      <Form onAdd={onAdd} />
      <UserList users={user}/>
    </>
  );
}

export default App;
