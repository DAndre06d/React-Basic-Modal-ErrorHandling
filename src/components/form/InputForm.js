import React from 'react'

const InputForm = (props) => {
  return (
    <div className={props.inputGroup}>
        <p>
            <label htmlFor={props.name}>{props.name}</label>
            <input id={props.name} className={props.inputStyle} />
        </p>
    </div>
  )
}

export default InputForm