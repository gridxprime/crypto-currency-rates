import React from 'react'
import './style.css'
import './media.css'
import Footer from '../../Footer'
import bnbIcon from '../../../assets/img/Main/bnb.svg'
import btcIcon from '../../../assets/img/Main/btc.svg'
import ethIcon from '../../../assets/img/Main/eth.svg'
import gasIcon from '../../../assets/img/Main/gas.svg'
import sushiIcon from '../../../assets/img/Main/sushi.svg'
import audrIcon from '../../../assets/img/Main/audr.svg'




function Crypto() {
  return (
    <>
    <section className='crypto'>
      <div className="container__crypto">
              <div className="container__crypto__inner">
            <h2>Купить криптовалюту</h2>
            <span>На этой странице вы можете купить
              криптовалюту быстро и безопасно. Мы предлагаем
                широкий выбор популярных токенов, доступных для покупки 
                в любое время. Благодаря нашей платформе, вы можете легко 
                войти в мир криптовалют и начать торговать.
            </span>
            </div>
            <div className="container__crypto__end">
              <img src={btcIcon} alt="Bnb" />
              <img src={bnbIcon} alt="Bnb" />
              <img src={ethIcon} alt="Bnb" />
              <img src={gasIcon} alt="Bnb" />
              <img src={sushiIcon} alt="Bnb" />
              <img src={audrIcon} alt="Bnb" />
            </div>
      </div>
      <div className='crypto__available'><h2>Доступные токены:</h2>
      <ul>
        <li>
          <img src={btcIcon} alt="" />
          <span>Bitcoin</span>
        </li>
        <li>
          <img src={bnbIcon} alt="" />
          <span>BNB</span>
        </li>
        <li>
          <img src={ethIcon} alt="" />
          <span>Ethereum</span>
        </li>
        <li>
          <img src={gasIcon} alt="" />
          <span>Gas</span>
        </li>
        <li>
          <img src={sushiIcon} alt="" />
          <span>Sushi Swap</span>
        </li>
        <li>
          <img src={audrIcon} alt="" />
          <span>AUDRamp</span>
        </li>


      </ul>
      </div>
      
    </section>
    <Footer></Footer>
    </>
  )
}

export default Crypto
