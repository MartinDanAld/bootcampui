//Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
// @Actions
import productsActions from '../../actions/productsActions';
import shopActions from '../../actions/shopActions';

class Lookout extends Component{

	componentDidMount() {
		this.props.getProducts();
	}

	addProduct(name, description, price) {
		this.props.addProduct(name, description, price);
	}

    render() {
    	const { products, shop } = this.props;

    	const renderProducts = products.list ? products.list.map((prod, index) => {
    		return (
    			<div key={index}>{prod.name} | {prod.description} | {prod.price} | <button onClick={() => {
    				this.addProduct(prod.name, prod.description, prod.price);
    			}}>Agregar al carrito</button></div>
    		);
    	}) : null;
    	const orders = shop.orders.length ? shop.orders.map((product, index) => {
    		return (
    			<div key={index}>{product.name} - ${product.price}</div>
    		);
    	}) : <p>No hay productos en el carrito</p>;
        return (
        	<div>
	            <h1>Productos</h1>
	            {renderProducts}
	            <h1>Carrito</h1>
	            {orders}
                <h3>{shop.total}</h3>
                <button onClick={this.props.clearShop}>Vaciar Carrito</button>
            </div>
        );
    }
}

export default connect(
    state => {
        return {
            products: state.productsReducer, 
            shop: state.shopReducer
        }
    },{
        addProduct: shopActions.addProduct, 
        getProducts: productsActions.getProducts,
        clearShop: shopActions.clearShop
    }
)(Lookout);
