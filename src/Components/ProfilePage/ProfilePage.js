import React from 'react';
import { Link } from 'react-router-dom';
import './ProfilePage.scss';  // Adjust the path as necessary

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <header className="profile-header">
        <img src="profile-pic.jpg" alt="Profile" className="profile-pic" />
        <h1>Welcome back, User!</h1>
      </header>
      <section className="profile-bio">
        <h2>Bio</h2>
        <p>This is the bio section.</p>
      </section>
      <section className="profile-calms-me">
        <h2>What Calms Me</h2>
        <p>This is the "What Calms Me" section.</p>
      </section>
      <aside className="profile-sidebar">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/notifications">Notifications</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/help">Help</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default ProfilePage;
