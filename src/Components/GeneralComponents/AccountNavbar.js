import React from "react";
import AuthServiceInstance from "./AuthService";
import "../../Styling/bootstrap.css";
import { Link as MuiLink } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import logo from "../../Assets/logo.png";

const AccountNavbar = () => {
    const navigate = useNavigate();
    const isAuthenticated = AuthServiceInstance.isAuthenticated();

    const logoStyle = {
        height: "50px",
        width: "auto",
    };

    const buttonDarkBlueBackground = {
        backgroundColor: "#274C77",
        color: "#FFF",
        padding: "0px",
        borderRadius: "24px",
        boxShadow: "5px 5px 5px 0px rgba(0,0,0,0.75)",
    };

    const createAccountButton = {
        borderRadius: "24px",
        boxShadow: "5px 5px 5px 0px rgba(0,0,0,0.75)",
        cursor: "pointer",
    };

    const navbarColor = {
        backgroundColor: "#1A1B25",
    };

    const handleLogout = () => {
        const userEmail = {
            email: sessionStorage.getItem("user_email"),
        };

        AuthServiceInstance.logoutUser(userEmail);
        sessionStorage.clear();
        navigate("/login");
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg p-3 fixed-top" style={navbarColor}>
                <div className="navbar-brand">
                    <RouterLink to="/">
                        <img src={logo} alt="HowRU Logo" style={logoStyle} />
                    </RouterLink>
                </div>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <MuiLink component={RouterLink} to="/" underline="hover" className="p-2 m-2">
                                Home
                            </MuiLink>
                        </li>
                        <li className="nav-item">
                            <MuiLink component={RouterLink} to="/about" underline="hover" className="p-2 m-2">
                                About Us
                            </MuiLink>
                        </li>
                        <li className="nav-item">
                            <MuiLink component={RouterLink} to="/contact" underline="hover" className="p-2 m-2">
                                Contact Us
                            </MuiLink>
                        </li>
                        <li className="nav-item">
                            <MuiLink component={RouterLink} to="/learnmore" underline="hover" className="p-2 m-2">
                                Learn More
                            </MuiLink>
                        </li>
                        <li className="nav-item">
                            {sessionStorage.getItem('user_name') != null ? (
                                <>
                                    <MuiLink
                                        component={RouterLink}
                                        to="/dashboard"
                                        underline="hover"
                                        className="p-2 m-2"
                                    >
                                        Dashboard
                                    </MuiLink>
                                    <MuiLink
                                        component={RouterLink}
                                        to="/my-profile"
                                        underline="hover"
                                        className="p-2 m-2"
                                    >
                                        My Profile
                                    </MuiLink>
                                </>
                            ) : (
                                <>
                                    <MuiLink
                                        component={RouterLink}
                                        to="/login"
                                        underline="hover"
                                        className="p-2 m-2"
                                    >
                                        Sign In
                                    </MuiLink>
                                    <MuiLink
                                        component={RouterLink}
                                        to="/register"
                                        underline="hover"
                                        className="p-2 m-2"
                                        style={buttonDarkBlueBackground}
                                    >
                                        Create Account
                                    </MuiLink>
                                </>
                            )}
                        </li>
                        {sessionStorage.getItem('user_name') != null && (
                            <li className="nav-item">
                                <MuiLink
                                    style={createAccountButton}
                                    onClick={handleLogout}
                                    underline="hover"
                                    className="p-2 m-2 text-white"
                                >
                                    Logout
                                </MuiLink>
                            </li>
                        )}
                        {sessionStorage.getItem('user_name') != null && (
                            <li className="nav-item">
                                <h5 className="d-inline-block pr-2 m-0 text-white">
                                    Hello, {sessionStorage.getItem('user_name')}
                                </h5>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default AccountNavbar;
