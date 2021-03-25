import React from 'react';
import SideBar from './SideBar';
import stylist from './SideBarElement.module.css'

const SideBarElement = (props) => {

  let sideBarDisplayOn = props.sideBarDisplay
  .map(x => <SideBar name = {x.name} img = {x.url} key = {x.id} /> )

  return ( 
  <div  className  = {stylist.content}>
    <div>
      {sideBarDisplayOn}
    </div>
  </div>
  )
}
export default SideBarElement;
