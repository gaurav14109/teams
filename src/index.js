import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store/store'
import {checkSignedUser} from './actions/user'
import {SUCCESS} from './consts/const'
import {fetchData} from './actions/userData'

store.dispatch(fetchData())
const checkUserStatus = async ()=>{
try{
  const user = await checkSignedUser()
  if (user){

      store.dispatch({type:SUCCESS, data:{token:user.accessToken, user:user}})
      
  }
  }catch(err){
    console.log(err,"Kindly sinup first");
  }
}
if (localStorage.getItem('LoggedIn') === '1'){
checkUserStatus()
}
ReactDOM.render(
    <React.StrictMode>
        <Router>
            {/* passing only a single instance  */}
            <Provider store={store}>
            {/* <FirebaseContext.Provider value={new Firebase()}> */}
                {/* Creating a single instance of firebase */}
                {/* <FirebaseContext.consumer>
      {
        firebase=>{

          return ()
        }
      }
      */
                }
               
                    <App/>
                
            {/* </FirebaseContext.Provider> */}
            </Provider>
        </Router>
    </React.StrictMode>,
    document.getElementById(
        'root'
    )
);