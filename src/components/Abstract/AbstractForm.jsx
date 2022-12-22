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
            <label htmlFor="name">Corresponding Author{`'`}s Institution</label>
            <input type="text" placeholder="Institution" />
          </div>
          <div className="section-2">
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
        </div>

        <div className="section">
          <div className="section-1">
            <label htmlFor="rese">Research Area</label>
            <select>
              <option value="Aquaculture and the Blue Economy">
                Aquaculture and the Blue Economy
              </option>
              <option value="Medicinal plants / Drug development">
                Medicinal plants / Drug development
              </option>
              <option value="Climatic change and human health">
                Climatic change and human health
              </option>
              <option value="Energy and Mineral Resources">
                Energy and Mineral Resources
              </option>
              <option value="Environmental Pollution and Remediation">
                Environmental Pollution and Remediation
              </option>
              <option value="Aquaculture and the Blue Economy">
                Aquaculture and the Blue Economy
              </option>
              <option value="Science and security">Science and security</option>
              <option value="Agriculture and Food Security">
                Agriculture and Food Security
              </option>
              <option value="Conservation and utilization of our natural heritage/ resources">
                Conservation and utilization of our natural heritage/ resources
              </option>
              <option value="Biotechnology, Bioinformatics and Cheminformatics">
                Biotechnology, Bioinformatics and Cheminformatics
              </option>
              <option value="Computational/Mathematical modeling">
                Computational/Mathematical modeling
              </option>
              <option value="Nanotechnology">Nanotechnology</option>
            </select>
          </div>
          <div className="section-2">
            <label htmlFor="rese">Keywords Field</label>
            <input type="text" placeholder="Keywords" />
          </div>
        </div>
        <div className="section">
          <div className="section-1">
            <label htmlFor="body">Download Abstract template</label>
            <button className="btn">Click to download template</button>
          </div>
          <div className="section-2">
            <label htmlFor="file">
              Attach the file of your abstract according to the abstract
              template (File Size must not be greater than 5MB)
            </label>
            <input type="file" />
          </div>
        </div>

        <button className="submit">Submit</button>
        {/* <div>
                <label htmlFor="name">Last Name</label>
                <input type="text" placeholder="Name"/>
            </div> */}
      </form>
    </div>
  );
};

export default AbstractForm;
