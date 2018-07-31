// @Styles
import './Header.css';
// @Vendors
import React from 'react';
import { Link } from 'react-router-dom';

const generateRoute = (title, path, component, onClick) => {
    if(!!path) {
        return (
            <Link className="nav-link" to={ path }>{ component ? component : title }</Link>
        );
    }
    else {
        return (
            <a
                className="nav-link"
                onClick={ onClick }
            >
                { component ? component : title }
            </a>
        );
    }
}

const Header = (props) => {
    return (
        <nav className="header navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/">MartinPage</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        {props.routes.map((route, index) => {
                            return (
                                <li className={`nav-item ${route.className}`} key={ index }>
                                    { generateRoute(route.title, route.path, route.component, route.onClick) }
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;