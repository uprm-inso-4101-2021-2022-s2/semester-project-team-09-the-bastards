import {React, useState} from 'react'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import './index.css';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [visibility, setVisibility] = useState('password');
    const [eyeIcon, setEyeIcon] = useState(faEye);

    const updatePassword = (e) => {
        setPassword(e.target.value);
    }

    const pushForVisibility = () => {
        if (visibility === 'password') {
            setVisibility('text');
            setEyeIcon(faEyeSlash);
        } else {
            setVisibility('password');
            setEyeIcon(faEye);
        }
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
                                <input className="input password-input" type={visibility} placeholder="Password" onChange={updatePassword} />
                                <div onClick={() => pushForVisibility()} className="show-password-btn">
                                    <FontAwesomeIcon icon={eyeIcon} />
                                </div>
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

Login.prototype = {
    setToken: PropTypes.func.isRequired
}