// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Button } from 'react-bootstrap';
import Header from './components/Header'
import Item from './components/Item'
// import OffcanvasExample from './components/Header';

function App() {
  return (
    <>
    <header>
    <Header />
    </header>
    <main>
    <section className="barra--pesquisa">  
    <Item />
    </section>
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
