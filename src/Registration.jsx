import React, { useState, useEffect } from "react";
import "./registration.css";
import { useNavigate } from "react-router-dom";

function RegistrationUser() {
  // Initial form values
  const initialValues = { username: "", email: "", password: "", confirmPassword: "" };
  
  // State to manage form values
  const [formValues, setFormValues] = useState(initialValues);

  // State to manage form errors
  const [formErrors, setAllFormErrors] = useState({});

  // State to track form submission status
  const [isSubmit, setSubmitDone] = useState(false);

  // React Router navigation hook
  const navigate = useNavigate();

  // Function to handle form input changes
  const handlingChanges = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Function to handle form submission
  const handlingSubmitions = (e) => {
    e.preventDefault();
    setAllFormErrors(validate(formValues));
    setSubmitDone(true);
  };

  // Effect to navigate when there are no form errors and the form has been submitted
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      navigate("/", { state: { successMessage: "successful!" } });
    }
  }, [formErrors]);

  // Function to validate form values
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    if (!values.username) {
      errors.username = "Yourname is required!";
    } else if (values.username.length > 20) {
      errors.username = "Yourname cannot exceed more than 20 characters";
    }

    if (!values.email) {
      errors.email = "Valid-Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 10) {
      errors.password = "Password must be more than 10 characters";
    } 

    if (!values.confirmPassword) {
      errors.confirmPassword = "Please confirm your password";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Given ID/Password is not Correct";
    }

    return errors;
  };

  // JSX structure of the component
  return (
    <div className="main">
      {/* Uncomment below to show success message or form values in pre tag */}
      {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="success-message">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )} */}

      <form className="form-main" onSubmit={handlingSubmitions}>
        <h1 className="form-top">Registration Form</h1>
        
        {/* Form input fields for username */}
        <div className="forms">
          <label id="forms_Instr" htmlFor="username">
            Yourname <span id="username">"</span>
          </label>
          <input
            type="text" id="username" name="username" className="input" placeholder="Yourname" value={formValues.username}
            onChange={handlingChanges}
          />
          <p className="error-message" htmlFor="username">
            {formErrors.username}
          </p>
        </div>

        {/* Form input fields for email */}
          <div className="forms">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            type="email" id="email" name="email" className="input" placeholder="E-mail" value={formValues.email}
            onChange={handlingChanges}
          />
          <p className="error-message" htmlFor="email">
            {formErrors.email}
          </p>
        </div>

        {/* Form input fields for password */}
        <div className="forms">
          <label id="forms_Instr" htmlFor="password">
            Password
          </label>
          <input
            type="password" id="password" name="password" className="input" placeholder="Password" value={formValues.password}
            onChange={handlingChanges}
          />
          <p className="error-message" htmlFor="password">
            {formErrors.password}
          </p>
        </div>

        {/* Form input fields for confirming password */}
        <div className="forms">
          <label id="forms_Instr" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            type="password" id="confirmPassword" name="confirmPassword" className="input" placeholder="Confirm Password" value={formValues.confirmPassword}
            onChange={handlingChanges}
          />
          <p className="error-message" htmlFor="confirmPassword">
            {formErrors.confirmPassword}
          </p>
        </div>

        {/* Form submit button */}
        <div className="forms">
          <button className="submit" type="submit">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}



export default RegistrationUser;
