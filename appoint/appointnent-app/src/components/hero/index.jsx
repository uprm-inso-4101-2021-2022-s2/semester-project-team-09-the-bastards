import { useState,  useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './index.css';

export const Hero = () => {
  const wording = ['doctors', 'medics', 'physicians', 'therapists'];

  const [seconds, setSeconds] = useState(0);
  const [showHeroWording, setShowHeroWording] = useState(wording[seconds]);


  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 2500);
    setShowHeroWording(newWord => newWord = wording[seconds]);
    if (seconds >= wording.length) {
      setSeconds(seconds => seconds = 0)
    }
    return () => clearInterval(interval);
  }, [showHeroWording, seconds]);



    return (
        <div className="hero-container">
            <h1>
                <span>Find local</span> <span id="span-thing">{showHeroWording}</span> <span>who will attend your needs</span>
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