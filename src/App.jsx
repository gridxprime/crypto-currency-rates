import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Rate from './components/Rate';
import Footer from './components/Footer';
import './media.css';
import { Routes, Route } from 'react-router-dom';
import Audr from './components/pages/Audr';
import Bnb from './components/pages/Bnb';
import Btc from './components/pages/Btc';
import Eth from './components/pages/Eth';
import Gas from './components/pages/Gas';
import Sushi from './components/pages/Sushi';
import ScrollToTop from './ScrollToTop';


function App() {


  return (
    <>
        <Header />
        <ScrollToTop />

<Routes>


<Route path='/' element={

<>
    <Main />
    <Rate />
    <Footer />
          </>}
 />
        <Route path="/audr" element={<Audr />} />
        <Route path="/bnb" element={<Bnb />} />
        <Route path="/btc" element={<Btc />} />
        <Route path="/eth" element={<Eth />} />
        <Route path="/gas" element={<Gas />} />
        <Route path="/sushi" element={<Sushi />} />
</Routes>

    </>
  )
}

export default App
