import {React} from 'react';
import {Routes, Route } from 'react-router';
import logo from './logo.svg';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { Home } from './components/home';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
        <Footer/>
      {/* <Routes>
      <Navbar />
      <Footer />
      <Route path='/' element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes> */}
      </header>
    </div>
  );
}

export default App;
