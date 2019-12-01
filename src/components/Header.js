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
  render() {
    return (
      <header>
        <div>this is logo</div>
        <ul>
          {headerBtns.map((btn, idx) => {
            return (
              <li key={idx}><HeaderBtn buttonId={btn.btnId}/></li>
            )
          })}
        </ul>
      </header>
    )
  }
}

