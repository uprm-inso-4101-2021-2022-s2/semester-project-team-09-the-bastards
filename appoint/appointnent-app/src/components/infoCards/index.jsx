import './index.css'
import image from '../../testing/profiles/paul-chrzanowsky-md.jpg'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const InfoCards = (props) => {

    
    return (
        <div className='scroll'>
            <div className='wrapper'>
                <div className='info-card'>
                    <img src={`${props.profile}`}  alt='Doctors Photo' className='photo'/>
                    <h1 className='name'>{props.name}</h1>
                    <h2 className='specialty'>{props.speciality}</h2>
                    <h2 className='city'>{props.city}</h2>
                    <div className='review'>{props.review}</div>
                    <div className='card-footer'>
                        <Link to='/doctorname' className='link'>View Availability</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}