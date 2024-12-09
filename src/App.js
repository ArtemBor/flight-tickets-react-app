import './App.scss';
import Header from './components/header/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/index';
import Ticket from './pages/ticket/ticket';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Index/>}/>
          <Route path='/ticket/:id' element = {<Ticket/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
