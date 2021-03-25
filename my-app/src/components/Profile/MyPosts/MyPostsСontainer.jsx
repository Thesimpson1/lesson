import { addNewPostAction, addNewLetterAction } from '../../../Redax/reducerProfile'
import MyPosts from './MyPosts'
import {connect} from 'react-redux'


let mapStateToProps = (state) =>{
  
  return {
    postsElem: state.allDataProfile.dataPost,
    value: state.allDataProfile.dataArey
  };
};

let mapDispathToProps = (dispatch) =>{
  
  return {
    addPost: () =>{
      dispatch(addNewPostAction());
    },
    addNewLetter: (text) =>{
      dispatch(addNewLetterAction(text));
    }
  }
}

const MyPostContainer = connect(mapStateToProps, mapDispathToProps) (MyPosts);

export default MyPostContainer;