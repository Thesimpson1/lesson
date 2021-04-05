import { forEachLeadingCommentRange } from "typescript";
import { followAPI, usersAPI } from "../API/API";


const FOLLOWED = 'FOLLOWED';
const UNFOLLOWED = 'UNFOLLOWED';
const GET_USERS = 'GET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_LOADER = 'SET_LOADER';
const SET_FOLLOW = 'SET_FOLLOW';
let initialState = {
    users: [],
    pageSize : 10,
    totalCount : 100,
    currentPage : 1,
    isFetching : false,
    loadFollow : []
}   

const reducerUsers = ( state = initialState, action) => {
    
    
    switch (action.type) {
        case FOLLOWED : 
            return{
                ...state, 
                users: state.users.map(u =>{
                    if(u.id === action.usersId){
                        return{...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOWED :
            return{
                ...state, 
                users: state.users.map(u =>{
                    if(u.id === action.usersId){
                        return{...u, followed: false }
                    }
                    return u;
                })
            }
        case GET_USERS :
            return{
                ...state,
                users: action.users,
            }
        case SET_CURRENT_PAGE :
            return{
                ...state,
                currentPage: action.currentPage
            }
        case SET_LOADER :
            return{
                ...state,
                isFetching: action.isFetching
            }        
        case SET_FOLLOW :
            return{
                ...state,
                loadFollow: action.loadFollow
                ?[...state.loadFollow, action.userId]
                :state.loadFollow.filter(id => id != action.userId)
            }
                  
        default:
            return state;
        
    }
};
// action creaters return object
export const followed = (usersId) => {
    return {
      type : FOLLOWED,
      usersId: usersId
    };
};
export const unfollowed = (usersId) => {
    return {
      type : UNFOLLOWED, 
      usersId:usersId
    };
};
export const getUsers = (users) => {
    return {
      type : GET_USERS,
      users: users
    };
};    
export const setCurrentPage = (currentPage) => {
        return {
          type : SET_CURRENT_PAGE,
          currentPage: currentPage
    };
};
export const setLoader = (isFetching) => {
    return {
      type : SET_LOADER,
      isFetching : isFetching
    };
};
export const setFollow = (loadFollow, userId) => {
    return {
      type : SET_FOLLOW,
      loadFollow : loadFollow,
      userId : userId
    };
};
// action creaters return function
export const  getUsersThunkContainer= (currentPage, pageSize) => (dispatch) =>{
        dispatch(setLoader(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setLoader(false));
            dispatch(getUsers(data.items));
        }); 
    };
export const pageChangedThunkContainer = (pageNumber, pageSize) => (dispatch) =>{
        dispatch(setCurrentPage(pageNumber));
        dispatch(setLoader(true));
        usersAPI.getUsers(pageNumber, pageSize).then(data => {
            dispatch(setLoader(false)); 
            dispatch(getUsers(data.items));
        }); 
    };
export const followThunkContainer = (userId) => (dispatch) =>{
    dispatch(setFollow(true, userId));
    followAPI.follow(userId).then(response => {
        if(response.data.resultCode == 0){
            dispatch(unfollowed(userId));
            dispatch(setFollow(false, userId));
        };
    }) 
};
export const unfollowThunkContainer = (userId) => (dispatch) =>{
    dispatch(setFollow(true, userId));
    followAPI.unFollow(userId).then(response => {
        if(response.data.resultCode == 0){
            dispatch(followed(userId));
            dispatch(setFollow(false, userId));
        };
    }) 
};

export default reducerUsers;