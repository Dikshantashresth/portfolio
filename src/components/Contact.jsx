import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './contact.css';
import Nav from './Nav';

const Contact = () => {
  const [state, handleSubmit] = useForm('movweaje');

  if (state.succeeded) {
    return(<><Nav/><p className="thank-you">Thanks for reaching out! 💌</p></>);
     
  }

  return (
    <>
    <Nav />
    <div className="contact-wrapper">
      <h2 className="contact-title">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="message">Your Message</label>
        <textarea id="message" name="message" rows="5" required />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <button type="submit" disabled={state.submitting}>
          {state.submitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div></>
  );
};

export default Contact;
