import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'
import './index.css';

const AboutCard = (props) => {

    return (
        <div className="card">
            <div className="role">{props.role}</div>
            <img 
                src={`./devs/${props.profile}`} 
                className="card-image"
                alt={props.nickname}
            />
            <div className="card-stats">
                
                
                <span><a src={props.github}><FontAwesomeIcon icon={faGithub}/></a> •</span>
                <span><a src={props.linkedin}><FontAwesomeIcon icon={faLinkedin}/></a> •</span>
                <span><a src={props.twitter}><FontAwesomeIcon icon={faTwitter}/></a></span>
            </div>
            <div>
                <h3>{props.name}</h3>
                <p>{props.about}</p>
            </div>
        </div>
    );
}


export const About = () => {
    const team = [
        {   
            id: 1,
            name: "Angel L Garcia",
            nickname: "Detective Pikachu",
            linkedIn: "http://",
            github: "https://github",
            profile: "",
            role: "Backend",
            about: "A 5th year student on his Somophore year in Computer Enginnering. The responsible for the backend side of the project, as well as some minor things in the frontend. Don't ask him how it works, has no idea of anything."
        },
        {
            id: 2,
            name: "Alejandro",
            nickname: "Alejo",
            linkedIn: "http://",
            github: "https://github",
            role: "Frontend",
            about: "The responsible for the design and development of the UX/UI side of the app",
            profile: ""
        },
        {
            id: 3,
            name: "Ruben",
            role: "Documentation",
            about: "Knows how to express the domain better than anyone in the group",
        },
        {
            id: 4,
            name: "Noel",
            role: "Scheduler",
            about: "A member of the CAHSI Asociation, always keeps taps on the projects' progress"
        }
    ]

    return (
        <div className="about-container">
            {
                team.map((member) => (   
                        AboutCard(member)
                ))
            }
        </div>
    )
}