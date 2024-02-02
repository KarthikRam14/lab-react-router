import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='Main-Container'>
        <div><Link className='Link' to='/home'>Kalvium</Link></div>
        <div className='Container2'>
            <Link to='/help'>Help</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/about'>About</Link>
        </div>
    </div>
  )
}

export default Navbar;


