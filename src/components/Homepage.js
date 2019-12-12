import React from 'react';
import { setAni } from '../js/snippets';

function initSequence() {
  setAni('.logo-container img:first-child', 0, 'logo-enter');
  setAni('.logo-container img:nth-child(2)', 300, 'logo-enter');
  setAni('.logo-container img:last-child', 600, 'logo-enter-hero');
  setAni('.title-container div:first-child', 1000, 'logo-animate');
  setAni('.title-container div:last-child img:first-child', 2000, 'huang-inbtm');
  setAni('.title-container div:last-child img:last-child', 2000, 'huang-intop');
}

export default class Homepage extends React.Component {

  componentDidMount() {
    initSequence();
  }

  render() {
    return (
      <article className="homepage">
        <div>
          <section className="logo-container logo-enter-hero">
            <img className="hide" src="../../public/assets/homepage/logo-white.png"/>
            <img className="hide" src="../../public/assets/homepage/logo-circle.png"/>
            <img className="hide" src="../../public/assets/homepage/logo.png"/>
          </section>
        </div>
        <div>
          <section className="title-container">
            <div></div>
            <div>
              <img className="hide" src="../../public/assets/homepage/title-hag.png"/>
              <img className="hide" src="../../public/assets/homepage/title-un.png"/>
            </div>
          </section>
        </div>
      </article>
    )
  }

}

