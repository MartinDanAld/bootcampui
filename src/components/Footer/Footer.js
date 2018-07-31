//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Asests
// import './CSS/Footer.css';

class Footer extends Component {
	static propTypes = {
    	copyrigth: PropTypes.string
	  };

  render() {
  	const {copyright = '&copy; Martin-React 2018'} = this.props;
    return (
      <div className="Footer">
        <p dangerouslySetInnerHTML={{__html: copyright}} />
      </div>
    );
  }
}
export default Footer;
