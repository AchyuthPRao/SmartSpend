import './App.css';
// import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/profile/Profile';
import About from './components/About';
import Peer from './components/Peer';
import SmartInvest from './components/SmartInvest';
import Expense from './components/Expense';
import Landing from './components/Landing';


function App() {
  return (
    <>
      <div className="App">
      
    <BrowserRouter>
    <Routes>
      <Route path='/profile' exact element={<Profile/>} ></Route>
      <Route path='/' exact element={<Landing />} ></Route>
      <Route path='/about' exact element={<About />} ></Route>
      <Route path='/p2p' exact element={<Peer />} ></Route>
      <Route path='/expense' exact element={<Expense />} ></Route>
      <Route path='/smartinv' exact element={<SmartInvest />} ></Route>
    </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
