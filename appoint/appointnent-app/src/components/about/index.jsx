import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons'
import './index.css';

const importImg = (r) =>  {
    return r.keys().map(r);
  }
const ok = importImg(require.context('./devs', false, /\.(png|jpe?g|svg)$/))


const AboutCard = (props) => {

    return (
        <div className="card">
            <img 
                src={`${props.profile}`} 
                className="card-image"
                alt={props.nickname}
            />
            <div className="card-stats">
                
                
                <span><a className='about-link' src={props.github}><FontAwesomeIcon icon={faGithub}/></a> •</span>
                <span><a className='about-link' src={props.linkedin}><FontAwesomeIcon icon={faLinkedin}/></a> •</span>
                <span><a className='about-link' src={props.twitter}><FontAwesomeIcon icon={faTwitter}/></a></span>
            </div>
            <div>
                <h3 className='dev-name'>{props.name}</h3>
                <p className="role">{props.role}</p>
                <p className='dev-about'>{props.about}</p>
            </div>
        </div>
    );
}

const AboutHeader = () => {

    return (
        <div className='about-header-container'>
            <h1 className='about-header-title'> Who are we? </h1>
            <p className='about-header-p'>We are a group of students from the University of Puerto Rico: Mayaguez who are working on a project to bring a website that will serve doctors and patients alike.<br/> 
            Our mission is to create a platform where any user will be able to easily set up appointments with medical professionals, while also providing these professionals <br/>
            with an easy way to access appointments times to help keep track of each appointment.  </p>
            <h2 className='about-header-title'>Meet the team</h2>
        </div>
    );
}


export const About = () => {
    const team = [
        {   
            id: 1,
            name: "Angel L Garcia",
            picName: 'angel',
            nickname: "Detective Pikachu",
            linkedIn: "http://",
            github: "https://github",
            profile: "",
            role: "Backend",
            about: "A 5th year student on his Sophmore year in Computer Enginnering. Responsible for the backend side of the project, as well as some minor things in the frontend. Don't ask him how it works, has no idea of anything."
        },
        {
            id: 2,
            name: "Alejandro J Figueroa",
            picName: 'alejandro',
            nickname: "Alejo",
            linkedIn: "http://",
            github: "https://github",
            role: "Frontend",
            about: "Responsible for the design and development of the UX/UI side of the app",
            profile: ""
        },
        {
            id: 3,
            name: "Rubén E Leoncio Cabán",
            picName: 'ruben',
            role: "Documentation",
            about: "Knows how to express the domain better than anyone in the group",
        },
        {
            id: 4,
            name: "Noel Vargas",
            picName: 'noel',
            role: "Scheduler",
            about: "A member of the CAHSI Asociation, always keeps taps on the projects' progress"
        },
        {
            id: 5,
            name: "Andrés Rodriguez",
            picName: 'andres',
            role: 'Documentation',
            about: 'Responsible for correcting and fixing anything wrong in the project'

        },
        {
            id: 6,
            name: "Adrian Irizarry",
            picName: 'adrian',
            role: 'Frontend',
            about: '3rd year software engineer student. Responsible for helping with the frontend side of the project.',
            github: 'https://github'
        }
    ]




    return (
        <div className='about-wrapper'>
            <AboutHeader/>
            {
                ok.map( (e) => {
                    team.map( (j) => {
                        if (e.includes(j.picName)) {
                            j.profile = e
                        }
                    })        
                })
            }
        <div className="about-container">
            {
                team.map((member) => (   
                        AboutCard(member)
                ))
            }
        </div>
        </div>
    )
}