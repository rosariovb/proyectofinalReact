import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';

import logo from './logo.jpeg';
import prueb from './prueb.jpg';
import carru from './carru.jpg';

const Header = () => {
	return (
		<div className='header-container'>
			<Link to='/'>
				<img className="logos"src={carru} alt='logo' width='150' />

                <img className="logos"src={logo} alt='logo' width='150' />
                
                <img className="logos"src={prueb} alt='logo' width='150' />
			</Link>
		</div>
	);
};

export default Header;