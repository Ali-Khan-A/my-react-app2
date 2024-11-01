import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from 'react-router-dom';

const PersonalDetails = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [DOB, setDOB] = useState("");
  const navigate = useNavigate();

  const handleClickNext = () => {
    console.log(first_name);
    console.log(last_name);
    console.log(gender);
    console.log(DOB);
    navigate('/BusinessDetails');
  }

  return (
    <div className="personal-container">
      <div className="center-container">
        <h2>Personal Details</h2><br />

      <label className="lbl-first-name">*First Name</label><br></br>
      <input type="text"
      value={first_name}
      onChange={(e) => {
        setFirstName(e.target.value);
      }}
      /><br></br><br></br>

      <label className="lbl-last-name">*Last Name</label><br></br>
      <input type="text" 
      value={last_name}
      onChange={(e) => {
        setLastName(e.target.value);
      }}
      /><br></br><br></br>

      <label className="lbl-gender">*What's your gender? (Female, Male, Non-Binary)</label><br></br>
      <select className="drp-gender" 
      value={gender}
      onChange={(e) => {
        setGender(e.target.value);
      }}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="non-binary">Non-Binary</option>
          <option value="transgender">Transgender</option>
          <option value="genderqueer">Genderqueer</option>
          <option value="agender">Agender</option>
          <option value="bigender">Bigender</option>
          <option value="genderfluid">Genderfluid</option>
          <option value="two-spirit">Two-Spirit</option>
          <option value="prefer-not-to-say">Prefer not to say</option>
          <option value="other">Other</option>
      </select><br></br><br></br>

      <label className="lbl-DOB">What's your date of birth</label><br></br>
      <input type="date"
      value={DOB}
      onChange={(e) => {
        setDOB(e.target.value);
      }}
      ></input><br></br><br></br>

      <button onClick={handleClickNext} type="submit" id="submit">
        Next
      </button>
      
    </div>
    </div>
  )
}

export default PersonalDetails
