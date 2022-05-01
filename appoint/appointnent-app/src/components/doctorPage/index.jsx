import './index.css'
import './calendar.css'
import test from './testPhoto/test.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { useNavigate} from 'react-router-dom'
import moment from 'moment'



const ReviewCard = (props) => {
    return (
        <div className='review-card'>
            <div className='review-box'>
                <h3 className='reviewer-name'>{props.reviewer}</h3>
                <p className='review-score'><FontAwesomeIcon icon={faStar}/>{props.score}</p>
                <p className='review-date'>{props.date}</p>
                <p className='review'>{props.review}</p>
            </div>
        </div>
    );
}


export const DoctorPage = () => {

    const [value, onChange] = useState(new Date());
    const localizer = momentLocalizer(moment);
    let navigate = useNavigate();
    moment.locale();

    const handleChange = () => {

        navigate('/' ,{replace: true});
    }

    {/*Dummy Data */}
    const testReviews = [
        {
            id: 1,
            score: '5.0',
            review: 'A great experience, treated me with respect and made sure I understood everything he said',
            date : 'May 10, 2022',
            reviewer : 'Adrian Irizarry'

        },
        {
            id: 2,
            score: '4.0',
            review: 'The only thing I did not enjoy was the wait, but the doctor and his staff were amazing, treated everyone with respect and was very attentive to anything I had to say. Really recommended it',
            date : 'May 12, 2022',
            reviewer : 'Adrian Irizarry'
        },
        {
            id: 3,
            score: '4.5',
            review: 'A great experience, treated me with respect and made sure I understood everything he said',
            date : 'May 11, 2022',
            reviewer : 'Adrian Irizarry'
        },
        {
            id: 4,
            score: '4.9',
            review: 'A great experience, treated me with respect and made sure I understood everything he said',
            date : 'May 10, 2022',
            reviewer : 'Adrian Irizarry'
        },
        {
            id: 5,
            score: '5',
            review: 'A great experience, treated me with respect and made sure I understood everything he said',
            date : 'May 10, 2022',
            reviewer : 'Adrian Irizarry'
        }
    ]

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
        },
        {
            title: '13:00',
            start: new Date('2022/05/05 13:00:00'),
            end: new Date('2022/05/05 14:00:00'),
        }
    ]

    return (
        <div className='doctor-page-wrapper'>
            <div className='doctor-page-container'>
                <img src={test} className='doctor-page-photo'/>
                <h1 className='doctor-page-name'>Adrian Irizarry</h1>
                <p className='doctor-page-specialty'>Dentist</p>
                <p className='doctor-page-locale'>San German, Puerto Rico</p>
            </div>
            <div className='calendar-section'>
                <h2>Make an Appointment!</h2>
                <Calendar
                localizer={localizer}
                events={appointments}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500, width: 800}}
                onSelectEvent={handleChange}
                />
            </div>
            <div className='doctor-review-section'>
                <p className='doctor-review-paragraph'>Patient Reviews:</p>
                <p className='doctor-review-paragraph'>All reviews are submitted by patients registered in our network.</p>
                <p className='doctor-review-paragraph'>{testReviews.length} Reviews</p>
                    {
                        testReviews.map( (patient) => (
                        ReviewCard(patient)
                        ))
                    }
            </div>
        </div>
    );
}