import React from 'react';
import stylist from './MyPosts.module.css'
import Post from './Post/Post';
const MyPosts = (props) => {
// display posts
  let postsElement= props.postsElem 
  .map(p => <Post messages={p.messages} likeCount={p.likeCount} key = {p.id}/>)
//get element by ref start
  let newPost = React.createRef();

//wraper functions add letter and add post
  let changeValue = () =>{
    let text = newPost.current.value;
    props.addNewLetter(text);
  }
  let addPostNow = () =>{  
    props.addPost();
  } 

  return (
    <div className={stylist.content}>
      <label>My posts<br></br></label>
      <textarea onChange = {changeValue} ref = {newPost}  value = {props.value}/>
      <div onClick={addPostNow}><span>add post</span></div>
      <div>
        New post
      </div>
      <div>
        {postsElement}
      </div>
    </div>
  )
}
export default MyPosts;