import React, {useState, useEffect, useContext} from 'react';
import profileWarm from '../../public/assets/profiles/profile-warm.png';
import profileCold from '../../public/assets/profiles/profile-cold.png';
import {store} from './store.js';

const resume = "http://willhuanganimator.com/media/william-huang-resume.pdf";

const AboutProfile = (props) => {
  const globalState = useContext(store);
  const [temp, setTemp] = useState('??');
  const [summary, setSummary] = useState('LOADING...');
  const [profileURL, setProfileURL] = useState(profileWarm);
  const [profileBgColor, setProfileBgColor] = useState('profile-bg-day');
  const [profileBg, setProfileBg] = useState('profile-bg-sun');

  const togglePhoto = () => {
    document.querySelector('.photo-box').classList.toggle('photo-hide');
  }

  const populate = weatherData => {
    const temperature = Math.round(weatherData.temp * 10) / 10;
    const profile = weatherData.temp > 65 ? profileWarm : profileCold;
    setProfileURL(profile);
    setTemp(temperature);
    setSummary(weatherData.summary);

    switch(weatherData.bg){
      case 'clear-day':
        setProfileBgColor('profile-bg-day');
        setProfileBg('profile-bg-sun');
        break;
      case 'clear-night':
        setProfileBgColor('profile-bg-night');
        setProfileBg('profile-bg-moon');
        break;
      case 'rain':
        setProfileBgColor('profile-bg-dark');
        setProfileBg('profile-bg-rain');
        break;
      case 'snow':
        setProfileBgColor('profile-bg-gray');
        setProfileBg('profile-bg-snow');
        break;
      case 'sleet':
        setProfileBgColor('profile-bg-gray');
        setProfileBg('profile-bg-snow');
        break;
      case 'wind':
        setProfileBgColor('profile-bg-dark');
        setProfileBg('profile-bg-cloudy');
        break;
      case 'fog':
        setProfileBgColor('profile-bg-dark');
        setProfileBg('profile-bg-cloudy');
        break;
      case 'cloudy':
        setProfileBgColor('profile-bg-dark');
        setProfileBg('profile-bg-cloudy');
        break;
      case 'partly-cloudy-day':
        setProfileBgColor('profile-bg-gray');
        setProfileBg('profile-bg-sun-cloudy');
        break;
      case 'partly-cloudy-night':
        setProfileBgColor('profile-bg-night');
        setProfileBg('profile-bg-moon-cloudy');
        break;
      default:
        setProfileBgColor('profile-bg-day');
        setProfileBg('profile-bg-sun');
    }
  }

  useEffect(() => {
    if(globalState.state.weather !== null){
      populate(globalState.state.weather);
    }
  },[globalState.state.weather]) 

  return (
    <section className="profile-section hide">
      <div className={`${profileBgColor} ${profileBg}`}>
        <img className="profile-image" src={profileURL} />
      </div>
      <ul>
        <li>Seattle<br/><span>({summary})</span></li>
        <li><button data-testid='photo-button' onClick={() => togglePhoto()}>Photo</button></li>
        <li>{temp}&#176;F</li>
        <li><a href={resume} target="_blank"><button>Resume</button></a></li>
      </ul>
      <div data-testid='photobox' className="photo-box photo-hide">
        <button data-testid='photo-button-exit' onClick={() => togglePhoto()} className="title-font photo-close">X</button>
      </div>
    </section>
  )

}

export default AboutProfile;

