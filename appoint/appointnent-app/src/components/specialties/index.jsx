import './index.css'
import { Button } from '../categoryButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTooth, 
    faUserDoctor,
    faChildren,
    faArrowRight,
    faXRay,
    faHandDots,
    faStethoscope
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const categories = [
    {
        id: 1,
        name: 'Generalist',
        path: 'generalist',
        icon: faStethoscope,
        path: 'search'
    },
    {
        id: 2,
        name: 'Pediatric Doctor',
        path:'pediatric-doctor',
        icon: faChildren,
        path: 'search'
    },
    {
        id: 3,
        name: 'Physician',
        path: 'physician',
        icon: faUserDoctor,
        path: 'search'
    },
    {
        id: 4,
        name: 'Dentist',
        path: 'dentist',
        icon: faTooth,
        path: 'search'
    },
    {
        id: 5,
        name: 'Dermatologist',
        path: 'dermatologist',
        icon: faHandDots
    },
    {
        id: 6,
        name: 'Radiologist',
        path: 'radiologist',
        icon: faXRay
    },
]

const SpecialtyCard = ({name, path, icon}) => {
    return (
        <div className="specialty-card">
            <Link to={`/categories/${path}`}>
                <FontAwesomeIcon icon={icon} />
                <p>{name}</p>
            </Link>
        </div>
    )
}

export const Specialties = () => {

    return (
        <div className='category-wrapper'>
            <h3 className='category-title'>Find a medic by specialty</h3>
            <div className='category-main'>
                <div className='category-container'>
                   {
                       categories.map( (cat) => (
                           <SpecialtyCard key={cat.id} name={cat.name} path={cat.path} icon={cat.icon} />
                       ))
                   } 
                </div>
            </div>
            <Link to='/categories'><FontAwesomeIcon icon={faArrowRight}/> See All </Link>   
        </div>
    )
}