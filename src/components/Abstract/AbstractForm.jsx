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
            <input type="text" placeholder="Abstract Title" id="title" />
          </div>
          <div className="section-2">
            <label htmlFor="name">Corresponding Author{`'`}s Name</label>
            <input type="text" placeholder="Full Name" id="name" />
          </div>
        </div>
        <div className="section">
          <div className="section-1">
            <label htmlFor="email">Corresponding Author{`'`}s Email</label>
            <input type="email" placeholder="example@example.com" id="email" />
          </div>
          <div className="section-2">
            <label htmlFor="phone no">
              Corresponding Author{`'`}s Phone Number
            </label>
            <input type="number" placeholder="Enter your phone number" />
          </div>
        </div>

        <div className="section">
          <div className="section-1">
            <label htmlFor="co">Co Authors</label>
            <input type="text" placeholder="Co Authors" id="name" />
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
        </div>
        <div className="section">
          <div className="section-1">
            <label htmlFor="rese">Research Area</label>
            <input type="text" placeholder="Research Area" />
          </div>
          <div className="section-2">
            <label htmlFor="rese">Keywords Field</label>
            <input type="text" placeholder="Keywords" />
          </div>
        </div>
        <div className="sections">
          <label htmlFor="body">Abtsract Body</label>
          <textarea placeholder="Your Abstract body here"></textarea>
        </div>
        <div className="section-1">
          <label htmlFor="file">
            Attach the file of your abstract according to the abstract template
            (File Size must not be greater than 5MB)
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
