
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {

  const[appear, setAppear] = useState()

  const listOfLinkHandeler = () => {
    if (appear) {
      setAppear()
    } else {
      setAppear("appear")
    }
  }

  return (
    <header className={classes.header}>
      <nav className="containerr">
        <NavLink to="/home" exact className={classes["logo-img"]}>
          <img src={require("../IMGES/swvl-logo.png")} alt="swvl" />
        </NavLink>
        
        <div onClick={listOfLinkHandeler} className={classes["nav-charts"]}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={appear}>
          <li>
            <NavLink activeClassName={classes.active} to="/home">home</NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/daily">daily</NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/travel">travel</NavLink>
          </li>
          <li className={classes["private-bus"]}>
            <p>PRIVATE BUS</p>
            <ul>
              <li>
                <a href="https://travel.swvl.com/privatebuseg2"
                  rel="noreferrer" 
                  target="_blank"
                >
                  EGYPT
                </a>
              </li>
              <li>
                <a href="https://travel.swvl.com/pakistan_charter_buses"
                  rel="noreferrer" 
                  target="_blank"
                >
                  PAKISTAN
                </a>
              </li>
            </ul>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/business">business</NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/captains">captains</NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/people">people</NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/investors">investors</NavLink>
          </li>
          <li>
            <a
              href="https://apps.apple.com/app/id1214486024?mt=8" 
              rel="noreferrer"
              target="_blank"
            >
              app
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;