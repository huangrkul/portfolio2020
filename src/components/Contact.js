import React, {useEffect} from 'react';
import { setAni } from '../js/snippets';
import flower from '../../public/assets/homepage/contact-flower.png';

const Contact = (props) => {

  useEffect(() => {
    setAni('h1',0,'enter-bottom');
  },[])

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
          <div><img src={flower} /></div>
        </section>
      </div>
    </article>
  )

}

export default Contact;
