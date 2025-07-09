
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-green-800 p-4">
        <ul className="flex space-x-4">
            <li className='inline-block py-4'>
                <Link to="/" className="hover:text-gray-300">
                Home
                </Link>
            </li>
            <li className='inline-block py-4'>
                <Link to="/about" className="hover:text-gray-300">About</Link>
            </li>
            <li className='inline-block py-4'>
                <Link to="/articles" className="hover:text-gray-300">Articles</Link>
            </li>
        </ul>
        </nav>
    );
}

export default Navbar;
