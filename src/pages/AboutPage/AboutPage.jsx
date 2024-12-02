import React from "react";
import "./AboutPage.scss";

function AboutPage() {
  return (
    <div className="about">
      <header className="about__header">
        <h1 className="about__title">About UXscape</h1>
        <p className="about__tagline">Empowering UX designers with the right research methods</p>
      </header>

      <div className="about__content">
        <section className="about__section about__section--overview">
          <h2 className="about__subtitle">
            <span className="material-icons">lightbulb</span>
            Overview
          </h2>
          <p className="about__text">
            UXscape is a web application crafted to support UX designers in selecting the most suitable research methods for their projects. By utilizing robust CRUD functionality, UXscape empowers users to seamlessly add, browse, update, and delete research method recommendations.
          </p>
          <img className="about__image" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="UX design team collaborating" />
        </section>

        <section className="about__section about__section--problem">
          <h2 className="about__subtitle">
            <span className="material-icons">psychology</span>
            The Problem
          </h2>
          <p className="about__text">
            UX designers often face challenges in choosing the right research methods for their projects due to the vast and unorganized information available. This overwhelming "rabbit hole" of data makes efficient decision-making difficult, delaying the research process.
          </p>
          <img className="about__image" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" alt="Frustrated designer" />
        </section>

        <section className="about__section about__section--profile">
          <h2 className="about__subtitle">
            <span className="material-icons">group</span>
            User Profile
          </h2>
          <ul className="about__list">
            <li className="about__list-item">
              <span className="material-icons">person</span>
              Primary Users: UX Designers
            </li>
            <li className="about__list-item">
              <span className="material-icons">search</span>
              Designers seeking quick and relevant research method suggestions
            </li>
            <li className="about__list-item">
              <span className="material-icons">library_add</span>
              Users interested in contributing to a growing library of research methods
            </li>
            <li className="about__list-item">
              <span className="material-icons">update</span>
              Designers wanting to ensure research resources remain accurate and up-to-date
            </li>
          </ul>
        </section>

        <div className="about__features">
          <section className="about__section about__section--features">
            <h2 className="about__subtitle">
              <span className="material-icons">stars</span>
              Key Features
            </h2>
            <ul className="about__list">
              <li className="about__list-item">
                <span className="material-icons">add_circle</span>
                <strong>Create:</strong> Add new research methods
              </li>
              <li className="about__list-item">
                <span className="material-icons">library_books</span>
                <strong>Read:</strong> Explore a categorized library of research methods
              </li>
              <li className="about__list-item">
                <span className="material-icons">edit</span>
                <strong>Update:</strong> Edit research method details
              </li>
              <li className="about__list-item">
                <span className="material-icons">delete</span>
                <strong>Delete:</strong> Remove outdated research methods
              </li>
            </ul>
          </section>

          <section className="about__section about__section--tools">
            <h2 className="about__subtitle">
              <span className="material-icons">code</span>
              Implementation Details
            </h2>
            <ul className="about__list">
              <li className="about__list-item">
                <span className="material-icons">desktop_windows</span>
                <strong>Frontend:</strong> React.js, SCSS
              </li>
              <li className="about__list-item">
                <span className="material-icons">dns</span>
                <strong>Backend:</strong> Node.js, Express.js, MySQL
              </li>
              <li className="about__list-item">
                <span className="material-icons">extension</span>
                <strong>Libraries:</strong> React Router DOM, Axios, Knex.js
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;