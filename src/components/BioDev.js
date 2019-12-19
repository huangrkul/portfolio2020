import React from 'react';

export default class BioDev extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const headline1 = document.querySelectorAll('.bio-dev-section > h3:first-child div');
    headline1.forEach((item, id) => {
      setTimeout(() => {
        item.classList.add('dev-headline-seq1');
      }, id * 30)
    }) 

    const headline2 = document.querySelectorAll('.bio-dev-section > h3:last-child div');
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
          {[...'EXPERT KNOWLEDGE'].map(char => {
            return(
              <div className="hide title-font">{char}</div>
            )
          })}
        </h3>

        <h3>
          {[...'WORKING KNOWLEDGE'].map(char => {
            return(
              <div className="hide title-font">{char}</div>
            )
          })}
        </h3>
      </section>
    )
  }

}

