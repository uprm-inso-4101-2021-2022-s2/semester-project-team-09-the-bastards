import {React, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHospital } from '@fortawesome/free-solid-svg-icons'
import './index.css';

export const Navbar = ({children}) => {
    
    const navLinkStyles = ({ isActive }) => {
        return {
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: isActive ? "none" : "underline"
        };
      };



    return (
        <nav className="navbar navbar-expand">
            <h1>
            <FontAwesomeIcon icon={faHospital} /> Stadtarzt
            </h1>
            {/* Special buttons */}
            {children}

        </nav>
    );
  }

