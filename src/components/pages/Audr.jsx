import React, { useState, useEffect } from 'react';
import './style.css'
import './media.css'
import Footer from '../Footer.jsx'
import audrIcon from '../../assets/img/Main/audr.svg'

function Audr() {

  const [cryptoPrice, setCryptoPrice] = useState(0)

  const fetchCryptoPrice = async() => {
    try {
      const cryptoResponse = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=AUDUSDT');
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
      <h2> Курс AUDRamp</h2>
      <img style={{width: '50px'}} src={audrIcon} alt="" />
      </div>
    <div className="crypto__rate">

    <span className='crypto__price'>
      {cryptoPrice}
    </span>
    <span className='crypto__desc'>
    AUDRamp (AUDR) - это криптовалюта, предназначенная для 
    упрощения перехода между традиционными финансовыми системами
     и миром криптовалют, с акцентом на поддержку австралийского доллара (AUD).
      Проект AUDRamp был запущен с целью предоставления надежного и эффективного способа
     конвертации AUD в цифровые активы и обратно.
    <br></br>
    <br></br>
    Основной особенностью AUDRamp является привязка к
     австралийскому доллару. Это обеспечивает стабильность 
     стоимости AUDR и позволяет пользователям легко переходить
      между криптовалютами и фиатными валютами. Привязка к AUD
       делает AUDRamp удобным инструментом для 
    пользователей, работающих с австралийской валютой.
    </span>
    </div>
 

</section>
<Footer>

</Footer>
</>
  )
}

export default Audr
