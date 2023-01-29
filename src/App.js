import './App.css';
import {
  BrowserRouter,
  Route,
  Routes } from 'react-router-dom'
import Login from './views/Login';
import Translate from './views/Translate';
import Profile from './views/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={ <Login/>} />
          <Route path="/translate" element={ <Translate/>} />
          <Route path="/profile" element={ <Profile/>} />
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
