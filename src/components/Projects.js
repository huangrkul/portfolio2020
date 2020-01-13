import React from 'react';
import { setAni } from '../js/snippets';

let seqTimer;

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleImg: null, 
      singleTitle: null, 
      singleUrl: null,
      singleGit: null,
      singleDesc: null
    };
  }

  componentDidMount() {
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

  componentWillUnmount() {
    clearInterval(seqTimer);
  }

  openSingle(target) {
    this.setState({
      singleImg: target.img,
      singleTitle: target.title,
      singleUrl: target.url,
      singleGit: target.github,
      singleDesc: target.desc
    });
    document.querySelector('.projects-single').classList.toggle('projects-single-reveal');
  }

  closeSingle() {
    document.querySelector('.projects-single').classList.toggle('projects-single-reveal');
  }

  render() {
    let projects = this.props.allProjects;
    console.log(this.state.singleGit);
    return (
      <article className="projects-page">
        <h1 className="hide">WEB PROJECTS</h1>
        <section className="projects-list">
          {projects.map((project) => {
            return(
              <div onClick={() => this.openSingle(project)} className="hide" key={project.title}>
                <img src={project.img} />
                <h3 className="title-font">{project.title}</h3>
              </div>
            )
          })}
          <div></div>
        </section>
        <section className="projects-single">
          <div>
            <div className="title-font closeBtn"><button onClick={() => this.closeSingle()}>X</button></div>
            <h2 className="title-font">{this.state.singleTitle}</h2>
            <img src={this.state.singleImg} />
            <p>{this.state.singleDesc}</p>
            <div className="buttons">
              <a href={this.state.singleUrl} target="_blank"><button>Website</button></a>
              <a href={this.state.singleGit} className={this.state.singleGit === null ? 'dis-none' : ''} target="_blank"><button>Github</button></a>
            </div>
          </div>
        </section>
      </article>
    )
  }

}

