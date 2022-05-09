import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDashboard, faGear, faCalendar, faHamburger } from '@fortawesome/free-solid-svg-icons'
import './index.css';

export const Portal = (props) => {
    return (
        <div className="portal-container">
            <div className="portal-side-nav">
                <ul className="portal-inner-side-nav">
                    <li>
                        <FontAwesomeIcon icon={faDashboard} />
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faCalendar} />
                        <span>Manage Schedules</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faGear} />
                        <span>Settings</span>
                    </li>
                </ul>    
            </div>

            <div className="main-portal-thing">
                <div className="portal-bar">
                    <div className="toggle"><FontAwesomeIcon icon={faHamburger}/></div>
                    <div className="search">
                        <div className="user-thing"></div>
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                <div>
                <div className="sub-col">
                    
                    <div>
                        <label>First Name</label>
                        <input type="text" value="Andres" />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text" value="Echevarías" />
                    </div>
                    <div>
                        <label>Experience (years)</label>
                        <input type="text" value="17" />
                    </div>
                    <div>
                        <label>Description</label>
                        <textarea className="description" value="Dentist with 17 years of experience, specialized in oral surgery" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}