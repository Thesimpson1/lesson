import React from 'react';
import stylist from './Status.module.css'

class Status extends React.Component{
 
  state = {
    editMode: false
  }
  activateStatus = () =>{
    this.setState(
      {editMode:true}
    )
  }  
  deactivateStatus = () =>{
    this.setState(
      {editMode:false}
    )
  }  
  render(){
    return  (
      <div className = {stylist.friend}>
      {!this.state.editMode&&
        <div >
        <span onDoubleClick = {this.activateStatus}>{this.props.status}</span>
        </div>
      }
      {this.state.editMode&&
        <div >
        <input type="text" autoFocus = {true} onBlur = {this.deactivateStatus} value = {this.props.status}/>
        </div>
      }  
        
      </div>
    )  
  }
}

export default Status;