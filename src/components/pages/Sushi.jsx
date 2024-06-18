import React, { useState, useEffect } from 'react';
import './style.css'
import './media.css'
import Footer from '../Footer.jsx'
import sushiIcon from '../../assets/img/Main/sushi.svg'

function Sushi() {

  const [cryptoPrice, setCryptoPrice] = useState(0)

  const fetchCryptoPrice = async() => {
    try {
      const cryptoResponse = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=SUSHIUSDT');
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
      <h2> Курс Sushi</h2>
      <img style={{width: '50px'}} src={sushiIcon} alt="" />
      </div>
    <div className="crypto__rate">

    <span className='crypto__price'>
      {cryptoPrice}
    </span>
    <span className='crypto__desc'>
    SushiSwap (SUSHI) - это криптовалюта и децентрализованная биржа
     (DEX), которая была запущена в августе 2020 года. SushiSwap является
      форком (криптокопией с изменениями) популярной биржи Uniswap и предоставляет
       пользователям возможность обменивать токены, обеспечивать
     ликвидность и получать вознаграждения за участие в экосистеме.
    <br></br>
    <br></br>
    Основной особенностью SushiSwap является ее
     управление сообществом. Владельцы токенов SUSHI
      имеют право голоса в принятии решений по развитию 
      платформы и могут предлагать изменения и улучшения. Это делает SushiSwap
     одной из наиболее децентрализованных бирж на рынке.


    </span>
    </div>
 

</section>
<Footer>

</Footer>
</>
  )
}

export default Sushi
