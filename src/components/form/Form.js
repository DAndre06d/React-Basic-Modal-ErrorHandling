import React, { useState, useRef } from 'react'
import Card from '../card/Card'
import Button from '../button/button'
import style from './form.module.css'
import ErrorModal from '../modal/ErrorModal'
// import InputForm from './InputForm'

const Form = (props) => {
  const nameInpuRef =useRef ()
  const ageInpuRef =useRef ()
  const [userInput, setUserInput] = useState({
    username: "",
    age: "", 
    id: null
  })
  const [error, setError] = useState()
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(nameInpuRef.current.value, ageInpuRef.current.value)
        if(userInput.username.trim().length === 0 || userInput.age.trim().length ===0){
          setError({
            title: "invalid Username",
            message: "Please Enter a Valid Username and Age"
          })
          return
          
        }
        if(+userInput.age <= 1  ){
          setError({
            title: "invalid Age",
            message: "Please Enter a Valid Age (1+)"
          })
          return
        }
        props.onAdd(userInput)
        setUserInput({
          username: "",
          age: "", 
        })   
    }
    const handleChange =(e)=>{
      const {name, value} = e.target
      const randomId = Math.random().toString();
      // console.log(id, value)
      setUserInput((prevValue)=>{
        return{
          ...prevValue, [name]: value, id: randomId
        }
      })
    }
    const erroHandler = () =>{
      setError(null)
    }
      return (
      <div>
       {error && <ErrorModal title={error.title} message={error.message} close={erroHandler}/>}
        <Card className={style.input}>
        <form onSubmit={handleSubmit}>
            <label htmlFor='username'>Username</label>
            <input onChange={handleChange} id='username' type='text' value={userInput.username} ref={nameInpuRef} name='username'/>
            <label htmlFor='age'>Age in years</label>
            <input onChange={handleChange} id='age' type='number' value={userInput.age} ref={ageInpuRef} name='age'/>
            <Button type={"submit"}>Add user</Button>
        </form>
        </Card>
      </div>
  )
}

export default Form