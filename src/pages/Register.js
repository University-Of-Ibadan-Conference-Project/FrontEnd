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
        <p>
          The registration fee covering the cost of conference materials, lunch
          and tea breaks is N25, 000.00. The registration for international
          paticipant is $100. The registration fee for students who are not
          academic staff and with identity cards is N15,000.00.
        </p>
        <p>
          The registration fee for international student is $50. Please pay the
          registration fee to the conference account ( Name of account:
          University of Ibadan, Faculty of Science Alumni Association, Bank:
          Union Bank, Account Number: 0109363898) and upload the receipt of your
          payment. Only registered participants and invited guests will be
          allowed into the conference venue.
        </p>
      </div>
      <RegisterForm />
    </div>
  );
}
