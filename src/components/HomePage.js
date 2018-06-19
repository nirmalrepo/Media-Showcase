import React from 'react';
import { Link } from 'react-router';

// Home page component. This serves as the welcome page with link to the library
const HomePage = () => (
  <div className="jumbotron center">
    <h1 className="lead">Comprehensive News coverage built with React, Redux, and Redux-saga </h1>
    <div>
      <Link to="library">
        <button className="btn btn-lg btn-primary"> Show News</button>
      </Link>
    </div>
  </div>
);

export default HomePage;