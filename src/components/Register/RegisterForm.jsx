import "./../../sass/components/Form/Form.scss";

const RegisterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="form-container">
      <h1>Register here</h1>
      <form onSubmit={handleSubmit}>
        <div className="section">
          <div className="section-1">
            <label htmlFor="name">First Name</label>
            <input type="text" placeholder="First Name" id="name" />
          </div>
          <div className="section-2">
            <label htmlFor="name">Last Name</label>
            <input type="text" placeholder="Last Name" id="name" />
          </div>
        </div>
        <div className="section">
          <div className="section-1">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="example@example.com" id="email" />
          </div>
          <div className="section-2">
            <label htmlFor="phone no">Phone Number</label>
            <input type="number" placeholder="Enter your phone number" />
          </div>
        </div>
        <div className="section">
          <div className="section-1">
            <label htmlFor="name">Department</label>
            <input type="text" placeholder="Enter your department" />
          </div>
          <div className="section-2">
            <label htmlFor="nationality">Country</label>
            <input type="text" placeholder="Country" />
          </div>
        </div>
        <div className="section">
          <div className="section-1">
            <label htmlFor="name">Institution</label>
            <input type="text" placeholder="Institution" />
          </div>
          <div className="section-2">
            <label htmlFor="name">Address</label>
            <input
              type="text"
              placeholder="Enter your Address"
              className="address"
            />
          </div>
        </div>
        <div className="section">
          <div className="section-1">
            <label htmlFor="part">Participant Type</label>
            <div>
              <input type="radio" name="part" />
              <label htmlFor="part">Oral Presenter</label>
            </div>
            <div>
              <input type="radio" name="part" />
              <label htmlFor="part">Attendee (Non-Presenter)</label>
            </div>
          </div>
        </div>
        <button>Register</button>
        {/* <div>
                <label htmlFor="name">Last Name</label>
                <input type="text" placeholder="Name"/>
            </div> */}
      </form>
    </div>
  );
};

export default RegisterForm;
