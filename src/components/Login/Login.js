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
							<Col><input type="email" onChange={handleChange} name="email" id="email"  
						    	placeholder="Enter your email address" required="required" /></Col>
						</Row>
					</FormGroup>

	        		<FormGroup>
	        			<Row>
	        				<Col><input type="password" onChange={handleChange} name="password" id="password" 
	        					placeholder="Enter your password."  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required="required"/></Col>
	        			</Row>
	        			<FormText>{errorMessage}</FormText>
				
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