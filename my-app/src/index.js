import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import store from './Redax/redaxStore';
import  {Provider} from 'react-redux';



  ReactDOM.render(
    <BrowserRouter>
      <Provider store = {store}>
        <App/>
       </Provider>
    </BrowserRouter>,
    document.getElementById('root')
    );
    
// entairRender(store.getState());
// store.subscribe(() =>{
//   let state = store.getState();
//   entairRender(state);
// });
    
reportWebVitals();
