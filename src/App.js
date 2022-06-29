// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Button } from 'react-bootstrap';
import Header from './components/Header'
import Item from './components/Item'
import Carrosel from './components/Carrosel'
import CardImovel from './components/CardImovel'
import Footer from './components/Footer';
// import OffcanvasExample from './components/Header';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section>
          <Carrosel />
        </section>
        <section>
          <Item />
        </section>
        <section className='card--largura'>
        <CardImovel />
        </section>
      </main>
      <footer>
      <Footer />
      </footer>
    </>
  );
}

export default App;
