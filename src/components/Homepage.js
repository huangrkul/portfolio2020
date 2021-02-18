import React, {useEffect} from 'react';
import { setAni } from '../js/snippets';
import logoWhite from '../../public/assets/homepage/logo-white.png';
import logoCircle from '../../public/assets/homepage/logo-circle.png';
import logo from '../../public/assets/homepage/logo.png';
import titleHag from '../../public/assets/homepage/title-hag.png';
import titleUn from '../../public/assets/homepage/title-un.png';

let titleTimer;

const titleArray = [
  "Front-End Web Developer",
  "Multimedia Developer",
  "2D Animator",
  "Banner Making Machine"
];

const Homepage = (props) => {

  const titleSequence = () => {
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

  useEffect(() => {
    setAni('.logo-container img:first-child', 0, 'logo-enter');
    setAni('.logo-container img:nth-child(2)', 300, 'logo-enter');
    setAni('.logo-container img:last-child', 600, 'logo-enter-hero');
    setAni('.title-container div:first-child', 1000, 'logo-animate');
    setAni('.title-container div:nth-child(2) img:first-child', 1800, 'huang-inbtm');
    setAni('.title-container div:nth-child(2) img:last-child', 1800, 'huang-intop');
    setTimeout(() => {titleSequence()},2500);
    setAni('.homepage ul', 2700, 'enter-bottom');
    setAni('.homepage ul li:nth-child(1)', 3000, 'section-enter');
    setAni('.homepage ul li:nth-child(2)', 3100, 'section-enter');
    setAni('.homepage ul li:nth-child(3)', 3200, 'section-enter');
    setAni('.homepage ul li:nth-child(4)', 3300, 'section-enter');
    setAni('.homepage ul li:nth-child(5)', 3400, 'section-enter');
    setAni('h6', 4000, 'enter-bottom');

    return(() => {
      clearTimeout(titleTimer);
    })
  },[])


  return (
    <article className="homepage">
      <section className="logo-title">
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
      </section>
      <ul className='hide'>
        <li className='hide' onClick={() => props.changePage('btnAbout')}>Profile</li>
        <li className='hide' onClick={() => props.changePage('btnProjects')}>Projects</li>
        <li className='hide' onClick={() => props.changePage('btnBanners')}>Banners</li>
        <li className='hide' onClick={() => props.changePage('btnDemo')}>Demos</li>
        <li className='hide' onClick={() => props.changePage('btnContact')}>Contact</li>
      </ul>
      <h6 className='hide'>(Last updated: 2/17/21) Copyright &copy; 2021 William Huang / huangrkul@gmail.com.  All Rights Reserved</h6>
    </article>
  )
}

export default Homepage;

