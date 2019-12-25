import React from 'react';
import SkillsDev from './SkillsDev';
import SkillsAni from './SkillsAni';
import { setAni } from '../js/snippets';

let seqTimer;

const urls = [
  '../../public/assets/profiles/profile-warm.png',
  '../../public/assets/profiles/profile-cold.png',
];

function initSequence() {
  setAni('.about-page',0,'fadein-top');
  setAni('.profile-section',300,'section-enter');
  setAni('.skills-section',450,'section-enter');
  setAni('.bio-section',550,'section-enter');
}

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loadSkillsComp: null};
  }

  componentDidMount() {
    initSequence();
    seqTimer = setTimeout(() => {this.setState({loadSkillsComp: 'dev'})}, 1000);
  }

  componentWillUnmount() {
    clearInterval(seqTimer);
  }

  switchSkill(target) {
    let devTab = document.querySelector('.skills-section > div:first-child > h2:first-child');
    let aniTab = document.querySelector('.skills-section > div:first-child > h2:last-child');

    if(this.state.loadSkillsComp !== target) {
      this.setState({loadSkillsComp: target});
      devTab.classList.toggle('active-tab');
      aniTab.classList.toggle('active-tab');
    }
  }

  render() {
    const weather = this.props.weatherData;
    let profileURL = weather.temp > 50 ? urls[0] : urls[1];
    let skillsComp;
    let profileBgColor;
    let profileBg;

    switch(this.state.loadSkillsComp) {
      case 'dev':
        skillsComp = <SkillsDev />;
        break;
      case 'ani':
        skillsComp = <SkillsAni />;
        break;
      default:
        skillsComp = null;
    }

    // switch(weather.bg){
    // }

    return (
      <article className="about-page hide">
        <div>
          <section className="skills-section hide">
            <div>
              <h2 onClick={() => this.switchSkill('dev')} className="dev-tab title-font active-tab">Developer</h2>
              <h2 onClick={() => this.switchSkill('ani')} className="ani-tab title-font">Animator</h2>
            </div>
            <div>
              {skillsComp}
            </div>
          </section>
        </div>
        <div>
          <section className="profile-section hide">
            <div className={`${profileBgColor} ${profileBg}`}>
              <img className="profile-image" src={profileURL} />
            </div>
            <ul>
              <li>Seattle<br/><span>({weather.summary})</span></li>
              <li><button>Photo</button></li>
              <li>{weather.temp}&#176;F</li>
              <li><button>Resume</button></li>
            </ul>
          </section>
          <section className="bio-section hide">
            <p>
              My name is Will Huang.  I am a front-end driven full-stack web developer.  My background is in animation and I am very passionate in creating interactive and engaging web experience.
            </p>  
            <p>
              I believe front-end development isn’t just using another layout template, but something much more.  It should be a work of art that reflects the developer’s creativity and technical innovation.
            </p>
            <p>
              In that regard, I am confident this is what I can bring to any team.  I worked in advertising for seven years both as motion designer and front end web developer.  I can efficiently produce high quality deliverables that are interactive and engaging.
            </p>
          </section>
        </div>
      </article>
    )
  }

}

