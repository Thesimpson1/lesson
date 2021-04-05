import { headerApi } from "../API/API";

const GET_AUTH_USER_DATE = 'GET_AUTH_USER_DATE';

let initialState = {
    isFetching : false,
    id: null,
    login: null,
    email: null,
    isAuth: false
}   

const reducerAuthUser = ( state = initialState, action) => {
    
    switch (action.type) {
        case GET_AUTH_USER_DATE : 
            return{
                ...state, 
                ...action.authData,
                isAuth: true
            }
        default:
            return state;
    };
};
export const getAuthDate = (authData) => {
    return {
      type : GET_AUTH_USER_DATE,
      authData
    };
};
export const getAuthThunkContainer = () => (dispatch) =>{
    headerApi.getAuth().then(response => {
        if(response.data.resultCode === 0){
            
            dispatch(getAuthDate(response.data.data)); 
        }
      }); 
};

export default reducerAuthUser;