import React from 'react';
import '../../styles/styles.css';  // Adjust the path as necessary

const AboutPage = () => {
  return (
    <div>
      <main>
        <section className="intro">
          <h1>About HowRU</h1>
          <p>HowRU is an innovative application designed to assist in the management of stress and anxiety...</p>
        </section>

        <section className="mission">
          <h2>Our Mission</h2>
          <p>To provide a comprehensive tool for managing mental health and promoting well-being...</p>
        </section>

        <section className="team">
          <h2>Our Team</h2>
          <div className="team-member">
            <img src="team1.jpg" alt="Team Member" />
            <h3>John Doe</h3>
            <p>Founder & CEO</p>
          </div>
          <div className="team-member">
            <img src="team2.jpg" alt="Team Member" />
            <h3>Jane Smith</h3>
            <p>Lead Developer</p>
          </div>
        </section>

        <section className="story">
          <h2>Our Story</h2>
          <p>HowRU was founded with the vision to create a safe space for individuals to manage their mental health...</p>
        </section>
        
        <section className="contact-info">
          <h2>Contact Information</h2>
          <p>Email: contact@howru.com</p>
          <p>Follow us on <a href="https://twitter.com">Twitter</a>, <a href="https://facebook.com">Facebook</a>, <a href="https://instagram.com">Instagram</a></p>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
