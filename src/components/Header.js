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
        <div>this is logo</div>
        <ul>
          {headerBtns.map((btn, idx) => {
            return (
              <li key={idx} className="btn-init"><HeaderBtn buttonId={btn.btnId}/></li>
            )
          })}
        </ul>
      </header>
    )
  }

}

