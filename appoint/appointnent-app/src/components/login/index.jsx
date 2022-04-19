import {React, useState} from 'react'
import { Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faLock, faEye } from '@fortawesome/free-solid-svg-icons'
import './index.css';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const updatePassword = (e) => {
        setPassword(e.target.value);
    }

    const updateEmail = (e) => {
        setEmail(e.target.value);
    }

    return (
        <div className="login">
            
            <div className="login-outer-container">
                <div className="login-container">

                <div className="login-inner-container">
                    <h2 className='title-card'>Welcome Back!</h2>
                    <h4>Log in to URHealth</h4>
                    <form className='login-form' action="">
                        <div className='email'>
                            <h5>Your Email Please</h5>
                            <div className="input-thing">
                                <FontAwesomeIcon icon={faMailBulk}/>
                                <input className="input" type="text" placeholder="Email" onChange={updateEmail} />
                            </div>
                        </div>
                        <div className="password">
                            <h5>Your Password Please</h5>
                            <div className="input-thing">
                                <FontAwesomeIcon icon={faLock}/> 
                                <input className="input password-input" type="text" placeholder="Password" onChange={updatePassword} />
                                <button className="show-password-btn">
                                    <FontAwesomeIcon icon={faEye} />
                                </button>
                            </div>
                        
                        
                        </div>
                        <button type='submit' className='signInButton'>Sign In</button>
                    </form>
                </div>
                    
            </div>
                </div>
            
        </div>
    )
}