import React from 'react';
import Popup from "reactjs-popup";
//import './AddProduct.css'
import { Container, Row, Col } from 'react-bootstrap';
import { Form, FormGroup, Label, Input, FormText, Button  } from 'reactstrap';



const EditProduct = (props) =>  {

	return (
	  <>
	 	<Popup modal trigger={<td><button>Edit</button></td>}>
	 	  	<Form>	
	   			<Container>
	   				<h3 className="h3 text-center mb-4">Edit Product</h3>
					<hr/>
					<FormGroup>
	   			   		<Row>
							<Col><input type="text" name="product_name" value={props.editValue.name} 
								onChange={props.handleChange}  
								ref={props.product_name} 
								placeholder="Enter the Product name" />
							</Col>
						</Row>
					</FormGroup>

	        		<FormGroup>
	        			<Row>
	        				<Col><input type="text"  ref={props.product_rate} 
	        					placeholder="Enter the rate."/>
	        				</Col>
	        			</Row>
					</FormGroup>

					<FormGroup>
	        			<Row>
	        				<Col><input type="number" value={props.editValue.quantity} ref={props.product_quantity} placeholder="Enter the quantity."/></Col>
	        			</Row>
					</FormGroup>
					<Button onClick={props.editProductHandler}>UPDATE</Button>
				</Container>
			</Form>
          </Popup> 
	  </>
	);
}

export default EditProduct;