import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDashboard, faGear, faCalendar, faHamburger, faTrash } from '@fortawesome/free-solid-svg-icons'
import './index.css';

export const Portal2 = (props) => {
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
                <table>
                        <thead>
                        <tr>
                                        <th>Available Date</th>
                                        <th>Morning Available</th>
                                        <th>AfterNoon Available</th>
                                        <th>Night Available</th>
                                        <th>Action</th>
                                                                               
                            </tr>
                        </thead>   
                        <tbody>
                        <tr>
                            <td>2021-01-09</td>
                            <td>No</td>
                            <td>Yes</td>
                            <td>No</td>
                                        
                            <input type="hidden" name="_token" value="tOCVbFlSUne96tRVFWBXdQLsxgkxqDM6YAuCBEmE"/>
                            <input type="hidden" name="_method" value="DELETE"/>
                              
                            <button class="btn btn-default look-a-like"><FontAwesomeIcon icon={faTrash}/></button>
                            </tr>
                            <tr>
                            <td>2021-01-09</td>
                            <td>No</td>
                            <td>Yes</td>
                            <td>No</td>
                                        
                            <input type="hidden" name="_token" value="tOCVbFlSUne96tRVFWBXdQLsxgkxqDM6YAuCBEmE"/>
                            <input type="hidden" name="_method" value="DELETE"/>
                              
                            <button class="btn btn-default look-a-like"><FontAwesomeIcon icon={faTrash}/></button>
                            </tr>
                            <tr>
                            <td>2021-02-09</td>
                            <td>No</td>
                            <td>Yes</td>
                            <td>No</td>
                                        
                            <input type="hidden" name="_token" value="tOCVbFlSUne96tRVFWBXdQLsxgkxqDM6YAuCBEmE"/>
                            <input type="hidden" name="_method" value="DELETE"/>
                              
                            <button class="btn btn-default look-a-like"><FontAwesomeIcon icon={faTrash}/></button>
                            </tr>
                            <tr>
                            <td>2021-03-09</td>
                            <td>No</td>
                            <td>Yes</td>
                            <td>No</td>
                                        
                            <input type="hidden" name="_token" value="tOCVbFlSUne96tRVFWBXdQLsxgkxqDM6YAuCBEmE"/>
                            <input type="hidden" name="_method" value="DELETE"/>
                              
                            <button class="btn btn-default look-a-like"><FontAwesomeIcon icon={faTrash}/></button>
                            </tr>
                        </tbody> 
                    </table>
                </div>
            </div>
            </div>
        </div>
    )
}