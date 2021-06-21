import React from 'react';
import '../BackDrop/BackDrop.css'


const backDrop = (props)=>(
    
        props.show ?
        <div  onClick ={props.clicked} className= 'BackDrop' ></div> : null
    
        ) 

export default backDrop;