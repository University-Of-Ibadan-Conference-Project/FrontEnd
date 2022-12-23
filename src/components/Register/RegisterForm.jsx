import { useEffect, useState } from "react";
import { Country } from "country-state-city";

import "./../../sass/components/Form/Form.scss";

const RegisterForm = () => {
  // Country and state initialization state
  const [countries, setCountries] = useState([]);

  // Form Handling states
  const [userSelectedCountry, setUserSelectedCountry] = useState("");

  useEffect(() => {
    const allCountries = Country.getAllCountries();
    const countriesData = allCountries.map((country) => {
      return { name: country.name, isoCode: country.isoCode };
    });
    setCountries(countriesData);
  }, []);

  const selectCountry = (e) => {
    let country = e.target.value;
    setUserSelectedCountry(country); // Set User selected country
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-container">
      <h1>Register here</h1>
      <form onSubmit={handleSubmit}>
        <div className="section">
          <div className="section-1">
            <label className="required" htmlFor="name">
              First Name
            </label>
            <input type="text" placeholder="First Name" id="name" />
          </div>
          <div className="section-2">
            <label className="required" htmlFor="name">
              Last Name
            </label>
            <input type="text" placeholder="Last Name" id="name" />
          </div>
        </div>
        <div className="section">
          <div className="section-1">
            <label className="required" htmlFor="name">
              Other Name
            </label>
            <input type="text" placeholder="First Name" id="name" />
          </div>
          <div className="section-2">
            <label htmlFor="name">Address</label>
            <input type="text" placeholder="Address" id="name" />
          </div>
        </div>
        <div className="section">
          <div className="section-1">
            <label className="required" htmlFor="email">
              Email
            </label>
            <input type="email" placeholder="example@example.com" id="email" />
          </div>
          <div className="section-2">
            <label className="required" htmlFor="phone no">
              Phone Number
            </label>
            <input type="number" placeholder="Enter your phone number" />
          </div>
        </div>
        <div className="section">
          <div className="section-1">
            <label htmlFor="name">Institution / Organisation</label>
            <input type="text" placeholder="Institution" />
          </div>
          <div className="section-2">
            <label htmlFor="name">Department</label>
            <input type="text" placeholder="Enter your department" />
          </div>
        </div>

        <div className="section">
          <div className="section-1">
            <label htmlFor="part">Country</label>
            <select onChange={selectCountry} value={userSelectedCountry}>
              <option hidden={true} defaultValue="">
                Choose country
              </option>
              {countries.map((country) => (
                <option key={country.isoCode} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          <div className="section-2">
            <label htmlFor="name">State / Province</label>
            <input
              type="text"
              placeholder="State / Province"
              className="address"
            />
          </div>
        </div>
        <div className="section">
          <div className="section-1">
            <label htmlFor="name">City</label>
            <input type="text" placeholder="City" />
          </div>
          <div className="section-2">
            <label className="required" htmlFor="part">
              Participant Type
            </label>
            <select>
              <option value="Physical">Physical</option>
              <option value="Virtual">Virtual</option>
            </select>
          </div>
        </div>
        <button className="submit">Register</button>
        {/* <div>
                <label htmlFor="name">Last Name</label>
                <input type="text" placeholder="Name"/>
            </div> */}
      </form>
    </div>
  );
};

export default RegisterForm;
