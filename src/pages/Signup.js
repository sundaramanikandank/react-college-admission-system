import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  /*To add new user
      Use url-  /api/applicants with POST method 
      requestbody = {
        id: new Date().getTime(),
        email,
        password,
        name,
        age,
        mobile,
        address,
        markPercentage,
      };
    */

  /*To check whether entered email is already registered
      Use url-  /api/applicants?email=${<enteredEmail>} with GET method 
    */

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    age: "",
    mobile: "",
    address: "",
    markPercentage: "",
  });

  const [errors, setErrors] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateInputs = () => {
    let valid = true;
    const newErrors = [];

    if (formData.name.trim() === "") {
      newErrors.push("Name cannot be empty!");
      valid = false;
    }

    if (formData.email.trim() === "") {
      newErrors.push("Email cannot be empty!");
      valid = false;
    }

    if (formData.password.trim() === "") {
      newErrors.push("Password cannot be empty!");
      valid = false;
    }

    if (formData.confirmpassword.trim() === "") {
      newErrors.push("Confirm Password cannot be empty!");
      valid = false;
    }
    if (!formData.age) {
      newErrors.push("Age cannot be empty!");
      valid = false;
    }
    if (!formData.mobile) {
      newErrors.push("Mobile number cannot be empty!");
      valid = false;
    }
    if (formData.address.trim() === "") {
      newErrors.push("Address cannot be empty!");
      valid = false;
    }
    if (!formData.markPercentage) {
      newErrors.push("mark Percentage cannot be empty!");
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateInputs()) {
      console.log("Form submitted successfully");
    }
  };

  return (
    <div>
      <form className="container mt-2" onSubmit={handleSubmit}>
        <div className="form-header">
          <h3>Signup</h3>
          <p>Create new account here</p>
        </div>

        <input
          type="text"
          name="email"
          id="email"
          placeholder="enter your email"
          className="form-control mt-2"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="choose password"
          className="form-control mt-2"
          value={formData.password}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="confirmpassword"
          id="confirmpassword"
          placeholder="confirm password"
          className="form-control mt-2"
          value={formData.confirmpassword}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="your name"
          className="form-control mt-2"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="age"
          id="age"
          placeholder="your age"
          className="form-control mt-2"
          value={formData.age}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="mobile"
          id="mobile"
          placeholder="your mobile number"
          className="form-control mt-2"
          value={formData.mobile}
          onChange={handleInputChange}
        />
        <textarea
          name="address"
          rows="2"
          cols="50"
          id="address"
          placeholder="your address"
          className="form-control mt-2"
          value={formData.address}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="markPercentage"
          id="markPercentage"
          placeholder="Mark Percentage in 12th grade"
          className="form-control mt-2"
          value={formData.markPercentage}
          onChange={handleInputChange}
        />

        {errors &&
          errors.length > 0 &&
          errors.map((error, index) => (
            <p className="text-danger" id="errorMessage" key={index}>
              {error}
            </p>
          ))}
        <button className="btn btn-primary" id="submitButton" type="submit">
          SIGN UP
        </button>
        <div className="form-group pt-3">
          <p>
            Already have an Account <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
