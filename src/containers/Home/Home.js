import React, {Component} from 'react';
import './Home.css';
import Login from '../../components/Login/Login';
import {Link, Route, Switch} from 'react-router-dom';
import Product from '../Product/Product';

class Home extends Component {
    constructor(props) {
  	    super(props);
  	    
  	    this.state = {
  		    isLogin: false,
  		    authEmail: ''
  		}
  	}

  	getLoginEmail = (email) => {
  		var emailArray = email.split("@");  
  		let name = emailArray[0];
  		this.setState({isLogin: true, authEmail:name });
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
	          
	          	{this.state.isLogin === true ? 
	          		 	<div>
	          				<p className="home-email">Hello {this.state.authEmail} </p>
	          			</div> : ''
	          	} 
	          	<Switch>
	          		{this.state.isLogin === true ?
	          			<Route path="/home" exact>
	              			<Product />
	            		</Route> : '' 
	           		} 	
	            	
	            	<Route path="/login">
	              		<Login getLoginEmail = {this.getLoginEmail} />
	            	</Route> 
	          		
	          	</Switch>
	        </div>  
	    );
   }
}

export default Home;
