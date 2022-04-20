import { useRef, useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMailBulk, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import './index.css';
import axios from '../../api/axios';
const LOGIN_URL = '../auth';


export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [visibility, setVisibility] = useState('password');
    const [eyeIcon, setEyeIcon] = useState(faEye);

    const { setAuth, persist, setPersist } = useAuth();
    const [errMsg, setErrMsg] = useState('');
    
    const errRef = useRef();
    const userRef = useRef();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";



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

    const handleSubmission = async (e) => {
        e.preveventDefault();
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ email, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ email, password, roles, accessToken });
            setEmail('');
            setPassword('');
            navigate(from, { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    const togglePersist = () => {
        setPersist(prev => !prev);
    }

    useEffect(() => {
        localStorage.setItem("persist", persist);
    }, [persist])

    return (
        <div className="login">
            <div className="login-outer-container">
                <div className="login-container">
                <div className="login-inner-container">
                    <h2 className='title-card'>Welcome Back!</h2>
                    <h4>Log in to URHealth</h4>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <form className='login-form' onSubmit={handleSubmission}>
                        <div className='email'>
                            <h5>Your Email Please</h5>
                            <div className="input-thing">
                                <FontAwesomeIcon icon={faMailBulk}/>
                                <input className="input" type="text" placeholder="Email" onChange={updateEmail} required ref={userRef} />
                            </div>
                        </div>
                        <div className="password">
                            <h5>Your Password Please</h5>
                            <div className="input-thing">
                                <FontAwesomeIcon icon={faLock}/> 
                                <input className="input password-input" type={visibility} placeholder="Password" onChange={updatePassword} required />
                                <div onClick={() => pushForVisibility()} className="show-password-btn">
                                    <FontAwesomeIcon icon={eyeIcon} />
                                </div>
                            </div>
                        
                        
                        </div>
                        <button type='submit' className='signInButton'>Sign In</button>
                        {/* <div className="persistCheck">
                            <input
                                type="checkbox"
                                id="persist"
                                onChange={togglePersist}
                                checked={persist}
                            />
                            <label htmlFor="persist">Trust This Device</label>
                        </div> */}
                    </form>
                    <p className="bottom-sign">
                        New user? <span>
                            <Link to='/signup'>Create a new new Account</Link>       
                        </span>
                    </p>
                </div>   
            </div>
        </div>
    </div>
    )
}