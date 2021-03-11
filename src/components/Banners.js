import React, {useState, useEffect} from 'react';
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

const Banners = (props) => {
  const [bannersArray, setBannersArray] = useState([]);
  const [customsArray, setCustomsArray] = useState([]);
  const [currentUnit, setCurrentUnit] = useState(null);
  const [unit, setUnit] = useState({
    default: 'Banners best viewed on desktop full screen as they were not designed for mobile.',
    title: '', 
    sizes: [],
    url: '',
    urlWidth: 0,
    urlHeight: 0
  });

  const bannerHandler = (e) => {
    const bannerData = bannersArray[e.target.value];
    const bannerSizes = bannerData.sizes.map(size => {
      return size[0];
    })
    setCurrentUnit(bannerData);
    setUnit({
      default: null,
      title: bannerData.title,
      sizes: bannerSizes,
      url: bannerData.sizes[0][1],
      urlWidth: bannerData.sizes[0][2],
      urlHeight: bannerData.sizes[0][3]
    })
  }

  const customHandler = (e) => {
    const customData = customsArray[e.target.value];
    setCurrentUnit(null);
    setUnit({
      default: null,
      title: customData.title,
      sizes: [],
      url: customData.url,
      urlWidth: customData.width,
      urlHeight: customData.height
    })
  }

  const sizeChange = (e) => {
    let num = e.target.value;
    setUnit({
      ...unit,
      url: currentUnit.sizes[num][1],
      urlWidth: currentUnit.sizes[num][2],
      urlHeight: currentUnit.sizes[num][3]
    })
  }

  useEffect(() => {
    const banners = bannersJson.map(banner => {
      return new Banner(banner);
    });
    const customs = customsJson.map(custom => {
      return new Custom(custom);
    })
    setBannersArray(banners);
    setCustomsArray(customs);
    setAni('h1',0,'enter-bottom');
    setAni('.banners-content',0,'reveal');
    setAni('.banners-content > section:first-child > div:first-child',100,'enter-bottom');
    setAni('.banners-content > section:first-child > div:last-child',200,'enter-bottom');
    setAni('.iframe-box',300,'scale-x-reveal');
    setAni('.iframe-box',700,'scale-y-reveal');
    setAni('.iframe-box div:first-child',1200,'reveal');
  },[])

  return (
    <article className="banners-page">
      <h1 className="hide">DIGITAL BANNERS</h1>
      <div className="banners-content hide">
        <section>
          <div className="hide">
            <label htmlFor="standards">Standards:</label>
            <select data-testid="banner-select" id="standards" onChange={(event) => bannerHandler(event)}>
              <option value="">Choose a campaign</option>
              {bannersArray.map((banner, idx) => {
                return (
                  <option value={idx} key={idx}>{banner.title}</option>
                )
              })}
            </select>
          </div>
          <div className="hide">
            <label htmlFor="customs">Customs:</label>
            <select id="customs" onChange={(event) => customHandler(event)}>
              <option value="">Choose a campaign (T-Mobile Only)</option>
              {customsArray.map((custom, idx) => {
                return (
                  <option value={idx} key={idx}>{custom.title}</option>
                )
              })}
            </select>
          </div>
        </section>
        <section>
          <div className="heading">
            <h2 data-testid="option-title" className="title-font">{unit.title}</h2>
            <aside>
              {unit.sizes.map((size, idx) => {
                return(
                  <button onClick={(event) => sizeChange(event)} key={idx} value={idx}>{size}</button>
                )
              })}
            </aside>
          </div>
          <div className="iframe-box hide">
            <div className="hide">{unit.default}</div>
            <iframe src={unit.url} width={unit.urlWidth} height={unit.urlHeight} scrolling="no"></iframe>
          </div>
        </section>
      </div>
    </article>
  )

}

export default Banners;

