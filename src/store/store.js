import { applyMiddleware,createStore} from "redux";
import reducers from '../reducers/reducers' 
import thunk from 'redux-thunk'

const logger = ({dispatch, getstate})=>(next)=>(action)=>{

    console.log(action.type)
    next(action)
}
const store= createStore(reducers, applyMiddleware(logger,thunk))
export default store