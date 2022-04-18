import './index.css';
import {useState} from 'react';
import {cities} from '../../testing/data';

// Fetches the top 20 most appointed cities
// This also fetches the available specialties within

const InfoCard = (props) => {
    const [active, setActive] = useState(false);

    // False: its folded
    // True: unfolded
    const toggle = () => {
        if (active) {
            setActive(active => active = false);

        } else {
            setActive(active => active = true);
        }

    }

    return (
        <div className="info-card-medic">
            <h3 onClick={() => toggle()} >{props.city}</h3>
            { active ? <div className="specialties">
                <ul>{
                    props.topSpecialties.map( (e) => (
                        <li>{e}</li>
                    ))   
                }</ul>
            </div> : null}
        </div>
    )
}

export const Info = () => {
    const props = cities

    return (
    <div className="info">
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