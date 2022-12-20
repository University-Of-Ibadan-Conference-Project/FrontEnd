import "../sass/components/Form/Form.scss";
import CommonHero from "./../components/CommonHero/CommonHero";
import styles from "./../sass/pages/Accomodation.module.scss";
import RegisterForm from "../components/Register/RegisterForm";

export default function Register() {
  return (
    <div>
      <CommonHero
        title="Register with us."
        bg="https://www.eventpro.net/images/online-event-attendee-registration.jpg"
      />
      <div className={styles.ActivityCard}>
        The registration fee covering the cost of conference materials, lunch
        and tea breaks is <b>N25, 000.00 ($200)</b>. The registration fee for
        students who are not academic staff and with identity cards is{" "}
        <b>N15,000.00 ($100).</b>
        Please pay the registration fee to the conference account (
        <b>Name of account:</b> University of Ibadan, Faculty of Science Alumni
        Association, <b>Bank:</b> Union Bank, <b>Account Number:</b> 0109363898)
        and upload the receipt of your payment <a href="https://">here</a>
        <br></br>Only registered participants and invited guests will be allowed
        into the conference venue.
      </div>
      <RegisterForm />
    </div>
  );
}
