import React from 'react';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Home from '../Home/Home';
import Volunteers from '../Volunteers/Volunteers';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>Home</Link>
            <Link to='/volunteers'>Volunteers</Link>
            <Link to='/about'>About</Link>
        </div>
    );
};

export default Header;