import React from 'react'

import SideBar from './SideBar/SideBar'
import SideBarElement from './SideBar/SideBarElement'
import {connect} from 'react-redux'

let mapStateToProps = (state) =>{
  return {
    sideBarDisplay: state.dataSideBar
  }
}
let mapDispatchToProps = (dispatch) =>{
  return{
    
  }
}
const NavSideBarConteiner = connect(mapStateToProps, mapDispatchToProps) (SideBarElement);

export default NavSideBarConteiner;