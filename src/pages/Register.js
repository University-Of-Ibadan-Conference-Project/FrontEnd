import "../sass/components/Form/Form.scss";
import CommonHero from "./../components/CommonHero/CommonHero";
import RegisterForm from "../components/Register/RegisterForm";

export default function Register() {
  return (
    <section>
      <CommonHero
        title="Register with us."
        bg="https://www.eventpro.net/images/online-event-attendee-registration.jpg"
      />
      <RegisterForm />
    </section>
  );
}
