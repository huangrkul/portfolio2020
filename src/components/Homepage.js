import React from 'react';
import { setAni } from '../js/snippets';
import logoWhite from '../../public/assets/homepage/logo-white.png';
import logoCircle from '../../public/assets/homepage/logo-circle.png';
import logo from '../../public/assets/homepage/logo.png';
import titleHag from '../../public/assets/homepage/title-hag.png';
import titleUn from '../../public/assets/homepage/title-un.png';

let titleTimer;

const titleArray = [
  "Front-End Web Developer",
  "2D/3D Animator",
  "Banner Making Machine",
  "Video Content Creator"
];

export default class Homepage extends React.Component {

  titleSequence() {
    const titleDiv = document.querySelector('.title-seq');
    let num = 0;
    titleDiv.innerText = titleArray[num];
    titleDiv.classList.add('title-seq-intop');
    num++;
    titleTimer = setInterval(() => {
      titleDiv.classList.remove('title-seq-intop');
      titleDiv.classList.add('title-seq-outbtm');
      setTimeout(() => {
        titleDiv.innerText = titleArray[num];
        titleDiv.classList.remove('title-seq-outbtm');
        titleDiv.classList.add('title-seq-intop');
        num = num === titleArray.length - 1 ? 0 : num + 1;
      }, 300);
    }, 3000);
  }

  componentDidMount() {
    setAni('.logo-container img:first-child', 0, 'logo-enter');
    setAni('.logo-container img:nth-child(2)', 300, 'logo-enter');
    setAni('.logo-container img:last-child', 600, 'logo-enter-hero');
    setAni('.title-container div:first-child', 1000, 'logo-animate');
    setAni('.title-container div:nth-child(2) img:first-child', 2000, 'huang-inbtm');
    setAni('.title-container div:nth-child(2) img:last-child', 2000, 'huang-intop');
    setTimeout(() => {this.titleSequence()},2500);
  }

  componentWillUnmount() {
    clearInterval(titleTimer);
  }

  render() {
    return (
      <article className="homepage">
        <div>
          <section className="logo-container logo-enter-hero">
            <img className="hide" src={logoWhite} />
            <img className="hide" src={logoCircle}/>
            <img className="hide" src={logo}/>
          </section>
        </div>
        <div>
          <section className="title-container">
            <div></div>
            <div>
              <img className="hide" src={titleHag}/>
              <img className="hide" src={titleUn}/>
            </div>
            <div className="title-seq hide"></div>
          </section>
        </div>
      </article>
    )
  }

}

