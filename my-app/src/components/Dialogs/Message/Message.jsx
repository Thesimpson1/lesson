import React from 'react';
import stylist from './Message.module.css'

const Message = (props) => {
  return (
    <div className ={stylist.messeg}>
      {props.message}
      
    </div>
  
  )
}

export default Message;