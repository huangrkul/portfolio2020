import React from 'react';
import BioDev from './BioDev';

const urls = [
  '../../public/assets/profiles/profile-warm.png',
  '../../public/assets/profiles/profile-cold.png',
];

export default class About extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.temp);
    this.state = {imgURL: urls[0], bgClass: 'profile-default-bg'};
    console.log(this.state);
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <article className="about-page">
        <div>
          <section className="skills-section">
            <div>
              <h2 className="dev-tab title-font active-tab">Developer</h2>
              <h2 className="ani-tab title-font">Animator</h2>
            </div>
            <div>
              <BioDev />
            </div>
          </section>
        </div>
        <div>
          <section className="profile-section">
            <div className={`profile-bg ${this.state.bgClass}`}>
              <img src={this.state.imgURL} />
            </div>
            <ul>
              <li>Seattle<br/><span>({this.props.bg})</span></li>
              <li><button>Photo</button></li>
              <li>{this.props.temp}&#176;F</li>
              <li><button>Resume</button></li>
            </ul>
          </section>
          <section className="bio-section">
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

