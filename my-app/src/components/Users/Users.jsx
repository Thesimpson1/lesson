
import React from 'react'
import stylist from './Users.module.css'  
import {NavLink} from 'react-router-dom'
import { followAPI } from '../../API/API'

let Users = (props) =>{
 
  let pageCounts = Math.ceil (props.totalCount/props.pageSize);
  let pageCountsArey = [];
  for(let i = 1; i <= pageCounts; i++){
      pageCountsArey.push(i);
  }
  return <div>
  <div>
    {
  pageCountsArey.map(q => {
         return <span onClick = {(e) => {props.onPageChanged(q);}} className = {props.currentPage === q && stylist.currentPage}>{q}</span>;
       })
     } 
  </div>
     {
       props.users.map(i => <div  key = {i.id} className ={stylist.usersPage}>   
         <div className ={stylist.firstCont}>
           <div>
             <NavLink to = {'/profile/' + i.id}>
                <img src = {i.photos.small != null? i.photos.small:'https://obcas.pl/wp-content/uploads/2020/09/Bez-nazwy-5.png'}></img>
             </NavLink>
           </div>
           <div>
             {i.followed
             ? <button disabled = {props.loadFollow.some(id => id === i.id)} onClick = {() => {
              props.setFollow(true, i.id);
              
              
              followAPI.follow(i.id).then(response => {
                if(response.data.resultCode == 0){
                  props.unfollowed(i.id);
                  props.setFollow(false, i.id);
                  };
              })
              
              }}>Follow</button>
             :<button disabled = {props.loadFollow.some(id => id === i.id)} onClick = {() => {
              props.setFollow(true, i.id);
              
              
              followAPI.unFollow(i.id).then(response => {
                if(response.data.resultCode == 0){
                  props.followed(i.id);
                  props.setFollow(false, i.id)  
                  };
                
              })
               }}>Unfollow</button> }
           </div>
         </div>
         <div className ={stylist.secondCont}>
           <div>
             <b>{i.name}</b>
           </div>
           <div>
             {i.post}
           </div>
         </div>
         <div className ={stylist.thirdCont}>
           <div>
             {'i.location.country'}
           </div>
           <div>
             {'i.location.city'}
           </div>
         </div>
         
         </div>)  
     }  
   </div>
};

export default Users;

  
