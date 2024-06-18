import React, { useState, useEffect } from 'react';
import './style.css'
import './media.css'
import Footer from '../Footer.jsx'
import ethIcon from '../../assets/img/Main/eth.svg'

function Eth() {

  const [cryptoPrice, setCryptoPrice] = useState(0)

  const fetchCryptoPrice = async() => {
    try {
      const cryptoResponse = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT');
      const cryptoData = await cryptoResponse.json();
      setCryptoPrice(cryptoData.price);
    } catch (error) {
      console.error('Error fetching cryptocurrency prices:', error);
    }
  }

  useEffect(() => {
    fetchCryptoPrice();

    const interval = setInterval(fetchCryptoPrice, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
  
  <>

<section className='rates__page'>
    <div className="crypto__inner">
      <h2> Курс Ethereum</h2>
      <img style={{width: '50px'}} src={ethIcon} alt="" />
      </div>
    <div className="crypto__rate">

    <span className='crypto__price'>
      {cryptoPrice}
    </span>
    <span className='crypto__desc'>
    Ethereum (ETH) - это вторая по популярности и 
    капитализации криптовалюта после Bitcoin. Запущенная в 
    2015 году Виталиком Бутериным, Ethereum представляет собой
     децентрализованную платформу, которая позволяет разработчикам создавать и запускать 
    смарт-контракты и децентрализованные приложения (dApps).<br>
    </br><br></br>
    Ethereum отличается своей гибкостью и широкими
     возможностями применения, что привлекает разработчиков 
     и инвесторов со всего мира. Платформа также поддерживает
      выпуск новых криптовалют, известных как токены, что позволяет 
    создавать проекты на базе блокчейна Ethereum.

    </span>
    </div>
 

</section>
<Footer>

</Footer>
</>
  )
}

export default Eth
