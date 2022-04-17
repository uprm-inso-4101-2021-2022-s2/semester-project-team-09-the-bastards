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
                    <a href="https://twitter.com/elonmusk">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </div>
                <div className="media">
                    <a href="https://github.com/uprm-inso-4101-2021-2022-s2/semester-project-team-09-the-bastards">
                    <FontAwesomeIcon icon={faGithub} />
                        </a>
                    
                </div>
                <div className="media">
                    <a href="https://www.linkedin.com/in/vancityreynolds/">
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