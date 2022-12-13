import "../sass/components/Register/register.scss";
import RegisterForm from "../components/Register/RegisterForm";

export default function Register() {
  return (
    <section>
      <div className="register-container">
        <h2>Register with us.</h2>
      </div>
      <RegisterForm />
    </section>
  );
}
