import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';

class Home extends Component {
    render() {
        return (
        	<div>
	            <h1>Pantalla principal</h1>
	            <p>Esta es la pantalla de bienvenida, hacer cualquier cosa que se les ocurra acá.</p>
	            <Footer/>
            </div>
        );
    }
}

export default Home;