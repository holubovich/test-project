import React from 'react'
import classes from './Input.css'

function isInvalid({valid, touched, shouldValidate}){
    return !valid && shouldValidate && touched
}

const Input = props =>{
    const inputType = props.type || 'text'
    const cls = [classes.Input]
    const htmlFor= '${inputType}-${Math.random()}'
    //
    //if (true){
    //    cls.push(classes.invalid)
    //}
    if(isInvalid(props)){
        cls.push (classes.invalid)
    }

    return(
        <div className={cls.join(' ')}>
           <label htmlFor="">{props.label}</label>
            <input
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
             />

            {
                isInvalid(props)
                ?<span>{props.errorMessage || 'Enter the correct value'}</span>: null
            }

        </div>
    )
}

export default Input