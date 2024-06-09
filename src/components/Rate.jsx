import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bnbIcon from '../assets/img/Main/bnb.svg'
import btcIcon from '../assets/img/Main/btc.svg'
import ethIcon from '../assets/img/Main/eth.svg'
import gasIcon from '../assets/img/Main/gas.svg'
import sushiIcon from '../assets/img/Main/sushi.svg'
import audrIcon from '../assets/img/Main/audr.svg'
import './style.css'

function Rate() {
  const [btcPrice, setBtcPrice] = useState(0);
  const [ethPrice, setEthPrice] = useState(0);
  const [gasPrice, setGasPrice] = useState(0);
  const [bnbPrice, setBnbPrice] = useState(0);
  const [sushiPrice, setSushiPrice] = useState(0);
  const [audrPrice, setAudrPrice] = useState(0);

  const fetchCryptoPrices = async () => {
    try {
      const btcResponse = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');
      const btcData = await btcResponse.json();

      const ethResponse = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT');
      const ethData = await ethResponse.json();

   
      const gasResponse = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=GASUSDT');
      const gasData = await gasResponse.json();


      const bnbResponse = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT');
      const bnbData = await bnbResponse.json();

      const sushiResponse = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=SUSHIUSDT');
      const sushiData = await sushiResponse.json();

      const audrResponse = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=AUDUSDT');
      const audrData = await audrResponse.json();

      setBtcPrice(btcData.price);
      setEthPrice(ethData.price);
      setGasPrice(gasData.price);
      setBnbPrice(bnbData.price);
      setSushiPrice(sushiData.price);
      setAudrPrice(audrData.price);

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
        <h3>Относительно USDT:</h3>
        <div className="rates">
          <Link to="/btc" className="rates__item">
            <h3>BTC</h3>
            <span>{btcPrice}</span>
            <img src={btcIcon} alt="BTC Icon" />
          </Link>
          <Link to="/eth" className="rates__item">
            <h3>ETH</h3>
            <span>{ethPrice}</span>
            <img src={ethIcon} alt="ETH Icon" />
          </Link>
          <Link to="/gas" className="rates__item">
            <h3>GAS</h3>
            <span>{gasPrice}</span>
            <img src={gasIcon} alt="GAS Icon" />
          </Link>
          <Link to="/bnb" className="rates__item">
            <h3>BNB</h3>
            <span>{bnbPrice}</span>
            <img src={bnbIcon} alt="BNB Icon" />
          </Link>
          <Link to="/sushi" className="rates__item">
            <h3>SUSHI</h3>
            <span>{sushiPrice}</span>
            <img src={sushiIcon} alt="SUSHI Icon" />
          </Link>
          <Link to="/audr" className="rates__item">
            <h3>AUDRamp</h3>
            <span>{audrPrice}</span>
            <img src={audrIcon} alt="AUDR Icon" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Rate;
