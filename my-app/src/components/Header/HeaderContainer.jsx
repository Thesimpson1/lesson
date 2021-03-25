import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import * as axios from 'axios';
import { getAuthDate } from '../../Redax/reducerAuthUser';
class HeaderAPIContainer extends React.Component{
  componentDidMount = () => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials:true}).then(response => {
      
    if(response.data.resultCode === 0){
      this.props.getAuthDate(response.data.data);
        
      }
     
    }); 
  } 
  render = ()=>{
    return <Header {...this.props} />
  }
};

let mapStateToProps = (state) =>({
  isAuth: state.authData.isAuth,
  login: state.authData.login
})
const HeaderContainer = connect(mapStateToProps, {getAuthDate})(HeaderAPIContainer);
export default HeaderContainer;