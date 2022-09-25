import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='Header'>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact-us</li>
            <li>User</li>
        </ul>
        <button>log-in</button>
    </div>
  )
}

export default Header