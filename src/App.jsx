import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Rate from './components/Rate';
import './media.css';
import { Routes, Route } from 'react-router-dom';
import Audr from './components/pages/Audr';
import Bnb from './components/pages/Bnb';
import Btc from './components/pages/Btc';
import Eth from './components/pages/Eth';
import Gas from './components/pages/Gas';
import Sushi from './components/pages/Sushi';


function App() {


  return (
    <>
        <Header>

        </Header>
        <Main>

        </Main>
        <Rate>
          

        </Rate>
        <Routes>
          <Route path='/' element={<Main></Main>}></Route>
          <Route path='/audr' element={<Audr></Audr>}></Route>
        </Routes>
    </>
  )
}

export default App
