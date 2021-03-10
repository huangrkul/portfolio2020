import React, {useEffect} from 'react';
import HeaderBtn from './HeaderBtn';

const headerBtns = [
  'btnAbout',
  'btnProjects',
  'btnBanners',
  'btnDemo',
  'btnContact',
];

const Header = (props) => {

  useEffect(() => {
    const menuLi = document.querySelectorAll('.btn-init');
    menuLi.forEach((li, id) => {
      setTimeout(() => {
        li.classList.add('btn-show');
      }, 300 + id * 60)
    })
  }, [])

  return(
    <header>
      <div><span className="title-font" onClick={() => {props.changePage('index')}}>WH Portfolio</span></div>
      <ul>
        {headerBtns.map((btn, idx) => {
          return (
            <li key={idx} className="btn-init" onClick={() => props.changePage(btn)}><HeaderBtn buttonId={btn}/></li>
          )
        })}
      </ul>
    </header>
  )
}

export default Header;
