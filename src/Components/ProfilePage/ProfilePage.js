import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProfilePage.scss'; // Adjust the path as necessary
import profilePic from '../../Assets/default profile pic.jpg'; // Import the profile picture
import SkeletonForAllPages from '../GeneralComponents/SkeletonForAllPages';


const ProfilePage = () => {
  const [bio, setBio] = useState('');
  const [calmsMe, setCalmsMe] = useState('');

  useEffect(() => {
    const savedBio = localStorage.getItem('bio');
    const savedCalmsMe = localStorage.getItem('calmsMe');

    if (savedBio) {
      setBio(savedBio);
    }

    if (savedCalmsMe) {
      setCalmsMe(savedCalmsMe);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('bio', bio);
    localStorage.setItem('calmsMe', calmsMe);
    alert('Changes saved!');
  };

  return (
    <SkeletonForAllPages>
    <div className="profile-page">
      <aside className="profile-sidebar">
        <nav>
          <ul>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/notifications">Notifications</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/help">Help</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>
        </nav>
      </aside>
      <div className="profile-content">
        <header className="profile-header">
          <img src={profilePic} alt="Profile" className="profile-pic" />
        </header>
        <section className="profile-bio">
          <h2>Bio</h2>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Tell us about yourself (max 500 characters)"
            maxLength="500"
          />
        </section>
        <section className="profile-calms-me">
          <h2>What Calms Me</h2>
          <textarea
            value={calmsMe}
            onChange={(e) => setCalmsMe(e.target.value)}
            placeholder="What calms you? (max 250 characters)"
            maxLength="250"
          />
        </section>
        <button onClick={handleSave} className="save-button">Save</button>
      </div>
    </div>
    </SkeletonForAllPages>
  );
};

export default ProfilePage;
