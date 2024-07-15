import React from 'react';
import './AboutPage.scss';
import bluemount from '../../Assets/bluemount.jpg';
import goldenhr from '../../Assets/goldenhr.jpg';
import purpleplants from '../../Assets/purpleplants.jpg';
import stars from '../../Assets/stars.jpg';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-images">
        <img src={bluemount} alt="Blue Mountains" />
        <img src={goldenhr} alt="Golden Hour" />
        <img src={purpleplants} alt="Purple Plants" />
        <img src={stars} alt="Stars" />
      </div>
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          HowRU is an innovative application designed to assist users in managing stress and anxiety through a comprehensive suite of features. Our platform offers daily check-ins to help users track their mood and mental state, providing valuable insights over time. Additionally, users can immerse themselves in ambient music to create a calming atmosphere, and explore a variety of meditative techniques to enhance their mindfulness practice. For those looking to develop a structured approach to stress management, the De-Stress My Life Roadmap guides users through personalized strategies and resources. Together, these features create a holistic tool aimed at promoting mental well-being and resilience.
        </p>
        <div className="about-sections">
          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              Our mission at HowRU is to empower individuals with the tools and resources they need to manage stress and anxiety effectively. We strive to create a supportive community where mental well-being is prioritized and nurtured.
            </p>
          </div>
          <div className="about-section">
            <h2>Our Story</h2>
            <p>
              Our journey began with a simple idea: to create a safe and supportive space for individuals struggling with stress and anxiety. Inspired by personal experiences and the desire to make a difference, we developed HowRU to provide practical tools and resources for mental well-being. Our passion for helping others drives us to continuously improve and expand our app, making mental health support accessible to everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
