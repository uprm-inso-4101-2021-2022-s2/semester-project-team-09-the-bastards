import {React, useState} from 'react'
import { Link } from "react-router-dom";
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
            <FontAwesomeIcon icon={faHospital} /> URHealth 
            </h1>
            {/* Special buttons */}
            
            
            
            <h2 className="pull-right"><Link to="/login">Log In</Link> |{" "} <Link to="/signup">Sign Up</Link></h2>
            {children}
        </nav>
    );
  }

