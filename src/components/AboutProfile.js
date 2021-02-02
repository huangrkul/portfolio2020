import React from 'react';
import profileWarm from '../../public/assets/profiles/profile-warm.png';
import profileCold from '../../public/assets/profiles/profile-cold.png';

let timer;

export default class AboutProfile extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      temp: '??',
      summary: '??',
      profileURL: profileWarm,
      profileBgColor: 'profile-bg-day', 
      profileBg: 'profile-bg-sun',
    };
  }

  togglePhoto() {
    document.querySelector('.photo-box').classList.toggle('photo-hide');
  }

  populate() {

    const weather = this.props.weather.weatherData;
    const temperature = Math.round(weather.temp * 10) / 10;
    let profile = weather.temp > 65 ? profileWarm : profileCold;
    this.setState({profileURL: profile});
    this.setState({temp: temperature});
    this.setState({summary: weather.summary});

    switch(weather.bg){
      case 'clear-day':
        this.setState({profileBgColor: 'profile-bg-day'});
        this.setState({profileBg: 'profile-bg-sun'});
        break;
      case 'clear-night':
        this.setState({profileBgColor: 'profile-bg-night'});
        this.setState({profileBg: 'profile-bg-moon'});
        break;
      case 'rain':
        this.setState({profileBgColor: 'profile-bg-dark'});
        this.setState({profileBg: 'profile-bg-rain'});
        break;
      case 'snow':
        this.setState({profileBgColor: 'profile-bg-gray'});
        this.setState({profileBg: 'profile-bg-snow'});
        break;
      case 'sleet':
        this.setState({profileBgColor: 'profile-bg-gray'});
        this.setState({profileBg: 'profile-bg-snow'});
        break;
      case 'wind':
        this.setState({profileBgColor: 'profile-bg-dark'});
        this.setState({profileBg: 'profile-bg-cloudy'});
        break;
      case 'fog':
        this.setState({profileBgColor: 'profile-bg-dark'});
        this.setState({profileBg: 'profile-bg-cloudy'});
        break;
      case 'cloudy':
        this.setState({profileBgColor: 'profile-bg-dark'});
        this.setState({profileBg: 'profile-bg-cloudy'});
        break;
      case 'partly-cloudy-day':
        this.setState({profileBgColor: 'profile-bg-gray'});
        this.setState({profileBg: 'profile-bg-sun-cloudy'});
        break;
      case 'partly-cloudy-night':
        this.setState({profileBgColor: 'profile-bg-night'});
        this.setState({profileBg: 'profile-bg-moon-cloudy'});
        break;
      default:
        this.setState({profileBgColor: 'profile-bg-day'});
        this.setState({profileBg: 'profile-bg-sun'});
    }
  }

  componentWillUnmount() {
    clearInterval(timer);
  }

  componentDidMount() {
    timer = setInterval(() => {
      if(this.props.weather.weatherData !== null) {
        this.populate();
        clearInterval(timer);
      }
    }, 500)
  }

  render() {
    let resume = "http://willhuanganimator.com/media/william-huang-resume.pdf";

    return (
      <section className="profile-section hide">
        <div className={`${this.state.profileBgColor} ${this.state.profileBg}`}>
          <img className="profile-image" src={this.state.profileURL} />
        </div>
        <ul>
          <li>Seattle<br/><span>({this.state.summary})</span></li>
          <li><button onClick={() => this.togglePhoto()}>Photo</button></li>
          <li>{this.state.temp}&#176;F</li>
          <li><a href={resume} target="_blank"><button>Resume</button></a></li>
        </ul>
        <div className="photo-box photo-hide">
          <button onClick={() => this.togglePhoto()} className="title-font photo-close">X</button>
        </div>
      </section>
    )
  }

}

