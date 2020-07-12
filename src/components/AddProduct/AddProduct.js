import React from 'react';
import Popup from "reactjs-popup";
import './AddProduct.css'
import { Container, Row, Col } from 'react-bootstrap';
import { Form, FormGroup, Label, Input, FormText, Button  } from 'reactstrap';



const AddProduct = (props) =>  {

	return (
	  <>
	 	<Popup modal trigger={<td><button>ADD</button></td>}>
	 	  	<Form>	
	   			<Container>
	   				<h3 className="h3 text-center mb-4">Add Product</h3>
					<hr/>
					<FormGroup>
	   			   		<Row>
							<Col><input type="text"  name="product_name" id="product_name"  
						    	ref={props.product_name} placeholder="Enter the Product name" /></Col>
						</Row>
					</FormGroup>

	        		<FormGroup>
	        			<Row>
	        				<Col><input type="text"  name="product_rate" id="product_rate" 
	        					ref={props.product_rate} placeholder="Enter the rate."/></Col>
	        			</Row>
					</FormGroup>

					<FormGroup>
	        			<Row>
	        				<Col><input type="number"  name="product_quantity" id="product_quantity" 
	        					ref={props.product_quantity} placeholder="Enter the quantity."/></Col>
	        			</Row>
					</FormGroup>
					<Button onClick={props.addProductHandler}>ADD</Button>
				</Container>
			</Form>
          </Popup> 
	  </>
	);
}

export default AddProduct;