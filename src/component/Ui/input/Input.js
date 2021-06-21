import React from 'react'
import '../input/Input.css'
 
const input = (props) => {
let inputElement = null ;
switch(props.inputtype){
    case("input"):
    inputElement =<input className ='inputElement' {...props} />;
    break;
    case ('textarea') :
        inputElement = <textarea className ='inputElement' {...props}/>;
        break;
        default:
            inputElement= <input className ='inputElement' {...props}/>
}


return(
<div className= 'Input'>
<label className= 'Label'>{props.label}</label>
{inputElement}
</div>
)
};
export default input