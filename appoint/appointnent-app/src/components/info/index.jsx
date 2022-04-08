import './index.css';
import {cities} from '../../testing/data';

// Fetches the top 20 most appointed cities
// This also fetches the available specialties within

const InfoCard = (props) => {
    return (
        <div>
            <h3>{props.city}</h3>
            <div className="specialties hidden">
                <ul>{
                    props.topSpecialties.map( (e) => (
                        <li>{e}</li>
                    ))   
                }</ul>
            </div>
        </div>
    )
}

export const Info = () => {
    const props = cities

    return (
    <div>
        <h3 className="city-search-title">Find a medic by city</h3>
        <div className="city-search-main-container">
        {
            props.map( (e) => (
                InfoCard(e)
            ))
        }
        </div>
    </div>)
}