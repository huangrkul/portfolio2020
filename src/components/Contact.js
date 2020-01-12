import React from 'react';
import { setAni } from '../js/snippets';
import willsaurIdle from '../../public/assets/willsaur/willsaur-idle.png';
import willsaurWave from '../../public/assets/willsaur/willsaur-wave.png';

let sqTimer;

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {willsaur:'willsaur-wave'}
  }

  componentDidMount() {
    setAni('h1',0,'enter-bottom');
    sqTimer = setTimeout(() => {
      this.setState({willsaur:'willsaur-idle'});
    }, 3000)
  }

  componentWillUnmount() {
    clearTimeout(sqTimer);
  }

  render() {
    return (
      <article className="contact-page">
        <h1 className="hide">CONTACT ME</h1>
        <div className="contact-content">
          <section>
            <h2 className="title-font">Thank you for visiting!</h2>
            <p>huangrkul@gmail.com</p>
            <p>https://www.linkedin.com/in/willhuang/</p>
          </section>
          <section>
            <div 
              onMouseOver={() => this.setState({willsaur:'willsaur-wave'})}
              onMouseOut={() => this.setState({willsaur:'willsaur-idle'})}
              className={this.state.willsaur}></div>
          </section>
        </div>
        <div className="preload">
          <img src={willsaurIdle} />
          <img src={willsaurWave} />
        </div>
      </article>
    )
  }

}

