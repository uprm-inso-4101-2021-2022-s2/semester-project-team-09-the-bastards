import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'


export const BookingForm = () => {

    let location = useLocation();
    console.log(location.state.date);
    const [patientRecord, setPatientRecord] = useState('');
    const [phone, setPhone] = useState('');

    const updatePhone = (event) => {
        console.log(event.target.value);
        setPhone(event.target.value);
    }

    const handleRecord = (event) => {
        console.log(event.target.value);
        setPatientRecord(event.target.value);
    }

    return (
        <div className="booking">
            <div className="booking-outer-container">
                <div className="booking-container">
                <div className="booking-inner-container">
                    <h2 className='title-card'>Confirm your Booking</h2>
                    <h4>Review the following:</h4>
                    <form className='booking-form'>
                        <div className='name-confirm'>
                            <h5>Booking Appointment As</h5>
                            <div className="booking-input-thing">
                                <h5 className='booking-name'>Adrian Irizarry Negron</h5>
                            </div>
                        </div>
                        <div>
                            <h5>Your chosen time slot</h5>
                            <div className='booking-input-thing'>
                                <h5>{location.state.date}</h5>
                            </div>
                        </div>
                        <div className="booking-phone">
                            <h5>Provide a Phone Number (Format: 999-999-9999)</h5>
                            <div className="input-thing">
                                <input className="input" placeholder="000-000-0000" type='tel' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required onChange={updatePhone}/>
                            </div>
                        </div>
                        <div>
                            <h5>First time seeing this medic? </h5>
                            <div className='input-thing'>
                            <input className='input' type='radio' name='booking-radio' value="New" onChange={handleRecord}/> New Patient
                            <input className='input' type='radio' name='booking-radio' value="Registered"onChange={handleRecord}/> Registered Patient
                            </div>
                        </div>
                        <button type='submit' className='bookingButton'>Book Appointment</button>
                    </form>
                </div>   
            </div>
        </div>
    </div>
    )
}