import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";
import ResearchMethodsPage from "../ResearchMethodsPage/ResearchMethodsPage";

function HomePage() {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to UX Research Methods Guide</h1>
        <p>
          Explore a variety of UX research methods tailored to your project needs.
          Learn how to gather insights, analyze data, and enhance user experience.
        </p>
      </header>


      <div className="home-actions">
        <ResearchMethodsPage />
        <Link to="/methods" className="btn-primary">
          Explore Methods
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
