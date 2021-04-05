import React from 'react'
import Profile from './Profile';
import {connect} from 'react-redux'
import { getProfileThunkContainer } from '../../Redax/reducerProfile';
import {withRouter} from "react-router-dom";
import { WidthAuth } from '../../HOC/AuthHOC';
import { compose } from 'redux';

class ProfileAPIConteiner extends React.Component{
  componentDidMount = () =>{
    let userId = this.props.match.params.id;
    if(!userId){
      userId = 15568;
    }
    this.props.getProfileThunkContainer(userId);
    }
  render = () =>{
    return (
    <Profile {...this.props} userId = {this.props.match.params.id} profile = {this.props.profile}/>
    )
  }
};

let mapStateToProps = (state) => ({
    profile: state.allDataProfile.profile,
});

const ProfileConteiner = compose(
  connect(mapStateToProps, {getProfileThunkContainer}),
  withRouter,
  WidthAuth
)(ProfileAPIConteiner);

export default ProfileConteiner;