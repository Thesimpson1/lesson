
import {connect} from 'react-redux';
import { followed, getUsers, setCurrentPage, setFollow, setLoader, unfollowed } from '../../Redax/reducerUsers';
import Users from './Users';
import React from 'react';
import Preload from '../Preload/Preload';
import {usersAPI } from '../../API/API';


class UsersAPIConteiner extends React.Component{

  componentDidMount = () => { 
    if(this.props.users.length === 0){
      this.props.setLoader(true);
      usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {

        this.props.setLoader(false);
        
        this.props.getUsers(data.items);
      }); 
    };
  }
  onPageChanged = (pageNumber) => {
  this.props.setCurrentPage(pageNumber);
  this.props.setLoader(true);
  usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
    this.props.setLoader(false); 
        this.props.getUsers(data.items);
      }); 
  } 
  render() {
    return <>
      {this.props.isFetching && <Preload/>}
      <Users users = {this.props.users}
      pageSize = {this.props.pageSize}
      totalCount = {this.props.totalCount}
      currentPage = {this.props.currentPage}
      onPageChanged = {this.onPageChanged}
      unfollowed = {this.props.unfollowed}
      followed = {this.props.followed}
      setFollow = {this.props.setFollow}
      loadFollow = {this.props.loadFollow}
    />
    </>
  }
};
  
let mapStateToProps = (state) =>{
  return {
    users: state.dataUsers.users,
    pageSize : state.dataUsers.pageSize,
    totalCount : state.dataUsers.totalCount,
    currentPage : state.dataUsers.currentPage, 
    isFetching : state.dataUsers.isFetching,
    loadFollow : state.dataUsers.loadFollow
  }
};

const UsersContainer = connect(mapStateToProps, {
  followed,
  unfollowed,
  getUsers,
  setCurrentPage,
  setLoader,
  setFollow
}) (UsersAPIConteiner);
export default UsersContainer;