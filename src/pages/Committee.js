import CommonHero from "../components/CommonHero/CommonHero";
import conferenceBg from "../assets/img/conference-bg.jpg";
import eugene from "../assets/img/eugene.png";
import person from "../assets/img/person.jpeg";

export default function Committee() {
  return (
    <div className="committee">
      <CommonHero
        title="CONFERENCE"
        info="Share your ideas with people"
        bg={conferenceBg}
      />
      <section>
        <div className="layout">
          <div className="img-container">
            <img alt="prof" src={eugene} />
          </div>
          <div className="info">
            <h4>PROF. EUGENE P. SHEEHAN</h4>
            <p>Emeritus Professor</p>
            <p>
              Psychological Sciences College of Education and Behavioral
              Sciences
            </p>
            <p>University of Northern Colorado</p>
            <p> USA</p>
          </div>
        </div>
        <div className="layout">
          <div className="img-container">
            <img alt="prof" src={eugene} />
          </div>
          <div className="info">
            <h4>PROF. EUGENE P. SHEEHAN</h4>
            <p>Emeritus Professor</p>
            <p>
              Psychological Sciences College of Education and Behavioral
              Sciences
            </p>
            <p>University of Northern Colorado</p>
            <p> USA</p>
          </div>
        </div>
      </section>
      <section className="bg">
        <div className="cards">
          <div className="card">
            <img alt="person" src={eugene} />
            <div className="info">
              <span>CONFERENCE CONVENER</span>
              <h4>MR. ISANKA P. GAMAGE</h4>
            </div>
          </div>
          <div className="card">
            <img alt="person" src={eugene} />
            <div className="info">
              <span>CONFERENCE CONVENER</span>
              <h4>MR. ISANKA P. GAMAGE</h4>
            </div>
          </div>
          <div className="card">
            <img alt="person" src={eugene} />
            <div className="info">
              <span>CONFERENCE CONVENER</span>
              <h4>MR. ISANKA P. GAMAGE</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="reviewers">
        <div className="heading">
          <h2>SCIENTIFIC REVIEWERS</h2>
          <p>
            The Scientific Committee consists of experts in the field from many
            different countries globally. The Committee Members evaluate your
            abstracts and provide insights to improve those further. According
            to the final decision given by them, you would be able to process
            further tasks for attending the conference.
          </p>
        </div>
        <div className="grid">
          <div className="layout">
            <div className="img-container">
              <img alt="prof" src={person} />
            </div>
            <div className="info">
              <h4>PROF. EUGENE P. SHEEHAN</h4>
              <p>
                Psychological Sciences College of Education and Behavioral
                Sciences
              </p>
            </div>
          </div>
          <div className="layout">
            <div className="img-container">
              <img alt="prof" src={person} />
            </div>
            <div className="info">
              <h4>PROF. EUGENE P. SHEEHAN</h4>
              <p>
                Psychological Sciences College of Education and Behavioral
                Sciences
              </p>
            </div>
          </div>
          <div className="layout">
            <div className="img-container">
              <img alt="prof" src={person} />
            </div>
            <div className="info">
              <h4>PROF. EUGENE P. SHEEHAN</h4>
              <p>
                Psychological Sciences College of Education and Behavioral
                Sciences
              </p>
            </div>
          </div>
          <div className="layout">
            <div className="img-container">
              <img alt="prof" src={person} />
            </div>
            <div className="info">
              <h4>PROF. EUGENE P. SHEEHAN</h4>
              <p>
                Psychological Sciences College of Education and Behavioral
                Sciences
              </p>
            </div>
          </div>
          <div className="layout">
            <div className="img-container">
              <img alt="prof" src={person} />
            </div>
            <div className="info">
              <h4>PROF. EUGENE P. SHEEHAN</h4>
              <p>
                Psychological Sciences College of Education and Behavioral
                Sciences
              </p>
            </div>
          </div>
          <div className="layout">
            <div className="img-container">
              <img alt="prof" src={person} />
            </div>
            <div className="info">
              <h4>PROF. EUGENE P. SHEEHAN</h4>
              <p>
                Psychological Sciences College of Education and Behavioral
                Sciences
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
