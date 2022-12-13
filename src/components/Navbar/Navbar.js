import { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import uiLogo from "./../../assets/img/v2-logo.png";

import styles from "../../sass/components/navbar.module.scss";

function Navbar({ navVisibility, setNavVisibility }) {
  useEffect(() => {
    if (navVisibility) {
      window.onscroll = () => window.scroll(0, 0);
    } else {
      window.onscroll = () => {};
    }
  }, [navVisibility]);

  return (
    <div className={styles.MainNav}>
      <ul className={navVisibility ? styles.visibleNav : styles.inVisibleNav}>
        <h2>
          <Link to={"/"}>
            <img src={uiLogo} alt="University of Ibadan" />
          </Link>
        </h2>
        <li>
          <Link className="link" to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to={"/accomodation"}>
            Accomodation
          </Link>
        </li>
        <li>
          <Link className="link" to={"/committee"}>
            Committee
          </Link>
        </li>
        <li>
          <Link className="link" to={"/advertisement"}>
            Advertisement
          </Link>
        </li>
        <li>
          <Link className="link" to={"/about-us"}>
            About Us
          </Link>
        </li>
        <li>
          <Link className="link" to={"/submit-abstract"}>
            Submit Abstract
          </Link>
        </li>
        <li>
          <Link className="link" to={"/contact-us"}>
            Contact Us
          </Link>{" "}
        </li>
      </ul>
      <div className={styles.connect}>
        <span>
          <Link className="link" to={"/login"}>
            Login
          </Link>
        </span>
        <Link className={styles.linkBtn} to={"/register"}>
          Register Now
        </Link>
      </div>

      <div className={styles.hamburger}>
        <span
          type="checkbox"
          tabIndex="-1"
          id="checkbox"
          className={[
            styles.hamburger_check,
            navVisibility ? styles.hamburger_check_checked : "",
          ].join(" ")}
        ></span>
        <div
          className={styles.Checkbox}
          onClick={() => setNavVisibility((visibility) => !visibility)}
        >
          <span className={styles.hamburger_bars}></span>
          <span className={styles.hamburger_bars}></span>
          <span className={styles.hamburger_bars}></span>
          <span className={styles.hamburger_bars}></span>
        </div>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  navVisibility: PropTypes.bool,
  setNavVisibility: PropTypes.func,
};

export default Navbar;
