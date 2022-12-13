import "./../../sass/components/Form/Form.scss";

const AbstractForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="form-container">
      <h1>Submit your Abstract</h1>
      <form onSubmit={handleSubmit}>
        <div className="section">
          <div className="section-1">
            <label htmlFor="title">Title of the Abstract</label>
            <input type="text" placeholder="First Name" id="title" />
          </div>
          <div className="section-2">
            <label htmlFor="name">Author{`'`}s Name</label>
            <input type="text" placeholder="Last Name" id="name" />
          </div>
        </div>
        <div className="section">
          <div className="section-1">
            <label htmlFor="email">Author{`'`}s Email</label>
            <input type="email" placeholder="example@example.com" id="email" />
          </div>
          <div className="section-2">
            <label htmlFor="phone no">Phone Number</label>
            <input type="number" placeholder="Enter your phone number" />
          </div>
        </div>

        <div className="section">
          <div className="section-1">
            <label htmlFor="nationality">Nationality</label>
            <select>
              <option value=""></option>
              <option value="bkf">Burkina Faso</option>
              <option value="ngr">Nigeria</option>
              <option value="cam">Cameroun</option>
              <option value="usa">United States of America</option>
              <option value="brz">Brazil</option>
            </select>
          </div>
          <div className="section-2">
            <label htmlFor="name">Institution</label>
            <select>
              <option value=""></option>
              <option value="ui">University of Ibadan</option>
              <option value="">...</option>
              <option value="">...</option>
              <option value="">...</option>
              <option value="">...</option>
            </select>
          </div>
        </div>
        <div className="section">
          <div className="section-1">
            <label htmlFor="pre">Presentation Type</label>
            <select>
              <option value=""></option>
              <option value="Live Oral Presentation">
                Live Oral Presentation
              </option>
              <option value="Poster Presentation">Poster Presentation</option>
              <option value="Live Virtual Presentation">
                Live Virtual Presentation
              </option>
            </select>
          </div>
          <div className="section-2">
            <label htmlFor="part">Participant Type</label>
            <select>
              <option value=""></option>
              <option value="Physical">Physical</option>
              <option value="Virtual">Virtual</option>
            </select>
          </div>
        </div>
        <div className="section-1">
          <label htmlFor="file">
            Attach the file of your abstract according to the abstract template
          </label>
          <input type="file" />
        </div>
        <button>Submit</button>
        {/* <div>
                <label htmlFor="name">Last Name</label>
                <input type="text" placeholder="Name"/>
            </div> */}
      </form>
    </div>
  );
};

export default AbstractForm;
