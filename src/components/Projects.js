import React from 'react';
import { setAni } from '../js/snippets';

let seqTimer;

function initSequence() {
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
              <div>
                <img src={project.img} />
                <h2 className="title-font">{project.title}</h2>
              </div>
            )
          })}
        </section>
      </article>
    )
  }

}

