import { useState } from 'react';
import './Contact.css';

function ContactMe() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });

    // Clear errors for the current field
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let newErrors = {};

    // Check for name input
    if (!formState.name) {
      newErrors.name = 'Name is required';
    }

    // Check for email input
    if (!formState.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Check for message input
    if (!formState.message) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form is valid and ready to be submitted!');
    }
  };

  return (
    <div className="contact-me-container">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleInputChange}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleInputChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleInputChange}
            required
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactMe;