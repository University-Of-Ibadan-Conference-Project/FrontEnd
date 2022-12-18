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
        <b>N8,000 and N30,000/night.</b>
      </div>
      <div className={styles.HotelDisplayCards}>
        <HotelPrevCard name="University of Ibadan Hotels, UI, Ibadan" />
        <HotelPrevCard name="University of Ibadan Alumni Guest House" />
        <HotelPrevCard name="Josiah's Inn, Opposite NISER" />
        <HotelPrevCard name="Plaza Park Hotel, Bodija" />
        <HotelPrevCard name="Christian Guest House, Samonda, Ibadan" />
        <HotelPrevCard name="Davis Hotel, Old Bodija, Ibadan" />
        <HotelPrevCard name="Pastoral Institute, Bodija Ibadan" />
        <HotelPrevCard name="LABOD Hotel Old Bodija, Ibadan." />
        <HotelPrevCard name="NUT Guest house, Samonda, Ibadan." />
        <HotelPrevCard name="Institute of Church Guest House, Samonda, Ibadan." />
        <HotelPrevCard name="De Executive Hotel, Off Osuntokun, Bodija, Ibadan." />
        <HotelPrevCard name="Grace and Suites Hotel, Aare Avenue, Bodija Ibadan." />
      </div>
    </div>
  );
};

const HotelPrevCard = ({ name }) => (
  <div className={styles.container}>
    <div className={styles.img}></div>
    <div className={styles.content}>
      <h3>{name ? name : "Turkey"}</h3>
      <button className={styles.btn}>Show Map</button>
    </div>
  </div>
);

HotelPrevCard.propTypes = {
  name: PropTypes.string,
};

export default Accomodation;
