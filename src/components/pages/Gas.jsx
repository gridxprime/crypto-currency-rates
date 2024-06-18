import React, { useState, useEffect } from 'react';
import './style.css'
import './media.css'
import Footer from '../Footer.jsx'
import gasIcon from '../../assets/img/Main/gas.svg'

function Gas() {

  const [cryptoPrice, setCryptoPrice] = useState(0)

  const fetchCryptoPrice = async() => {
    try {
      const cryptoResponse = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=GASUSDT');
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
      <h2> Курс GAS</h2>
      <img style={{width: '50px'}} src={gasIcon} alt="" />
      </div>
    <div className="crypto__rate">

    <span className='crypto__price'>
      {cryptoPrice}
    </span>
    <span className='crypto__desc'>
    GAS является одной из двух основных криптовалют в
     экосистеме Neo, наряду с токеном NEO. В то время 
     как NEO представляет собой долю владения в блокчейне
      Neo и используется для участия в управлении сетью,
       GAS используется для оплаты транзакционных 
    сборов и выполнения смарт-контрактов в сети Neo.
    <br></br>
    <br></br>
    Каждый раз, когда пользователи 
    проводят транзакции или запускают смарт-контракты на 
    блокчейне Neo, они платят комиссии в GAS. Это стимулирует
     участников сети и майнеров обеспечивать безопасность и функциональность 
     блокчейна. Более того, владельцы токенов NEO автоматически получают GAS в 
     качестве вознаграждения за хранение своих NEO на кошельках, поддерживающих 
     эту функцию.


    </span>
    </div>
 

</section>
<Footer>

</Footer>
</>
  )
}

export default Gas
