import React from 'react';
import './AboutPage.scss';  // Adjust the path as necessary

const AboutPage = () => {
  return (
    <div>
      <main>
        <section className="intro">
          <h1>About HowRU</h1>
          <p>HowRU is an innovative application designed to assist users in managing stress and anxiety through a comprehensive suite of features. Our platform offers daily check-ins to help users track their mood and mental state, providing valuable insights over time. Additionally, users can immerse themselves in ambient music to create a calming atmosphere, and explore a variety of meditative techniques to enhance their mindfulness practice. For those looking to develop a structured approach to stress management, the De-Stress My Life Roadmap guides users through personalized strategies and resources. Together, these features create a holistic tool aimed at promoting mental well-being and resilience.</p>
        </section>

        <section className="mission">
          <h2>Our Mission</h2>
          <p>Our mission at HowRU is to empower individuals with the tools and resources they need to manage stress and anxiety effectively. We strive to create a supportive community where mental well-being is prioritized and nurtured.</p>
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
          <p>Our journey began with a simple idea: to create a safe and supportive space for individuals struggling with stress and anxiety. Inspired by personal experiences and the desire to make a difference, we developed HowRU to provide practical tools and resources for mental well-being. Our passion for helping others drives us to continuously improve and expand our app, making mental health support accessible to everyone.</p>
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
