import React from 'react'

const Button = (props)=>{
    const {type, value, classname ,submitButton} = props
    return(

        <input type={type} value={value}  className = {classname} onClick={submitButton} />
    )
}

export default Button