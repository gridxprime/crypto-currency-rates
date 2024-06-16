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

  return (
    <>
      <header title='Криптовалюта онлайн' className='header'>
        <nav className='navbar'>
          <Link to='/'><img src={HeaderImg} alt="Логотип" /></Link>
          <ul className={`navbar__ul ${menuOpen ? 'open' : ''}`}>
            <li>Купить криптовалюту</li>
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
