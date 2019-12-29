import React from 'react';
import projects from '../js/projects';
import { setAni } from '../js/snippets';

let seqTimer;

function Project(img, url, git) {
  this.img = img;
  this.url = url;
  this.git = git;
}


function initSequence() {
}

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    initSequence();
    console.log(projects);
  }

  componentWillUnmount() {
    clearInterval(seqTimer);
  }

  render() {
    return (
      <article className="projects-page">
      </article>
    )
  }

}

