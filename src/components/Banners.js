import React from 'react';
import { setAni } from '../js/snippets';
import bannersJson from '../js/banners';
import customsJson from '../js/customs';



export default class Banners extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setAni('h1',0,'enter-bottom');
    console.log(Object.keys(bannersJson[0].sizes));
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <article className="banners-page">
        <h1 className="hide">DIGITAL BANNERS</h1>
        <div className="banners-content">
          <section>
            <label htmlFor="standards">Standards:</label>
            <select id="standards">
              <option value="2">Choose a campaign</option>
            </select>
          </section>
          <section>
            
          </section>
        </div>
      </article>
    )
  }

}

