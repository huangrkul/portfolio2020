import React from 'react';

export default class BioDev extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const headline1 = document.querySelectorAll('.bio-dev-section > h3:first-of-type > div');
    headline1.forEach((item, id) => {
      setTimeout(() => {
        item.classList.add('dev-headline-seq1');
      }, id * 30)
    }) 

    const headline2 = document.querySelectorAll('.bio-dev-section > h3:last-of-type > div');
    headline2.forEach((item, id) => {
      setTimeout(() => {
        item.classList.add('dev-headline-seq2');
      }, id * 30)
    }) 
  }

  render() {
    return (
      <section className="bio-dev-section">
        <h3>
          {[...'EXPERT KNOWLEDGE'].map((char, idx) => {
            return(
              <div key={idx} className="hide title-font">{char}</div>
            )
          })}
        </h3>
        <p><span className="bold blk">LANGUAGES:</span><br/> HTML | CSS | Javascript (+ES6)</p>
        <p><span className="bold blk">LIBRARIES / TOOLS:</span><br/>  SASS/SCSS | React | Webpack | Gulp | Express | Axios | Handlebar | Node | VSCode | Sublime | Atom | Postgres | Heroku</p>  

        <h3>
          {[...'WORKING KNOWLEDGE'].map((char, idx) => {
            return(
              <div key={idx} className="hide title-font">{char}</div>
            )
          })}
        </h3>

        <p><span className="bold blk">LANGUAGES:</span><br/>SQL | PHP (Wordpress)</p>
        <p><span className="bold blk">LIBRARIES / TOOLS:</span><br/>MySQL | Regex | React-native</p>
      </section>
    )
  }

}

