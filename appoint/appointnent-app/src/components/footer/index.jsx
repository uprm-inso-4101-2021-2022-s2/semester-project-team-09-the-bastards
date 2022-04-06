import './index.css';
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
                    <a href="#">Terms</a>
                    <a href="#">Policy</a>
                    <a href="#">Privacy</a>
                    <a href="#">About</a>
                </span>
            </p>
        </footer>
    )
}