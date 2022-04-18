import {React} from 'react';
import {Routes, Route } from 'react-router';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { Home } from './components/home';
import { Login } from './components/login';
import { Signup } from './components/signup';
import { Error } from './components/404';
import { About } from './components/about';
import { Portal } from './components/portal';

import { useState } from 'react';

import './App.css';

function App() {
  const [token, setToken] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login setToken={setToken} />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/about' element={<About />}/>
          {/* TESTING ONLY */}
          <Route path='/portal' element={<Portal/>}/>


          <Route path="*" element={<Error/>}/>
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
