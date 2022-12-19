import CommonHero from "../components/CommonHero/CommonHero";
import PropTypes from "prop-types";
import styles from "./../sass/pages/Accomodation.module.scss";
import hotelPreview from "./../assets/img/hotel-preview.jpeg";

const Accomodation = () => {
  return (
    <div>
      <CommonHero
        title="HOTEL ACCOMMODATION"
        info="Get to know more about where to stay"
        bg={hotelPreview}
      />
      {/* <h2>Hello</h2> */}
      <div className={styles.ActivityCard}>
        Participants will be responsible for their accommodation. Below are
        available standard hotels and guest houses with good lodging in and
        around the University of Ibadan. Charges are moderate, between{" "}
        <b>N8,000 and N30,000/night.</b>All inquiries should be directed to the
        Secretary of the Local Organising Committee of this conference.
        <br></br>
        <b>Telephone:</b> 08055475865<b>E-mail:</b> faculty_science@ui.edu.ng
      </div>
      <div className={styles.HotelDisplayCards}>
        <HotelPrevCard1 name="University of Ibadan Hotels, UI, Ibadan" />
        <HotelPrevCard2 name="University of Ibadan Alumni Guest House" />
        <HotelPrevCard3 name="Josiah's Inn, Opposite NISER" />
        <HotelPrevCard4 name="Plaza Park Hotel, Bodija" />
        <HotelPrevCard5 name="Christian Guest House, Samonda, Ibadan" />
        <HotelPrevCard6 name="Davis Hotel, Old Bodija, Ibadan" />
        <HotelPrevCard7 name="Pastoral Institute, Bodija Ibadan" />
        <HotelPrevCard8 name="LABOD Hotel Old Bodija, Ibadan." />
        <HotelPrevCard9 name="NUT Guest house, Samonda, Ibadan." />
        <HotelPrevCard10 name="Institute of Church Guest House, Samonda, Ibadan." />
        <HotelPrevCard11 name="De Executive Hotel, Off Osuntokun, Bodija, Ibadan." />
        <HotelPrevCard12 name="Grace and Suites Hotel, Aare Avenue, Bodija Ibadan." />
      </div>
    </div>
  );
};

const HotelPrevCard1 = ({ name }) => (
  <div
    className={styles.container}
    data-aos="zoom-in-down"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2500"
  >
    <div className={styles.img1}></div>
    <div className={styles.content}>
      <h3>{name ? name : "Turkey"}</h3>
      <a
        href="https://goo.gl/maps/uFxgsofxHMDQhMjz9"
        target
        className={styles.btn}
      >
        <h4>Show Map</h4>
      </a>
    </div>
  </div>
);

HotelPrevCard1.propTypes = {
  name: PropTypes.string,
};

const HotelPrevCard2 = ({ name }) => (
  <div
    className={styles.container}
    data-aos="zoom-in-down"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2500"
  >
    <div className={styles.img2}></div>
    <div className={styles.content}>
      <h3>{name ? name : "Turkey"}</h3>
      <a href="https://goo.gl/maps/dTN3B4SqvmFtXrDZA" className={styles.btn}>
        <h4>Show Map</h4>
      </a>
    </div>
  </div>
);

HotelPrevCard2.propTypes = {
  name: PropTypes.string,
};

const HotelPrevCard3 = ({ name }) => (
  <div
    className={styles.container}
    data-aos="zoom-in-down"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2500"
  >
    <div className={styles.img3}></div>
    <div className={styles.content}>
      <h3>{name ? name : "Turkey"}</h3>
      <a href="https://goo.gl/maps/bRjetTF5GiKeuC7a9" className={styles.btn}>
        <h4>Show Map</h4>
      </a>
    </div>
  </div>
);

HotelPrevCard3.propTypes = {
  name: PropTypes.string,
};

const HotelPrevCard4 = ({ name }) => (
  <div
    className={styles.container}
    data-aos="zoom-in-down"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2500"
  >
    <div className={styles.img4}></div>
    <div className={styles.content}>
      <h3>{name ? name : "Turkey"}</h3>
      <a href="https://goo.gl/maps/2K2sYsFhXf6PBUuE9" className={styles.btn}>
        <h4>Show Map</h4>
      </a>
    </div>
  </div>
);

