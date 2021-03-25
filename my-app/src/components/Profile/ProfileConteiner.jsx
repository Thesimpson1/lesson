
import React from 'react'
import Profile from './Profile';
import {connect} from 'react-redux'
import { getProfile } from '../../Redax/reducerProfile';
import {withRouter} from "react-router-dom";
import { profileApi } from '../../API/API';

class ProfileAPIConteiner extends React.Component{
  
  componentDidMount = () =>{
    console.log(this.props.match.params.id);
    let userId = this.props.match.params.id;
    if(!userId){
      userId = 2;
    }
      profileApi.getProfileData(userId).then(response => {
        
        this.props.getProfile(response.data);
      }); 
    }
  render = () =>{
    return (
    <Profile {...this.props} profile = {this.props.profile}/>
    )
  }
}
let ProfileWithRouterAPIConteiner = withRouter(ProfileAPIConteiner);

let mapStateToProps = (state) => ({
    profile: state.allDataProfile.profile
});

const ProfileConteiner = connect(mapStateToProps, {getProfile}) (ProfileWithRouterAPIConteiner);

export default ProfileConteiner;