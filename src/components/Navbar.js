import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

class NavComponent extends Component{
	render() {
		return (
			<nav>
	      <Link to="/">Home</Link><span> | </span>
	      <Link to="/about-us">About Us</Link><span> | </span>
	      <Link to="/contact-us">Contact Us</Link><span> | </span>
	      <Link to="/color-view">Color blindness view</Link>
			</nav>
		);
	}
}

export default NavComponent;

