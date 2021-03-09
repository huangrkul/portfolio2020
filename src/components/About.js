import React, {useState, useEffect} from 'react';
import AboutSkillsDev from './AboutSkillsDev';
import AboutSkillsAni from './AboutSkillsAni';
import AboutProfile from './AboutProfile';
import { setAni, setClass } from '../js/snippets';


const About = (props) => {

  const displayPage = {
    dev: () => <AboutSkillsDev />,
    ani: () => <AboutSkillsAni />
  }
  const [skills, setSkills] = useState(displayPage.dev());
  const [tab, setTab] = useState('dev');

  const switchSkill = target => {
    setSkills(displayPage[target]());
    setTab(target);
  }

  useEffect(() => {
    setAni('h1',0,'enter-bottom');
    setAni('.about-content',0,'fadein-left');
    setAni('.skills-section',300,'fadein-left');
    setAni('.bio-section',400,'fadein-bottom');
    setAni('.profile-section',500,'fadein-top');
    setAni('.dev-tab',1000,'bump');
    setAni('.ani-tab',1100,'bump');
  },[])

  return (
    <article className="about-page">
      <h1 className="hide">PROFILE</h1>
      <div className="about-content hide">
        <div>
          <section className="skills-section hide">
            <div>
              <h2 data-testid='dev-button' onClick={() => switchSkill('dev')} className={`dev-tab title-font ${tab === 'dev' ? 'active-tab' : ''}`}>Developer</h2>
              <h2 data-testid='ani-button' onClick={() => switchSkill('ani')} className={`ani-tab title-font ${tab === 'dev' ? '' : 'active-tab'}`}>Animator</h2>
            </div>
            <div>
              {skills}
            </div>
          </section>
        </div>
        <div>
          <AboutProfile />
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

export default About;
