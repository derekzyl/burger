import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import   '../SideDrawer/SideDrawer.css'
import Aux from "../../../hoc/Aux";
import BackDrop from '../../Ui/BackDrop/BackDrop'

const sideDrawer =( props)=> {
 let attachedClasses ='SideDrawers,' ;
     
 
    if (props.open) {
       attachedClasses ='SideDrawers'  }
       
    
    return(
        <Aux> 
        <BackDrop show={props.open} clicked={props.closed}/>

          <div className={attachedClasses}> 
        <div className='logos'>
        <Logo/>
        </div>

        <nav>
        <NavigationItems/>
        </nav>
        </div>
        
        </Aux>

    )
}
export default sideDrawer