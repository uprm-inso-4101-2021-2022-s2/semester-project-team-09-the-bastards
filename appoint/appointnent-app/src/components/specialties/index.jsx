import './index.css'
import { Button } from '../categoryButton'
import {faTooth, faUserDoctor,faChildren,faDisease,faSkull,faBedPulse,faBrain,faArrowRight} from '@fortawesome/free-solid-svg-icons'

export const Specialties = () => {
    

    return (
        <div className='category-wrapper'>
            <h3 className='category-title'>Find a medic by specialty</h3>
            <div className='category-main'>
                <div className='category-container'>
                    <Button path="/" name="Generalist" img={faUserDoctor}/>
                    <Button path="/" name="Pediatric Doctor" img={faChildren}/>
                    <Button path="/" name="Physician" img={faUserDoctor}/>
                    <Button path="/" name="Dentist" img={faTooth}/>
                    <Button path="/" name="Oncologist" img={faDisease}/>
                    <Button path="/" name="Radiologist" img={faSkull}/>
                    <Button path="/" name="Surgeon" img={faBedPulse}/>
                    <Button path="/" name="Psychiatrist" img={faBrain}/>
                    <Button path="/" name="Orthodontist" img={faTooth}/>
                    <Button path="/" name="See All" img={faArrowRight}/>
                </div>
            </div>

            
        </div>
    )
}