import React, { useState, useEffect } from 'react';
import './style.css'
import './media.css'
import Footer from '../Footer.jsx'
import btcIcon from '../../assets/img/Main/btc.svg'

function Btc() {

  const [cryptoPrice, setCryptoPrice] = useState(0)

  const fetchCryptoPrice = async() => {
    try {
      const cryptoResponse = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');
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
      <h2> Курс Bitcoin</h2>
      <img style={{width: '50px'}} src={btcIcon} alt="" />
      </div>
    <div className="crypto__rate">

    <span className='crypto__price'>
      {cryptoPrice}
    </span>
    <span className='crypto__desc'>
    Bitcoin - это криптовалюта, созданная в 2009 году
     неким Сатоши Накамото (псевдоним), и ставшая первой и 
     самой популярной цифровой валютой в мире. С момента своего запуска Bitcoin привлекает внимание как обычных пользователей, так и финансовых институтов, инвесторов и технологических компаний благодаря своей инновационной концепции, децентрализации 
    и потенциалу для революции в мировой финансовой системе.
    </span>
    </div>
 

</section>
<Footer>

</Footer>
</>
  )
}

export default Btc
