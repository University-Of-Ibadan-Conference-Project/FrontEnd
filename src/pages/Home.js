import CountDownTimer from "../components/Countdown/Countdown";
import styles from "./../sass/pages/Home.module.scss";

const Home = () => {
  return (
    <>
      <div className={styles.Home}>
        <div className={styles.Hero}>
          <div className={styles.title}>
            <h2>
              5<sup>th</sup>
            </h2>
            <h2>
              INTERNATIONAL CONFERENCE ON <br />
              SCIENTIFIC RESEARCH IN NIGERIA
            </h2>
          </div>
          <p className={styles.Hero_theme}>
            THEME: Strengthening Scientific Research for National Development
          </p>
          <p className={styles.Hero_remarks}>
            The Faculty of Science is pleased to announce her 5th International
            Conference on Scientific Research, to be held at the Faculty of
            Science Lakeside Lecture Theater, University of Ibadan.
          </p>
        </div>
      </div>
      <CountDownTimer />

      <div className={styles.HomeInfo}>
        <span>WELCOME TO EDUCATION CONFERENCE 2023</span>
        <h2>ICEDU 2023 OVERVIEW</h2>
        <p>
          Welcome to the 9th International Conference on Education 2023 which
          will take place from the 16th - 17th March 2023 in Bangkok, Thailand.
          We hope the ICEDU 2023 unites diverse researches and case studies from
          all over the world, in parallel sessions while offering many
          networking and publishing opportunities. Discover the latest trends
          and challenges in the field at this leading conference and enjoy
          everything the hybrid platform has to offer.
        </p>
      </div>
      <div className={styles.HomeInfo}>
        <h2>PURPOSE OF THE CONFERENCE</h2>
        <span>IMPROVING EDUCATION GLOBALLY</span>
        <p>
          Welcome to the 9th International Conference on Education 2023 which
          will take place from the 16th - 17th March 2023 in Bangkok, Thailand.
          We hope the ICEDU 2023 unites diverse researches and case studies from
          all over the world, in parallel sessions while offering many
          networking and publishing opportunities. Discover the latest trends
          and challenges in the field at this leading conference and enjoy
          everything the hybrid platform has to offer.
        </p>
      </div>
    </>
  );
};

export default Home;
