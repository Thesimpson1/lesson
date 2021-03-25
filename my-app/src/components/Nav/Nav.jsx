import React from 'react'
import stylist from './Nav.module.css'
import {NavLink} from 'react-router-dom'


import NavSideBarConteiner from './NavSideBarConteiner'
const Nav = (props) => {
  
    return <nav className = {`${stylist.item} ${stylist.nav}`}>
      <div className = {stylist.flexContainer}>
        <div>
          <NavLink to = "/profile" activeClassName = {stylist.activeLink}>Profile</NavLink>
        </div>
        <div>
          <NavLink to = "/dialogs" activeClassName = {stylist.activeLink}>Messeges</NavLink>
        </div>
        <div>
          <NavLink to = "/users" activeClassName = {stylist.activeLink}>Users</NavLink>
        </div>
        
        <div>
          <NavLink to = "/news" activeClassName = {stylist.activeLink}>News</NavLink>
        </div>
        <div>
          <NavLink to = "/music" activeClassName = {stylist.activeLink}>Music</NavLink>
        </div>
        <div>
          <NavLink to = "/settings" activeClassName = {stylist.activeLink}>Settings</NavLink>
        </div>
        <div>
          <div>
            <div className = {stylist.friend}>
              <NavLink to = "/friends" activeClassName = {`${stylist.activeLink} ${stylist.friend}`}>Friends</NavLink>
            </div>
            <div className = {stylist.conteiner}>
              
             <NavSideBarConteiner/>
              
            </div>
          </div>
        </div>
      </div>
    </nav>
}
export default Nav;