import React from 'react';
import stylist from './Dialogitem.module.css'
import {NavLink} from 'react-router-dom'
const Dialogitem = (props) => {
  return (
    <div className ={stylist.dialog}>
      <NavLink to = {'/dialogs/' + props.id} > <img src = {props.url}/>{props.name}</NavLink>
    </div>)
  }  

export default Dialogitem;