import {SUCCESS, ERROR,LOGOUT} from '../consts/const'
const initState = {
    accessToken :'',
    auth:false,
    user:'',
    error:''
}

const users = (state=initState, action) => {

    switch(action.type){


        case SUCCESS:
        localStorage.setItem('LoggedIn',1)
        return {...state, accessToken:action.data.token, auth:true, user:action.data.user, error:''}
        case LOGOUT:
            localStorage.removeItem('LoggedIn')
            return {...state, auth:false,accessToken:'', user:''}
        case ERROR: 
            localStorage.removeItem('LoggedIn')
            return {...state, error:action.data, auth:false}
        default:
            return state

    }
}

export default users

//redux for creating necessary store objects
//react-redux to connect to store