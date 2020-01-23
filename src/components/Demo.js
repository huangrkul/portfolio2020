import React from 'react';
import { setAni } from '../js/snippets';

export default class Demo extends React.Component {
  
  componentDidMount() {
    setAni('h1',0,'enter-bottom');
    setAni('.demos-content > section:first-child',100,'section-enter');
    setAni('.demos-content > section:last-child',200,'section-enter');
  }

  render() {
    return (
      <article className="demos-page">
        <h1 className="hide">DEMO REELS</h1>
        <div className="demos-content">
          <section className="hide">
            <video className="demo-2d-vid" width="100%" height="100%" controls>
              <source src="http://willhuanganimator.com/media/wh_demo.mp4" type="video/mp4"/>
              <source src="http://willhuanganimator.com/media/wh_demo.ogg" type="video/ogg"/>
              Your browser does not support the video tag.
            </video>
          </section>
          <section className="hide">
            <video className="demo-3d-vid" width="100%" height="100%" controls>
              <source src="http://willhuanganimator.com/media/wh_3d_demo.mp4" type="video/mp4"/>
              <source src="http://willhuanganimator.com/media/wh_3d_demo.ogg" type="video/ogg"/>
              Your browser does not support the video tag.
            </video>
          </section>
        </div>
      </article>
    )
  }

}

