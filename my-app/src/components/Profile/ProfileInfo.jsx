import React from 'react'
import Preload from '../Preload/Preload'
import stylist from './ProfileInfo.module.css'
const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preload/>
  };
    return  (
    <div>
      <div>   
        <img src = "https://thewallpaper.co/wp-content/uploads/2020/08/countryside-widescreen-high-definition-wallpaper-for-desktop-background-download-countryside-photos-free-download-wallpaper-widescreen-colorful-1920x1200-1.jpg" className = {stylist.img}/>
      </div>
      <div>
      
        <img src = {props.profile.photos.large?props.profile.photos.large:'https://obcas.pl/wp-content/uploads/2020/09/Bez-nazwy-5.png'} alt="Profile"/>

        <div style = {{backgroundColor: 'red', maxWidth: '150px'}}>
          {props.profile.aboutMe}
          {props.profile.fullName}
        </div>
      </div>
    </div>)  
};
export default ProfileInfo;