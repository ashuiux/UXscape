import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";
import ResearchMethodsPage from "../ResearchMethodsPage/ResearchMethodsPage";

function HomePage() {
  return (
    <div className="homepage">

        <ResearchMethodsPage />

    </div>
  );
}

export default HomePage;