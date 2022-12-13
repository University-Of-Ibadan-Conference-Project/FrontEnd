import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import uiLogo from "./../../assets/img/v2-logo.png";

import styles from "../../sass/components/navbar.module.scss";

function Navbar({ navVisibility, setNavVisibility }) {
  const [activeNav, setActiveNav] = useState("/");
  const { pathname } = useLocation();
  useEffect(() => {
    setActiveNav(pathname);
  }, [pathname]);

  useEffect(() => {
    if (navVisibility) {
      window.onscroll = () => window.scroll(0, 0);
    } else {
      window.onscroll = () => {};
    }
  }, [navVisibility]);
  const color = "#FF7700";

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
            <p style={{ color: activeNav === "/" ? color : "" }}>Home</p>
          </Link>
        </li>
        <li>
          <Link className="link" to={"/accomodation"}>
            <p style={{ color: activeNav === "/accomodation" ? color : "" }}>
              {" "}
              Accomodation
            </p>
          </Link>
        </li>
        <li>
          <Link className="link" to={"/committee"}>
            <p style={{ color: activeNav === "/committee" ? color : "" }}>
              {" "}
              Committee
            </p>
          </Link>
        </li>
        <li>
          <Link className="link" to={"/advertisement"}>
            <p style={{ color: activeNav === "/advertisement" ? color : "" }}>
              {" "}
              advertisement
            </p>
          </Link>
        </li>
        <li>
          <Link className="link" to={"/about-us"}>
            <p style={{ color: activeNav === "/about-us" ? color : "" }}>
              {" "}
              About Us
            </p>
          </Link>
        </li>
        <li>
          <Link className="link" to={"/help"}>
            <p style={{ color: activeNav === "/help" ? color : "" }}> Help</p>
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
