import React, {useRef, useState} from 'react';
import './Login.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Form, FormGroup, Label, Input, FormText, Button  } from 'reactstrap';
import {Redirect} from 'react-router-dom';


const Login = (props) =>  {

	const [email, setEmail] = useState('')
	const [password, setPassword ] = useState('')
    const [redirect, setRedirect] = useState(false)	
	const [error, setError ] = useState(false)
	
	const checkLogin = (e) => {
		e.preventDefault();
		const userEmail = 'Clarion@clarion.com';
		const userPassword = 'Clarion123';		
		if(userEmail === email && userPassword === password ) {
			//localStorage.setItem("token", id)
			props.getLoginEmail(email);
			setRedirect(true);

		} else {
			setError(true);
		}
	}  

	const handleChange = (event) => {
		const target = event.target;
		const field = target.name;
		const value = target.value;
		switch(field) {
			case 'email':
				setEmail(value);
			break;

			case 'password':
				setPassword(value);
			break;
			
			default:
			break;	
		}
	}	

	const errorMessage = error ? 'Error to Login' : ''; 
	
	return (
		<div className="Login">
			<Form onSubmit={checkLogin}>
	   			<Container>
	   				<h1 className="h1 login-text text-center mb-4">Login</h1>
					<hr/>
					<FormGroup>
	   			   		<Row>
							<Col><input type="text" onChange={handleChange} name="email" id="email"  
						    	placeholder="Enter your email address" /></Col>
						</Row>
					</FormGroup>

	        		<FormGroup>
	        			<Row>
	        				<Col><input type="password" onChange={handleChange} name="password" id="password" 
	        					placeholder="Enter your password."/></Col>
	        			</Row>
					</FormGroup>
					<Button>Login</Button>
				</Container>
			</Form>
		
			{redirect ? 
				<Redirect  to="/home" />
				: ''
			}
		</div>
	);
}

export default Login;