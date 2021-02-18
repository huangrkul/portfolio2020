import React, {useState, useEffect, useContext} from 'react';
import {store} from './store.js';
import { setAni } from '../js/snippets';

let seqTimer;

const Projects = (props) => {

  const globalState = useContext(store);
  const projects = globalState.state.projects;
  const [single, setSingle] = useState({
    singleImg: null,
    singleTitle: null,
    singleURL: null,
    singleGit: null,
    singleDesc: null
  });

  const initSequence = () => {
    let divId = 0;
    setAni('h1',0,'enter-bottom');
    const divList = document.querySelectorAll('.projects-list > div');
    seqTimer = setInterval(() => {
      if(divId < divList.length) {
        divList[divId].classList.add('section-enter');
        divId++;
      } else {
        clearInterval(seqTimer);
      }
    }, 50)
  }

  const openSingle = target => {
    setSingle({
      singleImg: target.img,
      singleTitle: target.title,
      singleUrl: target.url,
      singleGit: target.github,
      singleDesc: target.desc
    });
    document.querySelector('.projects-single').classList.toggle('projects-single-reveal');
  }

  const closeSingle = () => {
    document.querySelector('.projects-single').classList.toggle('projects-single-reveal');
  }

  useEffect(() => {
    initSequence();
    return(() => {
      clearInterval(seqTimer);
    })
  },[])

  return (
    <article className="projects-page">
      <h1 className="hide">WEB PROJECTS</h1>
      <section className="projects-list">
        {projects.map((project) => {
          return(
            <div onClick={() => openSingle(project)} className="hide" key={project.title}>
              <img src={project.img} />
              <h3 className="title-font">{project.title}</h3>
            </div>
          )
        })}
        <div></div>
      </section>
      <section className="projects-single">
        <div>
          <div className="title-font closeBtn"><button onClick={() => closeSingle()}>X</button></div>
          <h2 className="title-font">{single.singleTitle}</h2>
          <div>
            <section className="single-img">
              <img src={single.singleImg} />
            </section>
            <section className="single-detail">
              <p>{single.singleDesc}</p>
              <div className="buttons">
                <a href={single.singleUrl} target="_blank"><button>Website</button></a>
                <a href={single.singleGit} className={single.singleGit === null ? 'dis-none' : ''} target="_blank"><button>Github</button></a>
              </div>
            </section>
          </div>
        </div>
      </section>
    </article>
  )

}

export default Projects
