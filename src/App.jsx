import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Rotas from './Rotas'
import NavBar from './components/NavBar';
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
