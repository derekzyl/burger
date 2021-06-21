import React,{Component} from 'react';
import Aux from '../Aux';
import '../layout/Layout.css';
import ToolBar from '../../component/Navigation/Toolbar/ToolBar';
import SideDrawer from '../../component/Navigation/SideDrawer/SideDrawer';

class Layout extends Component{ 

    state={
            showSideDrawer:false};


    SideDrawerClosedHandler=()=>{
        this.setState({showSideDrawer: false});
      
        }

        
        sideDrawerToggleHandler=()=>{
            this.setState((prevState) =>{
                return{showSideDrawer:!prevState.showSideDrawer}
            })
           
        }
    
        z
          


    render()  {
    return(
        <Aux>
        <ToolBar toggleButtonClicked={this.sideDrawerToggleHandler}/> 
        <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerClosedHandler}/>

        <main className='content'> 
        {this.props.children}</main>
        
        </Aux>
    )
};
}

export default Layout