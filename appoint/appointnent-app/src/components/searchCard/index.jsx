
import {useState} from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import test from '../doctorPage/testPhoto/test.png';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faStar } from '@fortawesome/free-solid-svg-icons'


const SearchCard = (props) => {
    const localizer = momentLocalizer(moment);
    const [date, setDate] = useState(new Date())

    const appointments = [
        {
            title: '10:00',
            start: new Date('2022/05/05 10:00:00'),
            end: new Date('2022/05/05 11:00:00'),
        },
        {
            title: '11:00',
            start: new Date('2022/05/05 11:00:00'),
            end: new Date('2022/05/05 12:00:00'),

        },
        {
            title: '12:00',
            start: new Date('2022/05/05 12:00:00'),
            end: new Date('2022/05/05 13:00:00'),
        }
    ]

    return (
        <div className="search-card">
            <div className="search-stats">
            </div>
            <div className='search-box'>
            <div className='search-calendar'>
                    <Calendar
                    localizer={localizer}
                    startAccessor="start"
                    endAccessor="end"
                    events={appointments}
                    style={{ height: 300, width: 600}}
                    view='week'
                    views={['week']}
                    min={new Date(2022, 0, 0, 8, 0, 0)}
                    max={new Date(2022, 0, 0, 13, 0, 0)} 
                    />
                    <button className='search-card-btn'><Link to='/doctorname'>See all time slots</Link></button>
                </div>
                <img className='search-card-photo' src={test}/>
                <h3 className='search-name'>{props.name}</h3>
                <p className="search-specialty">{props.specialty}</p>
                <p className='search-address'>{props.address}</p>
                <p className='review-score'><FontAwesomeIcon icon={faStar}/>{props.averageScore} </p>
                <div className='search-about'>{props.about}</div>
                
            </div>
        </div>
    );
}



export const Search = () => {
    const searchResults = [
        {   
            id: 1,
            name: "Test Man",
            specialty: "Dentist",
            address: '6V65+9J5, PR-108, Mayagüez, 00682',
            about: "Accepting new patients now! In the industry for more than 20 years!",
            averageScore: 4.5
        },
        {
            id: 2,
            name: "A",
            specialty: "Dentist",
            address: '6V65+9J5, PR-108, Mayagüez, 00682',
            about: "Accepting new patients now! In the industry for more than 20 years!"
        },
        {   
            id: 3,
            name: "Jorge Diaz",
            specialty: "Dentist",
        },
        {   
            id: 4,
            name: "Jorge Diaz",
            specialty: "Dentist",
        },
        {   
            id: 5,
            name: "Jorge Diaz",
            specialty: "Dentist",
        },
        {   
            id: 6,
            name: "Jorge Diaz",
            specialty: "Dentist",
        }
 
    ]




    return (
        <div className='search-wrapper'>

            <div className="hero-search-thingy">
                <div>
                    <input placeholder="Condition, specialty" type="text" />
                </div>
                <div>
                    <input placeholder="City, state, or zip code" type="text" />
                </div>
                <div>
                    <input placeholder="Appoint date" type="text" />
                </div>
                <div>
                    <button className="search-hero-btn" title="Search for doctors" type="submit" tabindex="0">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>
        <div className="search-container">
            {
                searchResults.map((member) => (   
                        SearchCard(member)
                ))
            }
        </div>
        </div>
    )
}