import React, {Component} from 'react';
import './Home.css';
import Login from '../../components/Login/Login';
import {Link, Route, Switch} from 'react-router-dom';
import Product from '../Product/Product';

class Home extends Component {
    constructor(props) {
  	    super(props);
  	    
  	    this.state = {
  		    isLogin: false
  		}
  	}

  	getLoginEmail = (email) => {
  		this.setState({isLogin: true});
  	}	

    render() { 
    	return (
	      	<div className="Home">
	            <div className="Navbar">
	            	{this.state.isLogin === true ?
	            		<Link className="active" to="/home">Home</Link> :
	            		<Link className="login-align" to="/login">Login</Link>   
	          		}	
	          	</div>
	          
	          	
	          	<Switch>
	          		<Route path="/home">
	              		<Product />
	            	</Route>  
	           		 	
	            	<Route path="/login">
	              		<Login getLoginEmail = {this.getLoginEmail} />
	            	</Route> 
	          		
	          	</Switch>
	        </div>  
	    );
   }
}

export default Home;
