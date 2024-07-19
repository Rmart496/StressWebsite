import React from "react";
import './ContactUs.scss';
import logo from '../../Assets/logo.png';
import forestBorder from '../../Assets/forestborder.jpg';

const ContactUsPage = () => {
  return (
    <div className="contact-page">
      <header className="contact-header">
        <img src={forestBorder} alt="Forest Border" className="forest-border" />
        <div className="logo-container">
          <img src={logo} alt="HowRU Logo" />
        </div>
      </header>
      <div className="contact-content">
        <aside className="contact-info">
          <h2>Contact Information</h2>
          <p>Phone Number: (888) 888 - 8888</p>
          <p>Email: contact@howru.fake</p>
          <p>Mailing Address: 123 Fake Street, Placeholder City, 12345</p>
          <p>&nbsp;</p>
          <p>Connect with us through our socials!</p>
          <p><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></p>
          <p><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></p>
          <p><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></p>
        </aside>
        <section className="contact-form">
          <h1>Contact Us</h1>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactUsPage;
