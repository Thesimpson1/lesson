
import {connect} from 'react-redux';
import {  followThunkContainer, getUsersThunkContainer, pageChangedThunkContainer,  unfollowThunkContainer } from '../../Redax/reducerUsers';
import Users from './Users';
import React from 'react';
import Preload from '../Preload/Preload';


class UsersAPIConteiner extends React.Component{
  
  componentDidMount = () => { 
    if(this.props.users.length === 0){
      this.props.getUsersThunkContainer(this.props.currentPage, this.props.pageSize);
    };
  }
  onPageChanged = (pageNumber) => {
    this.props.pageChangedThunkContainer(pageNumber, this.props.pageSize);
  } 
  render() {
    return <>
      {this.props.isFetching && <Preload/>}
      <Users users = {this.props.users}
      pageSize = {this.props.pageSize}
      totalCount = {this.props.totalCount}
      currentPage = {this.props.currentPage}
      onPageChanged = {this.onPageChanged}
      loadFollow = {this.props.loadFollow}
      unfollowThunkContainer = {this.props.unfollowThunkContainer}
      followThunkContainer = {this.props.followThunkContainer}
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
  getUsersThunkContainer,
  pageChangedThunkContainer,
  followThunkContainer,
  unfollowThunkContainer
}) (UsersAPIConteiner);
export default UsersContainer;