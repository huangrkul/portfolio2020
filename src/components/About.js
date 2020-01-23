import React from 'react';
import AboutSkillsDev from './AboutSkillsDev';
import AboutSkillsAni from './AboutSkillsAni';
import AboutProfile from './AboutProfile';
import { setAni } from '../js/snippets';

export default class About extends React.Component {
  
  state = {loadSkillsComp: 'dev'};

  componentDidMount() {
    setAni('h1',0,'enter-bottom');
    setAni('.about-content',0,'fadein-left');
    setAni('.skills-section',300,'fadein-left');
    setAni('.bio-section',400,'fadein-bottom');
    setAni('.profile-section',500,'fadein-top');
    setAni('.dev-tab',1000,'bump');
    setAni('.ani-tab',1100,'bump');
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
    let skillsComp;

    switch(this.state.loadSkillsComp) {
      case 'dev':
        skillsComp = <AboutSkillsDev />;
        break;
      case 'ani':
        skillsComp = <AboutSkillsAni />;
        break;
      default:
        skillsComp = <AboutSkillsDev />;
    }

    return (
      <article className="about-page">
        <h1 className="hide">PROFILE</h1>
        <div className="about-content hide">
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
            <AboutProfile weather={this.props} />
            <section className="bio-section hide">
              <p>
                My name is Will Huang.  I am a front-end driven full-stack web developer.  My background is in animation, and I am very passionate about creating interactive and engaging web experiences.
              </p> 
            </section>
          </div>
        </div>
      </article>
    )
  }

}

