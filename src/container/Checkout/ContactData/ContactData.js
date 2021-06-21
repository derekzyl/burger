import React, {Component} from 'react';
import Button from '../../../component/Ui/Button/Button';
import './ContactData.css'
import axios from '../../../AxiosOrder'
import Spinner from '../../../component/Ui/Spinner/Spinner';
import Input from '../../../component/Ui/input/Input'

class ContactData extends Component{
    state ={
        name:'',
        email:'',
        address:{
            street:'',
            postalcode:''
        },
        loading: false,
    }
    orderHandler=(event)=>{
  console.log(this.props.ingredients)
        event.preventDefault()
        this.setState({loading: true})
    const order ={
      price : this.props.price,
      ingredients :this.props.ingredients,
      
      customer:{
        name : 'derek og',
        address:{
          street:'adolor',
          state: 'delta',
          country:'nigeria' },
          email: 'tested@return.com' },
          deliveryMethod: 'fastest'
     }
    axios.post('/orders.json', order)
    .then( response =>{
      this.setState({loading:false})
    } )
    .catch(error => {
      this.setState({loading:false})
      this.props.history.push('/')
    })

    }
   render(){
let form= (
  <form>
           <Input inputtype='input'  type='text' name='name' placeholder='your name '/>
           <Input inputtype='input'   type='number' name ='phone number' placeholder='your number please'/>
           <Input inputtype='input'  type='email' name='email' placeholder='email '/>
           <Input inputtype='input'  type='text' name='street' placeholder='street'/>
           <Input inputtype='input'  type='text' name='postalcode' placeholder='postacode'/>
           <Button clicked={this.orderHandler} btnType='Success' >Order</Button> 
           </form>
);
if(this.state.loading){
  form =<Spinner/>
}

       return(
           <div className='ContactData'>
           <h4>Please Input  your data</h4>
           {form}
<Button clicked={this.orderHandler} btnType='Success' >Order</Button>
           
           
           </div>
       )
   }
    };
        export default ContactData