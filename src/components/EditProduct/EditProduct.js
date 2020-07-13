import React, {useState} from 'react';
import Popup from "reactjs-popup";
//import './AddProduct.css'
import { Modal, Container, Row, Col } from 'react-bootstrap';
import { Form, FormGroup, Label, Input, FormText, Button  } from 'reactstrap';



const EditProduct = (props) =>  {

	const [show, setShow] = useState(false)

	const handleShow = () => setShow(true);

	const handleClose = () => setShow(false);


	return (
	  <>
	  	<td><button onClick={handleShow}>
        EDIT
      	</button></td>
	 	{/*<Popup modal trigger={<td><button>Edit</button></td>}>*/}
	 	<Modal show={show} onHide={handleClose} animation={false}>
	 	  	<Modal.Header closeButton>
          		<Modal.Title>Edit Product</Modal.Title>
        	</Modal.Header>
        	<Modal.Body>
		 	  	<Form>	
		   			<Container>
		   				<FormGroup>
		   			   		<Row>
								<Col><input type="text" name="product_name" 
								    placeholder={props.editValue.name} 
									ref={props.product_name} 
								/>
								</Col>
							</Row>
						</FormGroup>

		        		<FormGroup>
		        			<Row>
		        				<Col><input type="text" ref={props.product_rate} 
		        					name="product_rate" placeholder={props.editValue.rate} />
		        				</Col>
		        			</Row>
						</FormGroup>

						<FormGroup>
		        			<Row>
		        				<Col><input type="number" name="product_quantity" placeholder={props.editValue.quantity} ref={props.product_quantity} /></Col>
		        			</Row>
						</FormGroup>
					</Container>
				</Form>
			</Modal.Body>
			<Modal.Footer>
          		<Button variant="secondary" onClick={handleClose}>
            		Close
          		</Button>
          		{/*<Button variant="primary" onClick={handleClose}>
            		Save Changes
          		</Button>*/}
          		<Button onClick={props.editProductHandler}>UPDATE</Button>
        	</Modal.Footer>
	 	</Modal>
	 	  {/*</Popup>*/} 
	  </>
	);
}

export default EditProduct;