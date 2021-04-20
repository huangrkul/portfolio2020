import React, { useEffect } from "react";
import { setAni } from "../js/snippets";
import poster3D from "../../public/assets/posters/3d_poster.jpg";
import poster2019 from "../../public/assets/posters/2019_poster.jpg";
import posterMP from "../../public/assets/posters/mp_poster.jpg";

const Demo = (props) => {
  useEffect(() => {
    setAni("h1", 0, "enter-bottom");
    setAni(".demos-content > section:first-child", 100, "section-enter");
    setAni(".demos-content > section:nth-child(2)", 100, "section-enter");
    setAni(".demos-content > section:last-child", 200, "section-enter");
  }, []);

  return (
    <article className="demos-page">
      <h1 className="hide">DEMO REELS</h1>
      <div className="demos-content">
        <section className="hide">
          <video width="100%" height="100%" controls poster={posterMP}>
            <source
              src="http://willhuanganimator.com/media/wh_mediapro.mp4"
              type="video/mp4"
            />
            <source
              src="http://willhuanganimator.com/media/wh_mediapro.ogg"
              type="video/ogg"
            />
            Your browser does not support the video tag.
          </video>
        </section>
        <section className="hide">
          <video width="100%" height="100%" controls poster={poster2019}>
            <source
              src="http://willhuanganimator.com/media/wh_demo.mp4"
              type="video/mp4"
            />
            <source
              src="http://willhuanganimator.com/media/wh_demo.ogg"
              type="video/ogg"
            />
            Your browser does not support the video tag.
          </video>
        </section>
        <section className="hide">
          <video width="100%" height="100%" controls poster={poster3D}>
            <source
              src="http://willhuanganimator.com/media/wh_3d_demo.mp4"
              type="video/mp4"
            />
            <source
              src="http://willhuanganimator.com/media/wh_3d_demo.ogg"
              type="video/ogg"
            />
            Your browser does not support the video tag.
          </video>
        </section>
      </div>
    </article>
  );
};

export default Demo;
