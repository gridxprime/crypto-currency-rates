import React, { useState } from 'react';
import './style.css';
import HeaderImg from '../assets/img/Header/exchange.png';
import './media.css';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <header title='Криптовалюта онлайн' className='header'>
        <nav className='navbar'>
          <Link to='/'><img src={HeaderImg} alt="Логотип" /></Link>
          <ul className={`navbar__ul ${menuOpen ? 'open' : ''}`}>
            <Link onClick={closeMenu} style={{color: '#fff', textDecoration: 'none'}} to='/buy-crypto'><li>Купить криптовалюту</li></Link>
            <li>Новости</li>
            <li>API</li>
            <li>Трейдерам</li>
            <li>Обучение</li>
            <li>Контакты</li>
            <li>О нас</li>
          </ul>
        </nav>
        <div className={`burger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
    </>
  );
}

export default Header;
