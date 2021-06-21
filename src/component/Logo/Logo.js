import React from 'react'
import Tilt from 'react-tilt';
import '../Logo/Logo.css'
import Imago from '../../assets/images/cyberhubby.png';


const Logo =(props)=>{
    return(

        
        <Tilt className ='logo' options={{ max :25, transition:true, scale:1.2,}}>
         <img src={Imago} alt='mylogo' className='Tilt-inner'/> 
         </Tilt>
        
       
       
        )}
export default Logo;
