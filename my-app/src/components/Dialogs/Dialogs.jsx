import React from 'react'
import stylist from './Dialogs.module.css'  
import Dialogitem from './Dialogitem/Dialogitem'
import Message from './Message/Message'
const Dialogs = (props) => {
       
//display dialogs and messages    
  let dialogElement = props.dialogElem
    .map( d => <Dialogitem name = {d.name} id = {d.id} url = {d.url} key = {d.id}/>)
  let messageElement = props.messageElem
    .map( m => <Message message = {m.message} key = {m.id}/>)

  //get element by ref start
  let newText = React.createRef();
  
  //display new words in textArey 
  let addLetter = () =>{
    let text = newText.current.value;
    props.addLetterDispath(text);
  }
    return  (
      <div className ={stylist.dialogsPage}>
        <div className ={stylist.dialogsColum}>
          <div>
            DIALOGS
          </div>
          {dialogElement}
        </div>
        <div className ={stylist.messagesColum}>
          {messageElement}
          <textarea onChange = {addLetter} ref = {newText} value = {props.value}/>
          <button onClick = {props.addPostMessage}>Add message</button>
        </div>
      </div>)  
}
export default Dialogs;