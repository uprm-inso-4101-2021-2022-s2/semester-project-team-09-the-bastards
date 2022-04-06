import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './index.css';

export const Hero = () => {
    return (
        <div className="hero-container">
            <h1>
                <span>Find local</span> <span id="span-thing">Doctors</span> <span>who will take your insurance</span>
            </h1>
            <div className="hero-search-thingy">
                <div>
                    <input placeholder="Condition, specialty" type="text" />
                </div>
                <div>
                    <input placeholder="City, state, or zip code" type="text" />
                </div>
                <div>
                    <input placeholder="Appoint date" type="text" />
                </div>
                <div>
                    <button className="search-hero-btn" title="Search for doctors" type="submit" tabindex="0">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>
        </div>
    )
}

{/* <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  ); */}