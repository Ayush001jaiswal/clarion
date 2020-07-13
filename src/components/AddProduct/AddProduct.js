import React, {useState} from 'react';
import './AddProduct.css'
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { Form, FormGroup, Label, Input, FormText, Button  } from 'reactstrap';




const AddProduct = (props) =>  {
	const [show, setShow] = useState(false)

	const handleShow = () => setShow(true);

	const handleClose = () => setShow(false);


	return (
	  <>
	  <td><button onClick={handleShow}>
        ADD
      </button></td> 
	 	{/*<Popup modal trigger={<td><button>ADD</button></td>}>*/}
	 	 <Modal show={show} onHide={handleClose} animation={false}>
	 	  	<Modal.Header closeButton>
          		<Modal.Title>Add Product</Modal.Title>
        	</Modal.Header>
        	<Modal.Body>
	 	  	<Form>	
	   			<Container>
	   				<FormGroup>
	   			   		<Row>
							<Col><input type="text"  name="product_name" id="product_name"  
						    	ref={props.product_name} placeholder="Enter the Product name" /></Col>
						</Row>
					</FormGroup>

	        		<FormGroup>
	        			<Row>
	        				<Col><input type="text"  name="product_rate" id="product_rate" 
	        					ref={props.product_rate} placeholder="Enter the rate." /></Col>
	        			</Row>
					</FormGroup>

					<FormGroup>
	        			<Row>
	        				<Col><input type="number"  name="product_quantity" id="product_quantity" 
	        					ref={props.product_quantity} placeholder="Enter the quantity." /></Col>
	        			</Row>
					</FormGroup>			
				</Container>
			</Form>
			</Modal.Body>
			<Modal.Footer>
          		<Button variant="secondary" onClick={handleClose}>
            		Close
          		</Button>
          		<Button onClick={props.addProductHandler}>ADD</Button>
          		{/*<Button variant="primary" onClick={handleClose}>
            		Save Changes
          		</Button>*/}
        	</Modal.Footer>
		</Modal>

          {/*</Popup>*/} 
	  </>
	);
}

export default AddProduct;