import React from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import './header.css';


const Header = () => {
  return (
    <header className='header'>
      <div className='header__inner'>

      <img className='logo' src={logo} alt='' />

      <div className='header__title'>
        <Link to='/'>Главная</Link>
      </div>

      <div className='header__title'>
        <Link to='/first'>Первая</Link>
      </div>

      <div className='header__title'>
        <Link to='/first/second'>Вторая</Link>
      </div>

      </div>
    </header>
  )
};

export default Header;