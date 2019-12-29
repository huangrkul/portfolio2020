import React from 'react';
import profileWarm from '../../public/assets/profiles/profile-warm.png';
import profileCold from '../../public/assets/profiles/profile-cold.png';

export default class AboutProfile extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.weather);
  }

  togglePhoto() {
    document.querySelector('.photo-box').classList.toggle('photo-hide');
  }

  render() {
    const weather = this.props.weather.weatherData;
    let profileURL = weather.temp > 50 ? profileWarm : profileCold;
    let profileBgColor;
    let profileBg;
    let resume = "https://docs.google.com/document/d/1saDtEUnkRsreD38D4LsmqwNWBbCXTW76uXOyCpsFjhM/edit?usp=sharing";

    switch(weather.bg){
      case 'clear-day':
        profileBgColor = 'profile-bg-day';
        profileBg = 'profile-bg-sun';
        break;
      case 'clear-night':
        profileBgColor = 'profile-bg-night';
        profileBg = 'profile-bg-moon';
        break;
      case 'rain':
        profileBgColor = 'profile-bg-dark';
        profileBg = 'profile-bg-rain';
        break;
      case 'snow':
        profileBgColor = 'profile-bg-gray';
        profileBg = 'profile-bg-cloudy';
        break;
      case 'sleet':
        profileBgColor = 'profile-bg-gray';
        profileBg = 'profile-bg-cloudy';
        break;
      case 'wind':
        profileBgColor = 'profile-bg-dark';
        profileBg = 'profile-bg-cloudy';
        break;
      case 'fog':
        profileBgColor = 'profile-bg-dark';
        profileBg = 'profile-bg-cloudy';
        break;
      case 'cloudy':
        profileBgColor = 'profile-bg-dark';
        profileBg = 'profile-bg-cloudy';
        break;
      case 'partly-cloudy-day':
        profileBgColor = 'profile-bg-gray';
        profileBg = 'profile-bg-sun-cloudy';
        break;
      case 'partly-cloudy-night':
        profileBgColor = 'profile-bg-night';
        profileBg = 'profile-bg-moon-cloudy';
        break;
      default:
        profileBgColor = 'profile-bg-day';
        profileBg = 'profile-bg-sun';
    }

    return (
      <section className="profile-section hide">
        <div className={`${profileBgColor} ${profileBg}`}>
          <img className="profile-image" src={profileURL} />
        </div>
        <ul>
          <li>Seattle<br/><span>({weather.summary})</span></li>
          <li><button onClick={() => this.togglePhoto()}>Photo</button></li>
          <li>{weather.temp}&#176;F</li>
          <li><a href={resume} target="_blank"><button>Resume</button></a></li>
        </ul>
        <div className="photo-box photo-hide">
          <button onClick={() => this.togglePhoto()} className="title-font photo-close">X</button>
        </div>
      </section>
    )
  }

}

