import React from 'react';
const FirebaseContext = React.createContext(null)
//initialy null context provider and consumer
export const withFirebase = Component=>props=>{

    <FirebaseContext.Consumer>

        {firebase=> <Component {...props} firebase={firebase}/>}
        {/* Returing a higherorder with firebase and props */}

    </FirebaseContext.Consumer>
}
export default FirebaseContext

//createContext provides firebase instance provider and consumer

/**
 *Firebase context provide single instace of firebase for entire application 
 * 
 */