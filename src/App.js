import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SplashPage from './SplashPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import ResetPasswordPage from './ResetPasswordPage';
import AboutPage from './AboutPage';
import LearnMorePage from './LearnMorePage';
import ContactPage from './ContactPage';
import ProtectedRoute from './ProtectedRoute';
import DashboardPage from './DashboardPage';
import ProfilePage from './ProfilePage';
import RestYourMindPage from './RestYourMindPage';
import FeelingsCheckInPage from './FeelingsCheckInPage';
import AmbientMusicPlayerPage from './AmbientMusicPlayerPage';
import ErrorPage from './ErrorPage';

const App = () => {
  const isAuthenticated = false; // Update this based on your authentication logic

  return (
    <Router>
      <header>
        <nav>
          <Link to="/"><img src="logo.png" alt="HowRU Logo" className="logo" /></Link>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/learnmore">Learn More</Link></li>
            {isAuthenticated ? (
              <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/my-profile">My Profile</Link></li>
              </>
            ) : (
              <>
                <li><Link to="/login">Sign In</Link></li>
                <li><Link to="/register" className="button">Create Account</Link></li>
              </>
            )}
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ResetPasswordPage />} />
        <Route path="/about" element={<AboutPage />} /> 
        <Route path="/learnmore" element={<LearnMorePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route element={<ProtectedRoute />}> 
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/my-profile" element={<ProfilePage />} />
          <Route path="/restyourmind" element={<RestYourMindPage />} /> 
          <Route path="/check-in" element={<FeelingsCheckInPage />} />
          <Route path="/ambientmusic" element={<AmbientMusicPlayerPage />} />
        </Route> 
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
