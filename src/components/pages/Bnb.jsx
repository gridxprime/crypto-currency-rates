import React, { useState, useEffect } from 'react';
import './style.css'
import './media.css'
import Footer from '../Footer.jsx'
import bnbIcon from '../../assets/img/Main/bnb.svg'

function Bnb() {

  const [cryptoPrice, setCryptoPrice] = useState(0)

  const fetchCryptoPrice = async() => {
    try {
      const cryptoResponse = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT');
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
      <h2> Курс BNB</h2>
      <img style={{width: '50px'}} src={bnbIcon} alt="" />
      </div>
    <div className="crypto__rate">

    <span className='crypto__price'>
      {cryptoPrice}
    </span>
    <span className='crypto__desc'>
    Binance Coin (BNB) - это криптовалюта,
     созданная одной из крупнейших мировых криптовалютных бирж,
      Binance. Запущенная в 2017 году, BNB изначально была создана 
      как токен стандарта ERC-20 на блокчейне Ethereum, однако
     позднее была перенесена на собственный блокчейн Binance Chain.
    <br></br>
    <br></br>
    Основное предназначение BNB - служить внутренней
     валютой экосистемы Binance. Пользователи биржи могут
      использовать BNB для оплаты комиссий за транзакции,
       что позволяет значительно снизить их стоимость. 
       Кроме того, BNB можно использовать для участия в 
       токенсейлах на платформе Binance Launchpad, а также для оплаты товаров и услуг 
    у множества партнеров Binance по всему миру.
    </span>
    </div>
 

</section>
<Footer>

</Footer>
</>
  )
}

export default Bnb
