import React from 'react';
import '../Menu/ToggleButton.css'


const toggleButton =(props)=>{
    return(
<button className='DrawerToggles' onClick={props.clicked} >Menu
<div className='  divi'></div>
<div className=' divi'></div>
<div className=' divi'></div>
</button>

    )  
}
export default  toggleButton;