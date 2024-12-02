import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";
import ResearchMethodsPage from "../ResearchMethodsPage/ResearchMethodsPage";

function HomePage() {
  return (
    <div className="homepage">
      {/* <header className="homepage__header">
        <h1 className="homepage__title">UX Research Methods Guide</h1>
        <p className="homepage__description">
          Discover and apply the perfect UX research methods for your projects. 
          Elevate your user experience design with data-driven insights.
        </p>
      </header> */}


        <ResearchMethodsPage />

    </div>
  );
}

export default HomePage;