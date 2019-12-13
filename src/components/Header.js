import React from 'react';
import HeaderBtn from './HeaderBtn';

const headerBtns = [
  {btnId: 'btnAbout'},
  {btnId: 'btnProjects'},
  {btnId: 'btnBanners'},
  {btnId: 'btnDemo'},
  {btnId: 'btnContact'},
]

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  
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
              <li key={idx} className="btn-init" onClick={() => this.props.onNextPage(btn.btnId)}><HeaderBtn buttonId={btn.btnId}/></li>
            )
          })}
        </ul>
      </header>
    )
  }

}

