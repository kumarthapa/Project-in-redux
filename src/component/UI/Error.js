import React from 'react'
import classes from './Error.module.css'
import Card from "./Card"
import Button from "./Button"

const Backdrop=(props)=>{
    return  <div className={classes.backdrop} onClick={props.close}/>
  }
    const ModalOverlay=(props)=>{
        return(
          <Card className={classes.modal}>
          <header className={classes.header}><h2>{props.title}</h2></header>
          <div className={classes.content}>{props.message}</div>
          <footer className={classes.actions}><Button onClick={props.close}>Okay</Button></footer>
        </Card>
        )
      }

const Error = (props) => {
    return (
        <div>
            <Backdrop close={props.close}/>
<ModalOverlay title={props.title} message={props.message} close={props.close}/>
        </div>
    )
}

export default Error
