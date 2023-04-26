import React from 'react';
import './inicio.css';

import { Link } from 'react-router-dom';
import inicio from './inicio.jpg';
const Inicio = () => {
    return (
        <div className='home-container'>
			<Link to='/'>
                
                <img className="home"src={inicio} alt='logo' />
			</Link>
		</div>
    );
};

export default Inicio;