import React from 'react';
import stylist from './Post.module.css'

const Post = (props) => {

  return( 
  <div className  = {`${stylist.content} ${stylist.contentI}`}>
    <img src = "https://pbs.twimg.com/media/EcZzOJbXgAEpndc.jpg" />
    <div>
       { props.messages }
    </div>
    <div>
      <span>Like {props.likeCount}</span>
    </div>  
  </div>
  )
}
export default Post;