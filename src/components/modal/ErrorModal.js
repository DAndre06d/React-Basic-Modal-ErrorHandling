import React from 'react'
import ReactDOM  from 'react-dom'
import Button from '../button/button'
import Card from '../card/Card'
import style from './ErrorModal.module.css'
const Backdrop = (props)=>{
  return <div className={style.backdrop} onClick={props.close}/>
}
const ModalOverlay =(props)=>{
  return <Card className={style.modal}>
  <header className={style.header}><h2>{props.title}</h2></header>
  <div className={style.content}><p>{props.message}</p></div>
  <footer className={style.actions}>
      <Button onClick={props.close}>Okay</Button>
  </footer>

</Card>
}
const ErrorModal = (props) => {
  return (
    <>
        {ReactDOM.createPortal(<Backdrop close={props.close}/>, document.getElementById("back-drop") )}
        {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} close={props.close}/>, document.getElementById("overlay-root") )}
    </>
  )
}

export default ErrorModal