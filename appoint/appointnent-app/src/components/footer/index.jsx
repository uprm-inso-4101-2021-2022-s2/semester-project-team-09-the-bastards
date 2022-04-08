import './index.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="media-container">
                <div className="media">
                    <a href="#">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </div>
                <div className="media">
                    <a href="#">
                    <FontAwesomeIcon icon={faGithub} />
                        </a>
                    
                </div>
                <div className="media">
                    <a href="#">
                    <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                </div>
            </div>
            <p>
                <span>
                    <Link to="/privacy">Privacy</Link>
                    <Link to="/terms-and-policies">Terms and Policies</Link>
                    <Link to="/about">About</Link>
                </span>
            </p>
        </footer>
    )
}