import './index.css';
import {InfoCards} from '../infoCards';

// Shows medics with the best scores
// 
export const TopRated = () => {

    let review = "Paul is a great dentist that takes care of each of his patients. He listens to everything a patient as to say and helps you understand any doubt that may arise."

    return (
    <div className='wrapper'>
        <h3 className="top-rated-title">Find the top rated medics</h3>
        <div className='main-wrapper'>
            <div className="top-rated-main-container">
                {/*Dummy info cards*/}
                <InfoCards name="Paul Chrzanowsky" speciality="Dentist" city="San German" review={review} className='card'/>
                <InfoCards name="Paul Chrzanowsky" speciality="Dentist" city="San German" review={review} className='card'/>
                <InfoCards name="Paul Chrzanowsky" speciality="Dentist" city="San German" review={review} className='card'/>
                <InfoCards name="Paul Chrzanowsky" speciality="Dentist" city="San German" review={review} className='card'/>
                <InfoCards name="Paul Chrzanowsky" speciality="Dentist" city="San German" review={review} className='card'/>
            </div>
        </div>
        <h3 className="top-rated-title">Find the best doctors:</h3>
        <p className="top-rated-paragraph">The best reviewed doctors by patients. Find out what they are saying about them and be sure to get your appointment!</p>
    </div>
    )
}