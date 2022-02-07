import React from 'react';
import LoginForm from './LoginForm'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
const LoginPage = (props) => {
    if (props.auth){
        return <Redirect to="/dashboard" />
    }
    return (
        <div>
         <LoginForm/>
        </div>
    )

}
const mapStateToProps = (state)=>({
    auth : state.users.auth
})
export default connect(mapStateToProps)(LoginPage)