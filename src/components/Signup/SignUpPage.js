import React from 'react'
import SignUpForm from './SignUpForm'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

const SignUpPage = (props) => {
    if (props.auth){
        return <Redirect to="/dashboard" />
    }
    return (
        <div>

            <SignUpForm />

        </div>
    )
}
const mapStateToProps = (state)=>({

    auth :state.users.auth,
    token:state.users.accessToken,

})
export default connect(mapStateToProps)(SignUpPage)