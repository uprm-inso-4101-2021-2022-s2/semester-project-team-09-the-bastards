import './index.css'
import './calendar.css'
import test from '../topRated/testPhotos/test2.jpg'
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

    const [value, onChange] = useState('');
    const localizer = momentLocalizer(moment);
    let navigate = useNavigate();
    moment.locale();

    const [selected, setSelected] = useState();
    const [date, setDate] = useState();

    const handleChange = (event) => {
        navigate('/appointment' ,{state: {date: moment(event.start).format('MMMM Do YYYY [at] h:mma')}},{replace: true});
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
            start: new Date('2022/05/06 10:00:00'),
            end: new Date('2022/05/06 11:00:00'),
        },
        {
            title: '11:00',
            start: new Date('2022/05/06 11:00:00'),
            end: new Date('2022/05/06 12:00:00'),

        },
        {
            title: '12:00',
            start: new Date('2022/05/06 12:00:00'),
            end: new Date('2022/05/06 13:00:00'),
        },
        {
            title: '13:00',
            start: new Date('2022/05/06 13:00:00'),
            end: new Date('2022/05/06 14:00:00'),
        },
        {
            title: '14:00',
            start: new Date('2022/05/06 14:00:00'),
            end: new Date('2022/05/06 15:00:00'),
        },
        {
            title: '15:00',
            start: new Date('2022/05/06 15:00:00'),
            end: new Date('2022/05/06 16:00:00'),
        },
        {
            title: '16:00',
            start: new Date('2022/05/06 16:00:00'),
            end: new Date('2022/05/06 17:00:00'),
        },
        {
            title: '10:00',
            start: new Date('2022/05/09 10:00:00'),
            end: new Date('2022/05/09 11:00:00'),
        },
        {
            title: '11:00',
            start: new Date('2022/05/09 11:00:00'),
            end: new Date('2022/05/09 12:00:00'),

        },
        {
            title: '12:00',
            start: new Date('2022/05/09 12:00:00'),
            end: new Date('2022/05/09 13:00:00'),
        },
        {
            title: '13:00',
            start: new Date('2022/05/09 13:00:00'),
            end: new Date('2022/05/09 14:00:00'),
        },
        {
            title: '14:00',
            start: new Date('2022/05/09 14:00:00'),
            end: new Date('2022/05/09 15:00:00'),
        },
        {
            title: '15:00',
            start: new Date('2022/05/09 15:00:00'),
            end: new Date('2022/05/09 16:00:00'),
        },
        {
            title: '16:00',
            start: new Date('2022/05/09 16:00:00'),
            end: new Date('2022/05/09 17:00:00'),
        },
        {
            title: '10:00',
            start: new Date('2022/05/10 10:00:00'),
            end: new Date('2022/05/10 11:00:00'),
        },
        {
            title: '11:00',
            start: new Date('2022/05/10 11:00:00'),
            end: new Date('2022/05/10 12:00:00'),

        },
        {
            title: '12:00',
            start: new Date('2022/05/10 12:00:00'),
            end: new Date('2022/05/10 13:00:00'),
        },
        {
            title: '13:00',
            start: new Date('2022/05/10 13:00:00'),
            end: new Date('2022/05/10 14:00:00'),
        },
        {
            title: '14:00',
            start: new Date('2022/05/10 14:00:00'),
            end: new Date('2022/05/10 15:00:00'),
        },
        {
            title: '15:00',
            start: new Date('2022/05/10 15:00:00'),
            end: new Date('2022/05/10 16:00:00'),
        },
        {
            title: '16:00',
            start: new Date('2022/05/10 16:00:00'),
            end: new Date('2022/05/10 17:00:00'),
        },
        {
            title: '10:00',
            start: new Date('2022/05/11 10:00:00'),
            end: new Date('2022/05/11 11:00:00'),
        },
        {
            title: '11:00',
            start: new Date('2022/05/11 11:00:00'),
            end: new Date('2022/05/11 12:00:00'),

        },
        {
            title: '12:00',
            start: new Date('2022/05/11 12:00:00'),
            end: new Date('2022/05/11 13:00:00'),
        },
        {
            title: '13:00',
            start: new Date('2022/05/11 13:00:00'),
            end: new Date('2022/05/11 14:00:00'),
        },
        {
            title: '14:00',
            start: new Date('2022/05/11 14:00:00'),
            end: new Date('2022/05/11 15:00:00'),
        },
        {
            title: '15:00',
            start: new Date('2022/05/11 15:00:00'),
            end: new Date('2022/05/11 16:00:00'),
        },
        {
            title: '16:00',
            start: new Date('2022/05/11 16:00:00'),
            end: new Date('2022/05/11 17:00:00'),
        },
        

    ]

    return (
        <div className='doctor-page-wrapper'>
            <div className='doctor-page-container'>
                <img src={test} className='doctor-page-photo'/>
                <h1 className='doctor-page-name'>Miguel Lopez</h1>
                <p className='doctor-page-specialty'>Physician</p>
                <p className='doctor-page-locale'>Ponce, Puerto Rico</p>
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