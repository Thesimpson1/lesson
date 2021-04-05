import React from 'react'
import {connect} from 'react-redux'
import { compose } from 'redux'
import { WidthAuth } from '../../HOC/AuthHOC'
import {addNewPostMessageAction, addNewLetterMessageAction} from '../../Redax/reducerDialogs'
import Dialogs from './Dialogs'

let mapStateToProps = (state) =>{
  return {
    dialogElem: state.allMessage.dataName,
    messageElem: state.allMessage.dataMessage,
    valueTextArey: state.allMessage.areyMessage,
  }
};
let mapDispathToProps = (dispatch) =>{
  return{
    addPostMessage: () =>{
      dispatch(addNewPostMessageAction());
    },
    addLetterDispath: (text) =>{
      dispatch(addNewLetterMessageAction(text));
    }
  }
}
const DialogsContainer = compose(
  connect(mapStateToProps, mapDispathToProps),
  WidthAuth
)(Dialogs);
export default DialogsContainer;