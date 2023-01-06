import classes from "./Footer.module.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={`containerr ${classes["content"]}`}>
        <div className={`${classes["column"]} ${classes["load-app"]}`}>
          <h3>download app</h3>
          <ul>
            <li>
              <a 
                href="https://play.google.com/store/apps/details?id=io.swvl.customer&hl=en&gl=US&pli=1" 
                rel="noreferrer" 
                target="_blank"
              >
                <img src={require("../IMGES/footer-imgs/google-play.jpg")} alt="google-play-link" />
              </a>
            </li>
            <li>
              <a 
                href="https://apps.apple.com/eg/app/swvl-bus-booking-app/id1214486024" 
                rel="noreferrer" 
                target="_blank"
              >
                <img src={require("../IMGES/footer-imgs/apple-store.jpg")} alt="app-store-link" />
              </a>
            </li>
            <li>
              <a 
                href="https://appgallery.huawei.com/#/app/C100242771" 
                rel="noreferrer" 
                target="_blank"
              >
                <img src={require("../IMGES/footer-imgs/app-gallery.jpg")} alt="app-gallery-link" />
              </a>
            </li>
          </ul>
        </div>
        <div className={`${classes["column"]} ${classes["who-we-are"]}`}>
          <h3>who we are</h3>
          <ul>
            <li>
              <NavLink to="/home">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/people">Our People</NavLink>
            </li>
            <li>
              <NavLink to="/investors">Investors</NavLink>
            </li>
            <li>
              <NavLink to="/captains">Swvl Captain</NavLink>
            </li>
          </ul>
        </div>
        <div className={`${classes["column"]} ${classes["what-we-do"]}`}>
          <h3>what we do</h3>
          <ul>
            <li>
              <NavLink to="/daily">Daily</NavLink>
            </li>
            <li>
              <NavLink to="/travel">Travel</NavLink>
            </li>
            <li>
              <NavLink to="/business">Business</NavLink>
            </li>
          </ul>
        </div>
        <div className={`${classes["column"]} ${classes["social-media"]}`}>
          <ul>
            <li className={classes.insta}>
              <a href="https://www.instagram.com/swvlegypt/" rel="noreferrer" target="_blank">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li className={classes.face}>
              <a href="https://www.facebook.com/swvlapp" rel="noreferrer" target="_blank">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </li>
            <li className={classes.twitter}>
              <a href="https://twitter.com/SwvlNews" rel="noreferrer" target="_blank">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li className={classes.youtube}>
              <a href="https://www.youtube.com/channel/UCLbQBeSWndlMGFvyssV78OQ" rel="noreferrer" target="_blank">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </li>
            <li className={classes.lin}>
              <a href="https://www.linkedin.com/company/swvl" rel="noreferrer" target="_blank">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className={`${classes["column"]} ${classes["signed"]}`}>
          <div className={classes["logo-img"]}>
            <NavLink to="/home">
              <img src={require("../IMGES/header-imges/swvl-logo.png")} alt="logo-img" />
            </NavLink>
          </div>
          <ul>
            <li>
              <a href="https://swvl.com/privacy-policy/" rel="noreferrer" target="_blank">
                Privacy
              </a>
            </li>
            <li>
              <a href="https://swvl.com/terms/" rel="noreferrer" target="_blank">
                Terms
              </a>
            </li>
          </ul>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;