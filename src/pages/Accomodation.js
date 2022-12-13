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
        <HotelPrevCard name="Universirty of Ibadan Hotel" />
        <HotelPrevCard name="Hotel at the University of Ibadan" />
        <HotelPrevCard name="University of Ib, Bodija Branch hotel" />
      </div>
    </div>
  );
};

const HotelPrevCard = ({ name }) => (
  <div className={styles.container}>
    <div className={styles.img}></div>
    <div className={styles.content}>
      <h3>{name ? name : "Turkey"}</h3>
    </div>
  </div>
);

HotelPrevCard.propTypes = {
  name: PropTypes.string,
};

export default Accomodation;
