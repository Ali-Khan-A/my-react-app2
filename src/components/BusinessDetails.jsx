import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from 'react-router-dom';

const BusinessDetails = () => {
  const [businessRegistered, setBusinessRegistered] = useState(true);
  const [businessNotRegistered, setBusinessNotRegistered] = useState(false);
  const navigate = useNavigate();

  const handleSelect = () => {
    setBusinessNotRegistered(!businessNotRegistered);
    setBusinessRegistered(!businessRegistered);
  };

  const handleClickNext = () => {
    navigate('/Login');
  };

  return (
    <div className="business-container">
      <label className="lbl-business-type">
        *What type of business do you propose?
      </label><br />
      <select className="drp-gender">
        <option value="sole-proprietorship">Sole Proprietorship</option>
        <option value="partnership">Partnership</option>
        <option value="limited-liability-company">
          Limited Liability Company (LLC)
        </option>
        <option value="corporation">Corporation</option>
        <option value="s-corporation">S Corporation</option>
        <option value="nonprofit">Nonprofit Organization</option>
        <option value="cooperative">Cooperative</option>
        <option value="franchise">Franchise</option>
        <option value="joint-venture">Joint Venture</option>
        <option value="microenterprise">Microenterprise</option>
        <option value="startup">Startup</option>
        <option value="e-commerce">E-Commerce</option>
        <option value="consulting">Consulting</option>
        <option value="service-based">Service-Based Business</option>
        <option value="brick-and-mortar">Brick-and-Mortar</option>
        <option value="home-based">Home-Based Business</option>
        <option value="other">Other</option>
      </select>
      <br /> <br />
      <label className="lbl-business-registered">
        *Is your Business Registered? (Yes/No)
      </label>{" "}
      <br />

      <form className="business-registered-radio">
        <label className="option">
          Yes
          <input
            onClick={handleSelect}
            checked={businessRegistered}
            type="radio"
            className="options"
            value="YES"
          ></input>
          <br />
        </label>
        <label className="option">
          No
          <input
            onClick={handleSelect}
            checked={businessNotRegistered}
            type="radio"
            className="options"
            value="NO"
          ></input>
        </label>
      </form>

      <br />
      <label className="lbl-business-name">*Business Name</label><br />
      <input type="text"/><br /><br />

      <label className="lbl-Business-Registration-number">*Business Registration Number</label><br /> 
      <input type="text" /><br /><br />

      <label className="lbl-about-business">*About Your Business</label><br />
      <input type="text" /><br /><br />

      <label className="lbl-treatment-type">*What's type of treatment(s) do you propose?</label><br />
      <input type="text" /><br /><br />

      <label className="lbl-based">*Where are you based? (List of city from GB)</label><br />
      <input type="text" /><br /><br />

      <label className="lbl-business-address">*Business Address</label><br />
      <input type="text" /><br /><br />

      <label className="lbl-business-postcode">*Post Code</label><br />
      <input type="text" /><br /><br />

      <label className="lbl-upload-proof-id">*Upload your ID Card / Proof of Address</label><br />
      <input type="file" className="upload-file"/><br /><br />

      <label className="lbl-upload-beauty">*Upload any Beauty Certificate</label><br />
      <input type="file" className="upload-file" /><br /><br />



      <button onClick={handleClickNext} type="submit" id="submit">
        Join us As Partner
      </button>
      
    </div>

  );
};

export default BusinessDetails;
