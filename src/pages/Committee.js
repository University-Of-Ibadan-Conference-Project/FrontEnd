import CommonHero from "../components/CommonHero/CommonHero";
import conferenceBg from "../assets/img/conference-bg.jpg";

export default function Committee() {
  return (
    <div className="committee">
      <CommonHero title="Committee" bg={conferenceBg} />
      <section></section>
    </div>
  );
}
