import { useEffect } from 'react';
import "./Header.scss";
import variables from "./Header.scss";

import icon_nav from '../SVG/menu.png';
import logo from '../SVG/New-Logo.png';
export default function Header() {

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      const headerMaxHeight = variables.headerMaxHeight * 16;
      const newHeaderHeight = scrollY < headerMaxHeight / 2 ? Math.round(headerMaxHeight - scrollY) : headerMaxHeight / 2;
      document.documentElement.style.setProperty("--header-height", `${newHeaderHeight}px`);
    });
  }, []);

  return (
    <>
      <header>
        <nav>
          <input type="checkbox" id="check" />
          <label for="check" class="checkbtn">
            <img className='nav-icon' src={icon_nav} />
          </label>
          <img className='logo' src={logo} alt="logo sg"/>
          <ul className='texts'>
            <li><a href="http://localhost:3000/">Inicio</a></li>
            <li><a href="http://localhost:3000/all-routes">Rutas</a></li>
            <li><a href="https://www.sabiosguiasinterpretes.com/contacto/">Contacto</a></li>
          </ul>
        </nav>
      </header>
    </>
  );
}