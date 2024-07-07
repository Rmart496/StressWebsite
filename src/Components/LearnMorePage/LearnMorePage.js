import React from 'react';
import './LearnMorePage.scss';
import calmingImage from '../../Assets/channel-your-energy.jpeg';

const LearnMorePage = () => {
  return (
    <div className="learn-more-container">
      <h1 className="learn-more-title">Channel Your Relief</h1>
      <p className="learn-more-intro">
        Knowing how to channel your stress and anxiety is crucial for maintaining a healthy mental state.
        Here, we provide some tips and resources to help you manage these challenges.
      </p>
      <img src={calmingImage} alt="Calming Illustration" className="learn-more-image" />
      <p className="learn-more-caption"><em style={{ color: 'grey' }}>Source: www.spiritualityhealth.com</em></p>

      <section className="tips-section">
        <h2>Quick Tips for Stress Relief</h2>
        <ul>
          <li><strong>Take deep breaths.</strong> Deep breaths are known to reduce tension and help relax the body.</li>
          <li><strong>Practice mindfulness.</strong> Being present in the moment can help you manage your stress better.</li>
          <li><strong>Exercise regularly.</strong> Physical activity releases endorphins, which are natural stress relievers.</li>
          <li><strong>Get enough sleep.</strong> Quality sleep helps your body recover and handle stress more effectively.</li>
          <li><strong>Connect with loved ones.</strong> Talking to friends and family can provide emotional support and reduce stress.</li>
        </ul>
      </section>

      <section className="tips-section">
        <h2>Quick Tips for Dealing with Anxiety</h2>
        <ul>
          <li><strong>Recognize and understand your triggers.</strong> Identifying what causes your anxiety can help you manage it better.</li>
          <li><strong>Maintain a healthy diet.</strong> Eating well-balanced meals can improve your overall well-being.</li>
          <li><strong>Stay active.</strong> Regular exercise can reduce anxiety symptoms and improve your mood.</li>
          <li><strong>Limit caffeine and alcohol.</strong> These substances can increase anxiety levels in some people.</li>
        </ul>
      </section>

      <section className="resources-section">
        <h2>Additional Resources</h2>
        <ul>
          <li><a href="https://www.healthline.com/nutrition/16-ways-relieve-stress-anxiety#11.-Practice-mindfulness" target="_blank" rel="noopener noreferrer">16 Simple Ways to Relieve Stress</a></li>
          <li><a href="https://adultmentalhealth.org/managing-and-reducing-anxiety/#:~:text=Follow%20the%203%2D3%2D3,ankle%2C%20fingers%2C%20or%20arm." target="_blank" rel="noopener noreferrer">Managing and Reducing Anxiety</a></li>
          <li><a href="https://www.medicinenet.com/what_are_the_%E2%80%9C5_as%E2%80%9D_to_help_manage_stress/article.htm" target="_blank" rel="noopener noreferrer">Five A's to Manage Stress</a></li>
          <li><a href="https://www.brightfuturesny.com/post/three-c-for-anxiety#:~:text=The%20Three%20C's%20for%20Anxiety,managing%20and%20reducing%20anxiety%20symptoms." target="_blank" rel="noopener noreferrer">Three C's for Anxiety</a></li>
        </ul>
        <div className="video-resources">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/o18I23HCQtE?si=Ffq4iH5-BtpsAJUI" title="Stress Relief Techniques" frameBorder="0" allowFullScreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/s9zZr2KRvzs?si=IQZXQF-6mUqjuO5A" title="Anxiety Management Tips" frameBorder="0" allowFullScreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/TK5KOXLT15g?si=LUBsmxQPZh68e-ol" title="Mindfulness Practices" frameBorder="0" allowFullScreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ttHu_N-zAnQ?si=MWs8j6OgYHbzsJ8X" title="Relaxation Exercises" frameBorder="0" allowFullScreen></iframe>
        </div>
      </section>
    </div>
  );
};

export default LearnMorePage;
