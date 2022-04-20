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
import { PersistLogin } from './components/persistLogin';
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from './hooks/useAuth';

import { useState } from 'react';

import './App.css';

// Super important function that protects unwanted links from messing up
// big time
const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();

  return (
      auth?.roles?.find(role => allowedRoles?.includes(role))
          ? <Outlet />
          : auth?.accessToken //changed from user to accessToken to persist login after refresh
              ? <Navigate to="/unauthorized" state={{ from: location }} replace />
              : <Navigate to="/login" state={{ from: location }} replace />
  );
}


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
          
          <Route path="*" element={<Error/>}/>
        
          {/* we want to protect these routes */}
          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth />}>
              <Route path='/portal' element={<Portal/>}/>

              </Route>

          </Route>
        </Routes>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
