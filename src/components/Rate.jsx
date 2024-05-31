import React, { useState, useEffect } from 'react';
import bnbIcon from '../assets/img/Main/bnb.svg'
import btcIcon from '../assets/img/Main/btc.svg'
import ethIcon from '../assets/img/Main/eth.svg'
import gasIcon from '../assets/img/Main/gas.svg'

function Rate() {
  const [btcPrice, setBtcPrice] = useState(0);
  const [ethPrice, setEthPrice] = useState(0);
  const [gasPrice, setGasPrice] = useState(0);
  const [bnbPrice, setBnbPrice] = useState(0);

  const fetchCryptoPrices = async () => {
    try {
      const btcResponse = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');
      const btcData = await btcResponse.json();

      const ethResponse = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT');
      const ethData = await ethResponse.json();

   
      const gasResponse = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=NOTUSDT');
      const gasData = await gasResponse.json();


      const bnbResponse = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT');
      const bnbData = await bnbResponse.json();

      setBtcPrice(btcData.price);
      setEthPrice(ethData.price);
      setGasPrice(gasData.price);
      setBnbPrice(bnbData.price);

    } catch (error) {
      console.error('Error fetching cryptocurrency prices:', error);
    }
  };

  useEffect(() => {
    fetchCryptoPrices();

    const interval = setInterval(fetchCryptoPrices, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='rate'>
      <div className="container">
        <h2>Текущий курс криптовалют</h2>
        <div className="rates">
          <div className="rates__item">
            <h3>BTC</h3>
            <span>{btcPrice}</span>
            <img src={btcIcon} alt="" />
          </div>
          <div className="rates__item">
            <h3>ETH</h3>
            <span>{ethPrice}</span>
            <img src={ethIcon} alt="" />
          </div>
          <div className="rates__item">
            <h3>NOT</h3>
            <span>{gasPrice}</span>
            <img src={gasIcon} alt="" />
          </div>
          <div className="rates__item">
            <h3>BNB</h3>
            <span>{bnbPrice}</span>
            <img src={bnbIcon} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rate;
