import React from 'react';
import { setAni } from '../js/snippets';

let titleTimer;

function initSequence() {
  setAni('.logo-container img:first-child', 0, 'logo-enter');
  setAni('.logo-container img:nth-child(2)', 300, 'logo-enter');
  setAni('.logo-container img:last-child', 600, 'logo-enter-hero');
  setAni('.title-container div:first-child', 1000, 'logo-animate');
  setAni('.title-container div:nth-child(2) img:first-child', 2000, 'huang-inbtm');
  setAni('.title-container div:nth-child(2) img:last-child', 2000, 'huang-intop');
  setTimeout(() => {titleSequence()},2500);
}

function titleSequence() {
  const titleArray = [
    "Front-End Web Developer",
    "2D/3D Animator",
    "Banner Making Machine",
    "Video Content Creator"
  ];
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

export default class Homepage extends React.Component {

  componentDidMount() {
    initSequence();
  }

  componentWillUnmount() {
    clearInterval(titleTimer);
  }

  render() {
    return (
      <article className="homepage">
        <div>
          <section className="logo-container logo-enter-hero">
            <img className="hide" src="../../public/assets/homepage/logo-white.png"/>
            <img className="hide" src="../../public/assets/homepage/logo-circle.png"/>
            <img className="hide" src="../../public/assets/homepage/logo.png"/>
          </section>
        </div>
        <div>
          <section className="title-container">
            <div></div>
            <div>
              <img className="hide" src="../../public/assets/homepage/title-hag.png"/>
              <img className="hide" src="../../public/assets/homepage/title-un.png"/>
            </div>
            <div className="title-seq hide"></div>
          </section>
        </div>
      </article>
    )
  }

}

