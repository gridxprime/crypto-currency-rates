import React from 'react'

function Main() {



  
  return (
<>
<section className='main__section'>
    <div className="container">
        <div className="main">
        <div className="main__left">
            <span>Покупайте криптовалюту выгодно и с низкими процентами вместе с <span className='exchange__span'>Everon</span></span>
            
        </div>

        <div className="main__right">
          <div className="main__right-news">
            <div className="main__right-news-item">
              <h3>Корейская биржа Upbit добавила несколько токенов. Все они взлетели в цене</h3>
              <span>Криптобиржа провела листинги сразу нескольких токенов в преддверии ужесточения законодательства в сфере криптовалют в Южной Корее</span>
              </div>
            <div className="main__right-news-item">
              <h3>$700 млн в виде криптовалютных токенов будет разблокировано в июне</h3>
              <span>В июне пройдет разблокировка токенов на сумму $730 млн, включая криптовалюты dYdX, Arbitrum, ApeCoin и другие проекты</span>
            </div>
            <div className="main__right-news-item">
              <h3>Маск ответил на статью Bloomberg о консультациях Трампу по криптовалютам</h3>
              <span>Криптовалюты неожиданно стали важным вопросом на повестке президентских выборов в США</span>
            </div>
            <div className="subscribe">
            <span>
               Подписаться на рассылку новостей:
            </span>
            <form action="">
            <input type="text" placeholder='Email@example.com'/>
            <button>Отправить</button>

            </form>           
             </div>
          </div>

        </div>

        </div>


        </div>

        
</section>


</>
  )
}

export default Main
