import React from 'react';
import ProjectsSingle from './ProjectsSingle';
import { setAni } from '../js/snippets';

let seqTimer;

function initSequence() {
  let divId = 0;
  const divList = document.querySelectorAll('.projects-list > div');
  console.log(divList);
  seqTimer = setInterval(() => {
    if(divId < divList.length) {
      divList[divId].classList.add('section-enter');
      divId++;
    } else {
      clearInterval(seqTimer);
    }
  }, 50)
}

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    initSequence();
  }

  componentWillUnmount() {
    clearInterval(seqTimer);
  }

  render() {
    console.log(this.props.allProjects);
    let projects = this.props.allProjects;
    return (
      <article className="projects-page">
        <section className="projects-list">
          {projects.map(project => {
            return(
              <div className="hide" key={project.title}>
                <img src={project.img} />
                <h3 className="title-font">{project.title}</h3>
              </div>
            )
          })}
          <div></div>
        </section>
        <section className="projects-single">
          <ProjectsSingle />
        </section>
      </article>
    )
  }

}

