import React from 'react';

let seqTimer;

function initSequence() {
}

export default class ProjectsSingle extends React.Component {
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
      <div>

      </div>
    )
  }

}

