
import {Redirect} from "react-router-dom";
import React from 'react'
import {connect} from 'react-redux'

let mapStateToProps = (state) => ({
    authData: state.authData.isAuth
  });
// непосредственно hoc  
export const WidthAuth = (Component) =>{
    // функция для передачи логики в компоненту
    class RedirectWrap extends React.Component{
        render(){
            if(!this.props.authData){
                return <Redirect to = {"/authUser"}/>
              }
              return <Component {...this.props}/>
        }
    }
    // обертка для получения данных о auth из стейта
    const AuthConteiner = connect(mapStateToProps)(RedirectWrap)
    return AuthConteiner
}

  