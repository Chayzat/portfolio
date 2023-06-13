import { Link } from "react-router-dom";
import menuIcon from '../assets/img/menu.svg'
import { useState } from "react";

function Header() {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav__list flex">
          <li className="nav__item">
            <Link to={"/"}>ocm.</Link>
          </li>
          <li className="nav__item"  onClick={() => setOpenMenu(true)}>
            <Link to={"/"}>
              <img src={menuIcon} alt="menu icon" />
            </Link>
          </li>
        </ul>
      </nav>
      <div onClick={() => setOpenMenu(false)} className={`info ${openMenu ? 'open' : 'hide'}`}>
        <div onClick={(e) => e.stopPropagation()} className="info__content">
          <div className="info__content-about">
            <h3>About me</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, doloremque!</p>
            <Link to={'/'}>Download CV</Link>
          </div>
          <ul className="info__content-socials flex">
            <li className="info__content-socials__item">
              <Link>github</Link>
            </li>
            <li className="info__content-socials__item">
              <Link>email</Link>
            </li>
            <li className="info__content-socials__item">
              <Link>linkedin</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
