import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
const IsAuthenticated = ({component:Component, auth ,...rest})=>{

    return(
        
        <Route {...rest} render={(props)=>(
            
            auth ? <Component {...props}/>:<Redirect to="/login"/>
            //routes have its own props
    )}/>
    )

}
const mapStateToProps = (state)=>({

    auth:state.users.auth,

})
export default connect(mapStateToProps)(IsAuthenticated)