// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Button } from 'react-bootstrap';
import Header from './components/Header'
import Item from './components/Item'
import Carrosel from './components/Carrosel'
import CardImovel from './components/CardImovel'
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
        <CardImovel />

      </main>
      {/* <div className="App">      
      <header className="App-header">
        <Button variant="info">Teste</Button>{'Legenda'}
      </header>
    </div> */}
    </>
  );
}

export default App;
