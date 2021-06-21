import React from 'react';
import '../NavigationItem/NavigationItem.css'
import {NavLink} from 'react-router-dom'

const navigationItem =(props)=>{
    return (
        <ol>
               <li className='NavigationItem'> < NavLink
        to= {props.link}
        activeClassName='active'
        exact={props.exact}>
             { props.children}</NavLink></li>
             </ol>
 
        
    )
}
export default navigationItem