import React from 'react';
import './Header.css';

const Header = () => {
  const NAV_ITEMS = [
    { id: 1, name: 'Home' }, 
    { id: 2, name: 'About Us' }, 
    { id: 3, name: 'FAQs' }
  ];

  return <div className='header'>
    <div className='container'>
      
      <div className='navbar'>
        <div className='navbar-brand'>
          <a href="/" className='navbar-brand__logo'>
            <img src="/imgs/logo.webp" alt='Charitism Logo' />
          </a>
          <a href='/' className='navbar-brand__logo--text'>
            <p>Charitism</p>
          </a>
        </div>

        <div className='navbar-nav'>
          <ul>
            {
              NAV_ITEMS.map(item => 
                (
                  <li key={item.id} className='navbar-nav__item'>
                    <a className='navbar-nav__link' href='/'>{item.name}</a>
                  </li>
                ))
            }
          </ul>
        </div>

        <div className='navbar-button' >
          <a href='/' className='btn btn-primary'>Gift Basket</a>
        </div>
      </div>
    </div>
  </div>
}

export default Header