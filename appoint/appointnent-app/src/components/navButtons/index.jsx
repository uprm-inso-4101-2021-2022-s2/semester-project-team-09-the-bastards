import './index.css';
import { Link } from 'react-router-dom';

export const NavButtons = ({name, url, Btnfunction, style, size, children}) => {

    return (
        <Link to={url} className='btn-mobile'>
            <button type="button" className="nav-button" src={url} onClick={Btnfunction(this)} >{name}</button>
        </Link>
            


    )
}

