import {SUCCESS, ERROR,LOGOUT} from '../consts/const'
import Firebase from '../components/Firebase'
const signUp = (user) => {

    return {type: SUCCESS, data: {token:user.accessToken, user:user}}
}

export const signUpRequest = (email, password) => {
    return async (dispatch) => {
        try {
            const user = await Firebase.doCreateUserWithEmailAndPassword(email, password)
            dispatch(signUp(user))
        } catch (err) {
            console.log(err.message)
            dispatch({type: ERROR, data: err.message})
        }
    }
}

const login = (user) => {

    return {type: SUCCESS, data: {token:user.accessToken, user:user}}
}

export const loginRequest = (email, password) => {
    return  async (dispatch) => {
        try {
            const user =  await Firebase.doSignInWithEmailAndPassword(email, password)  
            dispatch(login(user))
        } catch (err) {
            dispatch({type: ERROR, data: err.message.split(":")[1]})
        }
    }
}

export const logout = ()=>{

    return async (dispatch)=>{

        await Firebase.doSignout()
        dispatch({type:LOGOUT})
        
    }
}


export const checkSignedUser = async ()=>{

    const user = await Firebase.doGetSignedUser()
    return user
    
}
