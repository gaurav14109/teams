import React from 'react'

const TextBox = (props)=>{
    const {type, name, placeHolder, classname, userRef} = props
    return(

        <input type={type} name={name} placeholder={placeHolder} className = {classname} ref = {userRef}/>
    )
}

export default TextBox