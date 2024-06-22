import React, { useState } from 'react';
import './style.css';
import './media.css';
import Footer from '../../Footer';
import bnbIcon from '../../../assets/img/Main/bnb.svg';
import btcIcon from '../../../assets/img/Main/btc.svg';
import ethIcon from '../../../assets/img/Main/eth.svg';
import gasIcon from '../../../assets/img/Main/gas.svg';
import sushiIcon from '../../../assets/img/Main/sushi.svg';
import audrIcon from '../../../assets/img/Main/audr.svg';

const cryptoIcons = {
  BTC: btcIcon,
  BNB: bnbIcon,
  ETH: ethIcon,
  GAS: gasIcon,
  SUSHI: sushiIcon,
  AUDR: audrIcon,
};

function Crypto() {
  const [selectedCrypto, setSelectedCrypto] = useState('BTC');

  const handleSelectChange = (event) => {
    setSelectedCrypto(event.target.value);
  };

  return (
    <>
      <section className='crypto'>
        <div className="container__crypto">
          <div className="container__crypto__inner">
            <h2>Купить криптовалюту</h2>
            <span>
              На этой странице вы можете купить
              криптовалюту быстро и безопасно. Мы предлагаем
              широкий выбор популярных токенов, доступных для покупки 
              в любое время. Благодаря нашей платформе, вы можете легко 
              войти в мир криптовалют и начать торговать.
            </span>
          </div>
          <div className="container__crypto__end">
            <img src={btcIcon} alt="Bitcoin" />
            <img src={bnbIcon} alt="BNB" />
            <img src={ethIcon} alt="Ethereum" />
            <img src={gasIcon} alt="Gas" />
            <img src={sushiIcon} alt="Sushi Swap" />
            <img src={audrIcon} alt="AUDRamp" />
          </div>
        </div>
        <div className='crypto__available'>
          <h2>Доступные токены:</h2>
          <ul>
            <li>
              <img src={btcIcon} alt="Bitcoin" />
              <span>Bitcoin</span>
            </li>
            <li>
              <img src={bnbIcon} alt="BNB" />
              <span>BNB</span>
            </li>
            <li>
              <img src={ethIcon} alt="Ethereum" />
              <span>Ethereum</span>
            </li>
            <li>
              <img src={gasIcon} alt="Gas" />
              <span>Gas</span>
            </li>
            <li>
              <img src={sushiIcon} alt="Sushi Swap" />
              <span>Sushi Swap</span>
            </li>
            <li>
              <img src={audrIcon} alt="AUDRamp" />
              <span>AUDRamp</span>
            </li>
          </ul>
        </div>
        <div className="crypto__buy-field">
          <input type="number" min={0} max={1000} />
          <select className='select' value={selectedCrypto} onChange={handleSelectChange}>
            <option value="BTC">Bitcoin</option>
            <option value="BNB">BNB</option>
            <option value="ETH">Ethereum</option>
            <option value="GAS">Gas</option>
            <option value="SUSHI">Sushi Swap</option>
            <option value="AUDR">AUDRamp</option>
          </select>
          <img src={cryptoIcons[selectedCrypto]} alt={selectedCrypto} />
          <button>Купить</button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Crypto;
