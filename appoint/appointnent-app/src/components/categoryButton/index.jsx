import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.css'
import { useNavigate } from 'react-router-dom'


export const Button = ({path, img ,name}) => {

    let navigate = useNavigate();

    const onSubmit = (event) => {
        event.preventDefault();
        
        navigate(path,{replace: true});
    }

    return (
        <div className='button-wrapper'>
            <button type='button' className='btn' onClick={onSubmit} >
                <FontAwesomeIcon icon={img} />
                <h1 className='id'>{name}</h1>
            </button>
            
        </div>
    )
}