//Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';

//Components
import Lookout from '../../components/Lookout/Lookout';
import Footer from '../../components/Footer/Footer';


// @Actions
import productsActions from '../../actions/productsActions';
import shopActions from '../../actions/shopActions';

class Products extends Component {
    render(){
        return(
            <div>
                <Lookout/>
                <Footer/>
            </div>
            );}
}

export default Products;
