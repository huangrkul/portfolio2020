import React, {useEffect} from 'react';
import { setAni } from '../js/snippets';


const AboutSkillsAni = (props) => {

  useEffect(() => {
    setAni('.skills-ani-section',0,'dev-section-reveal');
    const headline1 = document.querySelectorAll('.skills-ani-section > h3:first-of-type > div');
    headline1.forEach((item, id) => {
      setTimeout(() => {
        item.classList.add('dev-headline-seq1');
      }, id * 15)
    }) 

    const headline2 = document.querySelectorAll('.skills-ani-section > h3:last-of-type > div');
    headline2.forEach((item, id) => {
      setTimeout(() => {
        item.classList.add('dev-headline-seq2');
      }, id * 15)
    }) 
  },[])

  return (
    <section data-testid='ani-component' className="skills-ani-section hide">
      <h3>
        {[...'EXPERIENCE AND EDUCATION'].map((char, idx) => {
          return(
            <div key={idx} className="hide title-font">{char}</div>
          )
        })}
      </h3>
      <p>Multimedia Developer / Animator / Illustrator at MediaPro (2020 - 2021)</p>
      <p>Motion Designer at Publicis (2011 - 2019)</p>
      <p>Master of Fine Art Degree in 3D Character Animation - Academy of Art University (2006 - 2009)</p>

      <h3>
        {[...'TOOLS'].map((char, idx) => {
          return(
            <div key={idx} className="hide title-font">{char}</div>
          )
        })}
      </h3>
      <p>Adobe(CC) Photoshop, Animate, Audition, Illustrator, After Effects, and Maya 3D (2008), </p>
    </section>
  )

}

export default AboutSkillsAni;
