// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Jumbotron, Button} from 'react-bootstrap';
import Header from './components/Header'
// import OffcanvasExample from './components/Header';

function App() {
  return (
    <>
    <Header />
    <div className="App">      
      <header className="App-header">
        <Button variant="info">Teste</Button>{'Legenda'}
      </header>
    </div>
    </>
  );
}

export default App;
