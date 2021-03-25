import React from 'react';
import stylist from './SideBar.module.css'
const SideBar = (props) => {
    return  (
    <div className = {stylist.item}>

      <div>{props.name}</div>
      <div><img src ={props.img}/></div>

    </div>)  
}

export default SideBar;