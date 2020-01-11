import React from 'react';
import { setAni } from '../js/snippets';
import bannersJson from '../js/banners';
import customsJson from '../js/customs';

function Banner(banner) {
  this.title = banner.title;
  this.sizes = banner.sizes;
}

function Custom(custom) {
  this.title = custom.title;
  this.url = custom.url;
  this.width = custom.width;
  this.height = custom.height;
}

export default class Banners extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      default: 'Banners best viewed on desktop full screen as they were not designed for mobile.',
      bannersArray: [], 
      customsArray: [], 
      currentUnit: null,
      title: '', 
      sizes: [],
      url: '',
      urlWidth: 0,
      urlHeight: 0
    };
  }

  componentDidMount() {
    let banners = bannersJson.map(banner => {
      return new Banner(banner);
    });
    let customs = customsJson.map(custom => {
      return new Custom(custom);
    })
    this.setState({bannersArray: banners});
    this.setState({customsArray: customs});
    setAni('h1',0,'enter-bottom');
    setAni('.banners-content',0,'reveal');
    setAni('.banners-content > section:first-child > div:first-child',100,'enter-bottom');
    setAni('.banners-content > section:first-child > div:last-child',200,'enter-bottom');
    setAni('.iframe-box',300,'scale-x-reveal');
    setAni('.iframe-box',700,'scale-y-reveal');
    setAni('.iframe-box div:first-child',1200,'reveal');
  }

  bannerHandler(e) {
    let bannerData = this.state.bannersArray[e.target.value];
    let bannerSizes = bannerData.sizes.map(size => {
      return size[0];
    })
    this.setState({
      default: null,
      currentUnit: bannerData,
      title: bannerData.title,
      sizes: bannerSizes,
      url: bannerData.sizes[0][1],
      urlWidth: bannerData.sizes[0][2],
      urlHeight: bannerData.sizes[0][3]
    })
  }

  customHandler(e) {
    let customData = this.state.customsArray[e.target.value];
    console.log(customData);
    this.setState({
      default: null,
      currentUnit: null,
      title: customData.title,
      sizes: [],
      url: customData.url,
      urlWidth: customData.width,
      urlHeight: customData.height
    })
  }

  sizeChange(e) {
    let num = e.target.value;
    this.setState({
      url: this.state.currentUnit.sizes[num][1],
      urlWidth: this.state.currentUnit.sizes[num][2],
      urlHeight: this.state.currentUnit.sizes[num][3]
    })
  }

  render() {
    return (
      <article className="banners-page">
        <h1 className="hide">DIGITAL BANNERS</h1>
        <div className="banners-content hide">
          <section>
            <div className="hide">
              <label htmlFor="standards">Standards:</label>
              <select id="standards" onChange={(event) => this.bannerHandler(event)}>
                <option value="">Choose a campaign</option>
                {this.state.bannersArray.map((banner, idx) => {
                  return (
                    <option value={idx} key={idx}>{banner.title}</option>
                  )
                })}
              </select>
            </div>
            <div className="hide">
              <label htmlFor="customs">Customs:</label>
              <select id="customs" onChange={(event) => this.customHandler(event)}>
                <option value="">Choose a campaign (T-Mobile Only)</option>
                {this.state.customsArray.map((custom, idx) => {
                  return (
                    <option value={idx} key={idx}>{custom.title}</option>
                  )
                })}
              </select>
            </div>
          </section>
          <section>
            <div className="heading">
              <h2 className="title-font">{this.state.title}</h2>
              <aside>
                {this.state.sizes.map((size, idx) => {
                  return(
                    <button onClick={(event) => this.sizeChange(event)} key={idx} value={idx}>{size}</button>
                  )
                })}
              </aside>
            </div>
            <div className="iframe-box hide">
              <div className="hide">{this.state.default}</div>
              <iframe src={this.state.url} width={this.state.urlWidth} height={this.state.urlHeight} scrolling="no"></iframe>
            </div>
          </section>
        </div>
      </article>
    )
  }
}

