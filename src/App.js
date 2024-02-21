import logo from './logo.svg';
import './App.css';

//importamos los componentes
import CompShowLibros from './Libro/ShowLibro';
import CompCreateLibro from './Libro/CreateLibro';
import CompEditLibro from './Libro/EditLibro';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <CompShowLibros/> } />
            <Route path='/create' element={ <CompCreateLibro/> } />
            <Route path='/edit/:id' element={ <CompEditLibro/> } />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
