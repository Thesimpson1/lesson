import { profileApi } from "../API/API";
const ADD_NEW_POST = 'ADD-NEW-POST';
const ADD_NEW_LETTER = 'ADD-NEW-LETTER';
const GET_PROFILE = 'GET_PROFILE'; 
let initState = {
    dataArey: 'dgvdfv',
    dataPost: [
        { id: 1, messages : "Hello",      likeCount: 5  },
        { id: 2, messages : "How are you", likeCount: 4 },
        { id: 3, messages : "I am fine", likeCount: 6   },
        { id: 4, messages : "I love react", likeCount: 9}
    ],
    profile: null
}

const reducerProfile = ( state = initState, action) => {
    switch (action.type) {
        case ADD_NEW_POST :
            return{    
                ...state, 
                dataPost: [...state.dataPost, { id: 5, messages: state.dataArey, likeCount: 0 } ], 
                dataArey: ''
            }    
        
        case ADD_NEW_LETTER :
            return {
                ...state,
                dataArey: action.newLetter
            }
        case GET_PROFILE :
            return{
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
};
export const addNewPostAction = () => {
    return {
      type : ADD_NEW_POST
    };
};
export const addNewLetterAction = (text) => {
    return {
      type : ADD_NEW_LETTER, 
      newLetter : text
    };   
};
export const getProfile = (profile) => {
    return {
      type : GET_PROFILE, 
      profile
    };   
};
export const getProfileThunkContainer = (userId) => (dispatch) =>{
    profileApi.getProfileData(userId).then(response => {
        dispatch(getProfile(response.data));
      }); 
};
export default reducerProfile;