import React from 'react';

export default class HeaderBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hovering: false}
    this.handleOver = this.handleOver.bind(this)
    this.handleOut = this.handleOut.bind(this)
  }

  handleOver() {
    this.setState({hovering: true})
  }

  handleOut() {
    this.setState({hovering: false})
  }

  render() {
    const btnId = this.props.buttonId;
    return (
        <div
            className={`${btnId} ${btnId}-${this.state.hovering ? 'hover' : 'out'}`}
            onMouseOver={this.handleOver}
            onMouseOut={this.handleOut}
        />
    )
  }
}