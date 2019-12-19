import React from 'react';
import BioDev from './BioDev';

export default class About extends React.Component {
  constructor(props) {
    super(props);
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
            
          </section>
          <section className="bio-section"></section>
        </div>
      </article>
    )
  }

}

