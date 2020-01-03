import React from 'react';

let seqTimer;

function initSequence() {
  let divId = 0;
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
    initSequence();
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
    return (
      <article className="projects-page">
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
              <button>Website</button>
              <button>Github</button>
            </div>
          </div>
        </section>
      </article>
    )
  }

}