HotelPrevCard4.propTypes = {
  name: PropTypes.string,
};

const HotelPrevCard5 = ({ name }) => (
  <div
    className={styles.container}
    data-aos="zoom-in-down"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2500"
  >
    <div className={styles.img5}></div>
    <div className={styles.content}>
      <h3>{name ? name : "Turkey"}</h3>
      <a href="https://goo.gl/maps/m4YoWTCk2Q5G786u5" className={styles.btn}>
        <h4>Show Map</h4>
      </a>
    </div>
  </div>
);

HotelPrevCard5.propTypes = {
  name: PropTypes.string,
};

const HotelPrevCard6 = ({ name }) => (
  <div
    className={styles.container}
    data-aos="zoom-in-down"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2500"
  >
    <div className={styles.img6}></div>
    <div className={styles.content}>
      <h3>{name ? name : "Turkey"}</h3>
      <a href="https://goo.gl/maps/YT58Pw3AUoHNkmpN8" className={styles.btn}>
        <h4>Show Map</h4>
      </a>
    </div>
  </div>
);

HotelPrevCard6.propTypes = {
  name: PropTypes.string,
};

const HotelPrevCard7 = ({ name }) => (
  <div
    className={styles.container}
    data-aos="zoom-in-down"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2500"
  >
    <div className={styles.img7}></div>
    <div className={styles.content}>
      <h3>{name ? name : "Turkey"}</h3>
      <a href="https://goo.gl/maps/rXVWVA5u2vbFfULK9" className={styles.btn}>
        <h4>Show Map</h4>
      </a>
    </div>
  </div>
);

HotelPrevCard7.propTypes = {
  name: PropTypes.string,
};

const HotelPrevCard8 = ({ name }) => (
  <div
    className={styles.container}
    data-aos="zoom-in-down"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2500"
  >
    <div className={styles.img8}></div>
    <div className={styles.content}>
      <h3>{name ? name : "Turkey"}</h3>
      <a href="https://goo.gl/maps/ifU596szfhMP9cdcA" className={styles.btn}>
        <h4>Show Map</h4>
      </a>
    </div>
  </div>
);

HotelPrevCard8.propTypes = {
  name: PropTypes.string,
};

const HotelPrevCard9 = ({ name }) => (
  <div
    className={styles.container}
    data-aos="zoom-in-down"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2500"
  >
    <div className={styles.img9}></div>
    <div className={styles.content}>
      <h3>{name ? name : "Turkey"}</h3>
      <a href="https://goo.gl/maps/XMEiSj4vBLDaREwq7" className={styles.btn}>
        <h4>Show Map</h4>
      </a>
    </div>
  </div>
);

HotelPrevCard9.propTypes = {
  name: PropTypes.string,
};

const HotelPrevCard10 = ({ name }) => (
  <div
    className={styles.container}
    data-aos="zoom-in-down"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2500"
  >
    <div className={styles.img10}></div>
    <div className={styles.content}>
      <h3>{name ? name : "Turkey"}</h3>
      <a href="https://goo.gl/maps/ozKZ88Nt4SENfzeZ8" className={styles.btn}>
        <h4>Show Map</h4>
      </a>
    </div>
  </div>
);

HotelPrevCard10.propTypes = {
  name: PropTypes.string,
};

const HotelPrevCard11 = ({ name }) => (
  <div
    className={styles.container}
    data-aos="zoom-in-down"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2500"
  >
    <div className={styles.img11}></div>
    <div className={styles.content}>
      <h3>{name ? name : "Turkey"}</h3>
      <a href="" className={styles.btn}>
        <h4>Show Map</h4>
      </a>
    </div>
  </div>
);

HotelPrevCard11.propTypes = {
  name: PropTypes.string,
};

const HotelPrevCard12 = ({ name }) => (
  <div
    className={styles.container}
    data-aos="zoom-in-down"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2500"
  >
    <div className={styles.img12}></div>
    <div className={styles.content}>
      <h3>{name ? name : "Turkey"}</h3>
      <a href="https://goo.gl/maps/zftZK6gtCa6DdUjW7" className={styles.btn}>
        <h4>Show Map</h4>
      </a>
    </div>
  </div>
);

HotelPrevCard12.propTypes = {
  name: PropTypes.string,
};
export default Accomodation;
