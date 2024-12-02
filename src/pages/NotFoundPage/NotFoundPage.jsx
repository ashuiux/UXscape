import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.scss';

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <div className="not-found__content">
        <h1 className="not-found__title">404</h1>
        <h2 className="not-found__subtitle">Page Not Found</h2>
        <p className="not-found__text">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="not-found__button">
          <span className="material-icons">home</span>
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;