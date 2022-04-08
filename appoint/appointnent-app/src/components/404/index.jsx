import { useNavigate } from 'react-router-dom';
import './index.css';

export const Error = () => {
    const navigate = useNavigate();


    return(
        <div className="404">
            <h1><span>Oops!</span> This is awkard... You're looking for something that doesn't actually exist.</h1>
            <img src="" alt="cute-lil-ghost" />
            <button onClick={() => navigate("/")}>Don't worry lad, lead the way</button>
        </div>
    )
}