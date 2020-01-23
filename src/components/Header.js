import React from 'react';
import HeaderBtn from './HeaderBtn';

const headerBtns = [
  'btnAbout',
  'btnProjects',
  'btnBanners',
  'btnDemo',
  'btnContact',
];

export default class Header extends React.Component {
  
  componentDidMount() {
    const menuLi = document.querySelectorAll('.btn-init');
    menuLi.forEach((li, id) => {
      setTimeout(() => {
        li.classList.add('btn-show');
      }, 300 + id * 60)
    })
  }

  render() {
    return (
      <header>
        <div><span className="title-font" onClick={() => {this.props.onNextPage('index')}}>WH Portfolio</span></div>
        <ul>
          {headerBtns.map((btn, idx) => {
            return (
              <li key={idx} className="btn-init" onClick={() => this.props.onNextPage(btn)}><HeaderBtn buttonId={btn}/></li>
            )
          })}
        </ul>
      </header>
    )
  }

}

