import React, {Component} from 'react';
import './Product.css';
import AddProduct from '../../components/AddProduct/AddProduct';
import EditProduct from '../../components/EditProduct/EditProduct';
import Popup from "reactjs-popup";

class Product extends Component {
    constructor(props) {
  	   super(props);
       this.product_name = React.createRef()
       this.product_rate = React.createRef()
       this.product_quantity = React.createRef() 
       this.state = {
          products: [
                      {id:1, name: 'Product-1', rate: 200, quantity: 1000 },
                      {id:2, name: 'Product-2', rate: 400, quantity: 2000 },
                      {id:3, name: 'Product-3', rate: 600, quantity: 3000 }
                    ]
       }
  	}

    editProductHandler = (data) => {
      const updateProductData = [ ... this.state.products ];
      const updateProductObject = {
        id:   data.id,
        name: this.product_name.current.value,
        rate: this.product_rate.current.value,
        quantity: this.product_quantity.current.value
      }
      const index = updateProductData.indexOf(data); 
      updateProductData[index] = updateProductObject;
      console.log(updateProductData);
      this.setState({products: updateProductData});
    }

    deleteProduct = (id) => {
      const newProducts = [ ...this.state.products ];
      const updateProducts = newProducts.filter((value, key) => {
          return value.id !== id
      });
      this.setState({products: updateProducts});
    }

    addProductHandler = () => {
      const newProductData = [ ...this.state.products ];
      const newProductObject = {
        id: ++this.state.products.length,
        name: this.product_name.current.value,
        rate: this.product_rate.current.value,
        quantity: this.product_quantity.current.value
      };
      newProductData.push(newProductObject);
      this.setState({products: newProductData});
    }

    
    render() {
      
      const productList = this.state.products.map((value, key) => {
          return (
              <tr key={key}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.rate}</td>
                <td>{value.quantity}</td>
                <td><input type="submit" onClick={this.deleteProduct.bind(this, value.id)} value="DELETE" /></td>
                
                <AddProduct 
                  addProductHandler = {this.addProductHandler} 
                  product_name = {this.product_name}
                  product_rate = {this.product_rate}
                  product_quantity = {this.product_quantity}
                />

                <EditProduct 
                  editValue = {value} 
                  editProductHandler = {this.editProductHandler.bind(this, value)} 
                  product_name = {this.product_name}
                  product_rate = {this.product_rate}
                  product_quantity = {this.product_quantity}
                />
              </tr>
          );
      });
      
      return (
        this.state.products.length > 0 ?
          <div className="Home">
            <h4>List of Products</h4>
            <table>
              <tbody>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>RATE</th>
                  <th>Quantity</th>
                  <th>Action</th>
                  <th>Action</th>
                  <th>Action</th>
                </tr>
                {productList}
              </tbody>
            </table>
          </div> : <p>No Product Found</p>  
    );
  }
}

export default Product;
