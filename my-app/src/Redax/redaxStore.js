import { combineReducers, createStore } from "redux";
import reducerAuthUser from "./reducerAuthUser";
import reducerDialogs from "./reducerDialogs";
import reducerProfile from "./reducerProfile";
import reducerSideBar from "./reducerSideBar";
import reducerUsers from "./reducerUsers";



let reducers = combineReducers({
   allMessage: reducerDialogs,
   allDataProfile: reducerProfile,
   dataSideBar: reducerSideBar,
   dataUsers: reducerUsers,
   authData: reducerAuthUser
});

let store = createStore(reducers);
window.store = store;
export default store;