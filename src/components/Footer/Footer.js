import { RiFacebookCircleFill, RiTwitterFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import styles from "./../../sass/components/Footer.module.scss";
import logo from "./../../assets/img/v2-logo.png";
import Subscribe from "../Subscribe/Subscribe";

export default function Footer() {
  return (
    <>
      <Subscribe />
      <div className={styles.Footer}>
        <div className={styles.FooterData}>
          <div>
            <img src={logo} alt="logo" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              illo, corrupti incidunt veritatis voluptatem quam, alias
              temporibus autem illum neque eum. Mollitia molestiae nobis nemo
              soluta quod, est ipsum minima quae, vel expedita maxime nihil
              doloremque possimus. Consequuntur aliquam sapiente incidunt
              placeat ea quaerat facilis.
            </p>
          </div>
          <div>
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/submit-abstract">Call For Papers</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>Other Pages</h2>
            <ul>
              <li>
                <Link to="/accomodation">Accomodation</Link>
              </li>
              <li>
                <Link to="/advertisement">Advertisement</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/committee">Committee</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>Socials</h2>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <RiTwitterFill
                size={30}
                fill="#98A2B3"
                className={styles.FooterIcon}
              />
            </a>
            <a
              href="https://web.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <RiFacebookCircleFill
                size={30}
                fill="#98A2B3"
                className={styles.FooterIcon}
              />
            </a>
          </div>
        </div>
        <span className={styles.FooterCopyRight}>
          Copyright &copy; {new Date().getFullYear()} - Department Of Computer
          Science - University of Ibadan
        </span>
      </div>
    </>
  );
}
