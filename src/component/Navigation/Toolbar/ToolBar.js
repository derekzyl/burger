import React from 'react';
import '../Toolbar/ToolBar.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleButton from '../SideDrawer/Menu/ToggleButton';



const toolBar =(props)=>{
    return(
       
<header className='toolBar'>
<div><ToggleButton clicked={props.toggleButtonClicked}/> </div>
        
        <div><Logo /></div>
        
        <nav className='DesktopOnly'><NavigationItems/></nav>
        </header>
        
    )
}
export default toolBar