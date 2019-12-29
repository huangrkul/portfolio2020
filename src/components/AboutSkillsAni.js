import React from 'react';
import { setAni } from '../js/snippets';

let seqTimer;

export default class AboutSkillsAni extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setAni('.skills-ani-section',0,'dev-section-reveal');

    seqTimer = setTimeout(() => {
      const headline1 = document.querySelectorAll('.skills-ani-section > h3:first-of-type > div');
      headline1.forEach((item, id) => {
        setTimeout(() => {
          item.classList.add('dev-headline-seq1');
        }, id * 20)
      }) 
  
      const headline2 = document.querySelectorAll('.skills-ani-section > h3:last-of-type > div');
      headline2.forEach((item, id) => {
        setTimeout(() => {
          item.classList.add('dev-headline-seq2');
        }, id * 20)
      }) 
    }, 300);

  }

  componentWillUnmount() {
    clearInterval(seqTimer);
  }

  render() {
    return (
      <section className="skills-ani-section hide">
        <h3>
          {[...'EXPERIENCE AND EDUCATION'].map((char, idx) => {
            return(
              <div key={idx} className="hide title-font">{char}</div>
            )
          })}
        </h3>
        <p>Motion Designer at Publicis (2011 ~ 2019)</p>
        <p>Master of Fine Art Degree in 3D Character Animation - Academy of Art University (2006 ~ 2009)</p>

        <h3>
          {[...'TOOLS'].map((char, idx) => {
            return(
              <div key={idx} className="hide title-font">{char}</div>
            )
          })}
        </h3>
        <p>Adobe(CC) Photoshop, Animate, Illustrator, After Effects, and Maya 3D (2008), </p>
      </section>
    )
  }

}

