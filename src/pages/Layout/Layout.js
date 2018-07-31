// @Styles
import './Layout.css';
// @Vendors
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// @Components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


class Layout extends React.Component {

    render() {
        return (
            <div className="layout">
                <Header
                    routes={[{
                            title: 'Home',
                            path: '/'
                        },{
                            title: 'Productos',
                            path: '/products'
                        },{
                            title: 'About Us',
                            path: '/about'
                        },{
                            title: 'Contact Us',
                            path: '/contact'
                        },{
                            title: 'Fix Page',
                            path: '/fix'
                        },]
                    }
                />
                <div className="main container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default (withRouter(Layout));