import React from 'react';
import stylist from './Header.module.css'
import {NavLink} from 'react-router-dom'
import { isPropertySignature } from 'typescript';
const Header = (props) => {
    return( 
      <header className = {stylist.header}>
      <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/800px-EBay_logo.svg.png" />
      <div className = {stylist.logo}>
      {props.isAuth?props.login:
      <NavLink to = {'/authUser'}>Logo</NavLink>
      }
      </div>
       
      </header>
    )
}
export default Header;