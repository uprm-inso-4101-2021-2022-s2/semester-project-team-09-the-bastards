import {React, useState} from 'react'
import { Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMailBulk, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import './index.css';

export const Signup = () => {
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [visibility, setVisibility] = useState('password');
    const [eyeIcon, setEyeIcon] = useState(faEye);

    const pushForVisibility = () => {
        if (visibility === 'password') {
            setVisibility('text');
            setEyeIcon(faEyeSlash);
        } else {
            setVisibility('password');
            setEyeIcon(faEye);
        }
    }

    const updateName = (e) => {
        setName(e.target.value);
    }

    const updatePassword = (e) => {
        setPassword(e.target.value);
    }

    const updateEmail = (e) => {
        setEmail(e.target.value);
    }

    return (
        <div className="signup">

            <div className="signup-outer-container">
                <div className="signup-container">

                <div className="signup-inner-container">
                    <h2 className='title-card'>Sign Up</h2>
                    <form className='signup-form' action="">
                        <div className='name'>
                            <h5>Your Name Please</h5>
                            <div className='input-thing'>
                                <FontAwesomeIcon icon={faUser}/>
                                <input className='input' type="text" placeholder="Name" onChange={updateName} />
                            </div>
                        </div>
                        <div className='email'>
                            <h5>Your Email Please</h5>
                            <div className='input-thing'>
                                <FontAwesomeIcon icon={faMailBulk}/>
                                <input className='input' type="text" placeholder="Email" onChange={updateEmail} />
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
                        <button type='submit' className='signUpButton'>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>            
    </div>
    )
}