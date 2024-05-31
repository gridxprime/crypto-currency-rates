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

        </div>

        <div className="main__right">
            <span>
                Для начала работы введите свой номер 
              телефона или Email и мы отправим Вам регистрационные данные:
            </span>
            <form action="">
            <input type="text" placeholder='Номер телефона/Email'/>
            <button>Отправить</button>
            </form>
        </div>
        </div>

        
</section>


</>
  )
}

export default Main
