import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/styles.css';  // Adjust the path as necessary

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#E7ECEF",
    justifyContent: "center",
  };
  return (
    <footer className="row p-3 m-0" style={footerStyle}>
      <div className="col-md-3">HowRU by Liane Sangollo</div>
      <div className="col-md-2"><Link to="/about">About Us</Link></div>
      <div className="col-md-2"><Link to="/contact">Contact Us</Link></div>
    </footer>
  );
};

export default Footer;
