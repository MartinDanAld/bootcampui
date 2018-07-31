// @Vendors
import React, { Component } from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Switch
    } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
//Components
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
// @Store
import store from './store';
// @Routes
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Page404 from './pages/Page404';
import FixPage from './pages/FixPage';

class App extends Component {
    render() {
        return(
            <Provider store={store}>
                <Router>
                    <Layout>
                        <Switch>
                        <Route path="/" exact component={ Home } />
                        <Route path="/products" component={ Products } />
                        <Route exact path="/about" component={ About } />
                        <Route exact path="/contact" component={ Contact } />
                        <Route exact path="/fix" component={ FixPage } />
                        <Route component={Page404} />
                        </Switch>
                    </Layout>
                </Router>
            </Provider>
        );
    }

}

export default App;