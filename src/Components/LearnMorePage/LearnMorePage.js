import React from 'react';
import './LearnMorePage.scss';

const LearnMorePage = () => {
  return (
    <div className="learn-more-page">
      <header>
        <h1>Channel Your Relief</h1> {/* Updated heading text */}
        <p>
          Knowing how to channel your stress and anxiety is crucial for maintaining a healthy mental state. Here, we provide some tips and resources to help you manage these challenges.
        </p>
      </header>

      <section className="tips">
        <h2>Quick Tips for Stress Relief</h2>
        <ul>
          <li>Take deep breaths</li>
          <li>Practice mindfulness</li>
          <li>Exercise regularly</li>
          <li>Get enough sleep</li>
          <li>Connect with loved ones</li>
        </ul>
      </section>

      <section className="tips">
        <h2>Quick Tips for Dealing with Anxiety</h2>
        <ul>
          <li>Recognize and understand your triggers</li>
          <li>Maintain a healthy diet</li>
          <li>Stay active</li>
          <li>Limit caffeine and alcohol</li>
          <li>Seek professional help if needed</li>
        </ul>
      </section>

      <section className="resources">
        <h2>Additional Resources</h2>
        <ul>
          <li><a href="https://example.com/resource1">Resource 1</a></li>
          <li><a href="https://example.com/resource2">Resource 2</a></li>
          <li><a href="https://example.com/resource3">Resource 3</a></li>
        </ul>
      </section>
    </div>
  );
};

export default LearnMorePage;
