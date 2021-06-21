import React from 'react';
import  '../Button/Button.css'

const button =(props)=>
        // eslint-disable-next-line react/jsx-no-duplicate-props
        <div className ='button'>
        <div className = {props.btnType} 
    
             onClick ={props.clicked}> {props.children}</div>
             </div>

export default button
// {[classes.Button, classes[props.btnType]].join('           ')} 