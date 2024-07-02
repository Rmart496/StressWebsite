import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import LoginPage from './Components/LoginPage/LoginPage.js';
import SplashPage from './Components/SplashPage/SplashPage.js'
import RegisterPage from './Components/RegisterPage/RegisterPage.js';
import ResetPasswordPage from './Components/ResetPassword/ResetPassword.js';
import ProtectedRoute from './Components/GeneralComponents/ProtectedRoute.js';
import DashboardPage from './Components/DashboardPage/DashboardPage.js';
import ProfilePage from './Components/ProfilePage/ProfilePage.js';
import RestYourMindPage from './Components/RestYourMindPage/RestYourMindPage.js'
import FeelingsCheckInPage from "./Components/FeelingsCheckIn/FeelingsCheckIn.js";
import AmbientMusicPlayerPage from "./Components/AmbientPlayerPage/AmbientPlayerPage.js";
import ErrorPage from "./Components/ErrorPage/ErrorPage.js"
import AboutPage from './Components/AboutPage/AboutPage.js';
import LearnMorePage from './Components/LearnMorePage/LearnMorePage.js';
import './styles/styles.css';

const App = () => {
    return (
        <>
            <header>
                <nav>
                    <Link to="/"><img src="logo.png" alt="HowRU Logo" className="logo" /></Link>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/learnmore">Learn More</Link></li>
                        <li><Link to="/login">Sign In</Link></li>
                        <li><Link to="/register" className="button">Create Account</Link></li>
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
                <Route element={<ProtectedRoute />}> 
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/my-profile" element={<ProfilePage />} />
                    <Route path="/restyourmind" element={<RestYourMindPage />} /> 
                    <Route path="/check-in" element={<FeelingsCheckInPage />} />
                    <Route path="/ambientmusic" element={<AmbientMusicPlayerPage />} />
                </Route> 
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
        </>
    );
};

export default App;
