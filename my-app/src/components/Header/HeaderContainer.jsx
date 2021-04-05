import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import { getAuthThunkContainer } from '../../Redax/reducerAuthUser';


class HeaderAPIContainer extends React.Component{
  componentDidMount = () => {
    this.props.getAuthThunkContainer();
  } 
  render = ()=>{
    return <Header {...this.props} />
  }
};

let mapStateToProps = (state) =>({
  isAuth: state.authData.isAuth,
  login: state.authData.login
})
const HeaderContainer = connect(mapStateToProps, {getAuthThunkContainer})(HeaderAPIContainer);
export default HeaderContainer;