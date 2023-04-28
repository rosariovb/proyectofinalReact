import React from 'react';
import './Header.css';

import { Link } from 'react-router-dom';


import prueb from './prueb.jpg';


const Header = () => {
	return (
		<div className='header-container'>
			<Link to='/'>
                <img className="logos"src={prueb} alt='logo' width='150' />
			</Link>
		</div>
	);
};

export default Header;