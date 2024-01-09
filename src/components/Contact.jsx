// here is the most complex component i have made so far, this was a pain in the booty
import React, { useState } from 'react';
// building the form and the required data for the form
// setting it as a state so i can change the data
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
// setting the validation errors as a state so i can change them
  const [validationErrors, setValidationErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
// here is where i am setting the input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // cleaining up the validation errors when the user types
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // here is where i am setting the validation errors
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    // update validation errors in state
    setValidationErrors(errors);

    // throw an error if there are any validation errors
    if (Object.keys(errors).length === 0) {
      // log the form data to the console
      console.log('Form submitted:', formData);
    }
  };

  const isValidEmail = (email) => {
    // i set the email regex to make sure the email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
// here is where i am setting the form and the styling for the form
  return (
    <div>
        <br />
        <br />
      <h1 style={{ textAlign: 'center' }}>Contact</h1>
      <br />
      <br />
     {/* putting in the function handle form submit so it can do it's thing */}
      <form onSubmit={handleFormSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
          />
          <p className="validation-error">{validationErrors.name}</p>
        </div>
        <br />
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
          />
          <p className="validation-error">{validationErrors.email}</p>
        </div>
        <br />
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
          />
          <p className="validation-error">{validationErrors.message}</p>
        </div>
        <div> 
            {/* so much style for just one button, probably could have just done it on css but was on a role and got it done  */}
          <button
            type="submit"
            style={{
              backgroundColor: 'black', 
              color: 'white',
              padding: '10px 20px',
              fontSize: '16px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s, opacity 0.3s',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.5)')} 
            onMouseLeave={(e) => (e.target.style.backgroundColor = 'black')} 
          >
            Submit
          </button>
        </div>
      </form>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
// exporting the contact form
export default Contact;
