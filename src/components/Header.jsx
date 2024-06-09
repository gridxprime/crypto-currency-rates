import React from 'react'
import './style.css'
import HeaderImg from '../assets/img/Header/exchange.png'
import { Link } from 'react-router-dom'


function Header() {



  
  return (
    <>
        <header title='Криптовалюта онлайн' className='header'>
        <Link to='/'><img src={HeaderImg} alt="" /></Link>
            <nav className='navbar'>
                <ul className='navbar__ul'>
                    <li>Купить криптовалюту</li>
                    <li>Новости</li>
                    <li>API</li>
                    <li>Трейдерам</li>
                    <li>Обучение</li>
                    <li>Контакты</li>
                    <li>О нас</li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Header
