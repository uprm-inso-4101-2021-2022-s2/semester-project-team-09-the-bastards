import './index.css'
import image from '../../testing/profiles/paul-chrzanowsky-md.jpg'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const InfoCards = ({name, speciality, city, review}) => {

    
    return (
        <div className='scroll'>
            <div className='wrapper'>
                <div className='info-card'>
                    <img src={image} alt='Doctors Photo' className='photo'/>
                    <h1 className='name'>{name}</h1>
                    <h2 className='specialty'>{speciality}</h2>
                    <h2 className='city'>{city}</h2>
                    <div className='review'>{review}</div>
                    <div className='card-footer'>
                        <Link to='/doctorname' className='link'>View Availability</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}