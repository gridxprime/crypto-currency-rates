import React, { useState, useEffect } from 'react';
import './style.css'
import './media.css'
import Footer from '../Footer.jsx'


function Btc() {

  const [btcPrice, setBtcPrice] = useState(0)

  const fetchCryptoPrice = async() => {
    try {
      const btcResponse = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');
      const btcData = await btcResponse.json();
      setBtcPrice(btcData.price);
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
    <h2>
      Курс Bitcoin
    </h2>
    <span className='crypto__price'>
      {btcPrice}
    </span>
 

</section>
<Footer>

</Footer>
</>
  )
}

export default Btc
