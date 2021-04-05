import React from 'react'
import Preload from '../Preload/Preload'
import Status from '../Status/Status';
import stylist from './ProfileInfo.module.css'
const ProfileInfo = (props) => {
  debugger;
  if(!props.profile){
    return <Preload/>
  };
    return  (
    <div>
      <div>
        {!props.userId?<img src = {'https://www.pngkit.com/png/detail/84-841686_thinking-man-png-pngimg-trademark.png'} alt="Profile" className = {stylist.img}/>
        :<img src = {props.profile.photos.large?props.profile.photos.large:'https://obcas.pl/wp-content/uploads/2020/09/Bez-nazwy-5.png'} alt="Profile"/>
        }     
        <div>
          <Status status = 'Hello'/>
        </div>
        <div style = {{backgroundColor: 'red', maxWidth: '150px'}}>
          {props.profile.aboutMe}
          {props.profile.fullName}
        </div>
      </div>
    </div>)  
};
export default ProfileInfo;