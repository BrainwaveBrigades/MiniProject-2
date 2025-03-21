import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <h1>Welcome to Nexus</h1>
      <p>Connecting students and alumni for career growth.</p>
      <Link to="/auth">
        <button className="cta-btn">Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage;
