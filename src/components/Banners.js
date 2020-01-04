import React from 'react';
import { setAni } from '../js/snippets';

export default class Banners extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setAni('h1',0,'enter-bottom');
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <article className="banners-page">
        <h1 className="hide">DIGITAL BANNERS</h1>
        <div className="banners-content"></div>
      </article>
    )
  }

}

