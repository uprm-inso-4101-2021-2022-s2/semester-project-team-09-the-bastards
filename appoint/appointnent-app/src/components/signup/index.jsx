import {React, useState} from 'react'
import { Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMailBulk, faLock, faEye } from '@fortawesome/free-solid-svg-icons'
import './index.css';

export const Signup = () => {
    const [name, setName] = useState(''); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                            <div>
                            <FontAwesomeIcon icon={faUser}/>
                            <input type="text" placeholder="Name" onChange={updateName} />
                            </div>
                        </div>
                        <div className='email'>
                            <h5>Your Email Please</h5>
                            <div>
                            <FontAwesomeIcon icon={faMailBulk}/>
                            <input type="text" placeholder="Email" onChange={updateEmail} />
                            </div>
                        </div>
                        <div className="password">
                            <h5>Your Password Please</h5>
                            <div>
                            <FontAwesomeIcon icon={faLock}/> 
                            <input type="text" placeholder="Password" onChange={updatePassword} />
                            <button>
                                <FontAwesomeIcon icon={faEye} />
                            </button>
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