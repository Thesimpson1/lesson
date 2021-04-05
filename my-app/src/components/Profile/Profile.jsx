import React from 'react';
import MyPostContainer from './MyPosts/MyPostsСontainer';
import stylist from './Profile.module.css'
import ProfileInfo from './ProfileInfo';
const Profile = (props) => {

    return  (
    <div className = {stylist.content}>
      <ProfileInfo userId = {props.userId} profile = {props.profile}/>
      <MyPostContainer/>
    </div>)  
}

export default Profile;