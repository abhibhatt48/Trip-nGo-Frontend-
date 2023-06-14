import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [passwordStrength, setPasswordStrength] = useState({
    minLength: false,
    specialChar: false,
    numberChar: false
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setUserDetails({
      ...userDetails,
      [event.target.name]: event.target.value
    });
  };

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    const strength = {
      minLength: password.length >= 8,
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      numberChar: /\d/.test(password)
    };
    setPasswordStrength(strength);
    handleChange(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { password, confirmPassword } = userDetails;
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Put any additional validation logic here
    localStorage.setItem('user', JSON.stringify(userDetails));
    navigate('/profile');
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create an Account</h2>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          placeholder="First Name"
          required
          pattern="[A-Za-z]+"
        />
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          placeholder="Last Name"
          required
          pattern="[A-Za-z]+"
        />
        <input type="email" name="email" onChange={handleChange} placeholder="Email" required />
        <input
          type="password"
          name="password"
          onChange={handlePasswordChange}
          placeholder="Password"
          required
          minLength="8"
        />
        <div className="password-strength">
          <input type="checkbox" id="minLength" checked={passwordStrength.minLength} readOnly />
          <label htmlFor="minLength">
            {passwordStrength.minLength ? (
              <span className="password-strength-valid">Minimum 8 characters</span>
            ) : (
              <span className="password-strength-invalid">Minimum 8 characters</span>
            )}
          </label>
          <input type="checkbox" id="specialChar" checked={passwordStrength.specialChar} readOnly />
          <label htmlFor="specialChar">
            {passwordStrength.specialChar ? (
              <span className="password-strength-valid">At least 1 special character</span>
            ) : (
              <span className="password-strength-invalid">At least 1 special character</span>
            )}
          </label>
          <input type="checkbox" id="numberChar" checked={passwordStrength.numberChar} readOnly />
          <label htmlFor="numberChar">
            {passwordStrength.numberChar ? (
              <span className="password-strength-valid">At least 1 number</span>
            ) : (
              <span className="password-strength-invalid">At least 1 number</span>
            )}
          </label>
        </div>
        <input
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          placeholder="Confirm Password"
          required
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default SignUp;
