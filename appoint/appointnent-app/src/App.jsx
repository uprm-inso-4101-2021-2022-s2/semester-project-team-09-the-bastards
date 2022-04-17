import {React} from 'react';
import {Routes, Route } from 'react-router';
import logo from './logo.svg';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { Home } from './components/home';
import { Login } from './components/login';
import {Signup } from './components/signup';
import { Error } from './components/404';
import { About } from './components/about';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/about' element={<About />}/>
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
