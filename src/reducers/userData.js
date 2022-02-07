import {DATAFETCH,DATAFETCHERROR,DELETE,SUCCESSFULADD} from '../consts/const'
const initialState = {

    data:[],
    error:'', 
    isLoading:true
    //loading to maintain the state change
}

const userData = (state = initialState, action) => {

    switch(action.type){

        case DATAFETCH:
            return {...state, data:action.data, isLoading:false}
        case SUCCESSFULADD:
            return {...state, isLoading:true}
        case DELETE:
            return {...state, isLoading:true}
        case DATAFETCHERROR:
            return {...state, data:[], error:action.message}
        default:
            return state
    }
}


export default userData