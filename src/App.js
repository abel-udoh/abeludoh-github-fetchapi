// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import RepositoriesList from './RepositoriesList';
import Repository from './Repository';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

const NotFound = () => {
  let location = useLocation();

  return (
    <div>
      <h3>No match for <code>{location.pathname}</code></h3>
    </div>
  );
};

const App = () => {
  return (
    <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="https://github.com/abel-udoh">GitHub</Link></li>
          </ul>
        </nav>
        <div className="hero">
          <h2>Welcome to Abel Udoh GitHub Fetch API</h2>
          <p>A web application that allows users to explore GitHub repositories.</p>
        </div>


      <main className="container">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<RepositoriesList />} />
            <Route path="/:repoName" element={<Repository />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </main>
      <footer>
        <p>&copy; 2024 <Link to="https://www.linkedin.com/in/abel-udoh-4a7771110">Cyber Premium. </Link>All Rights Reserved.</p>
      </footer>
    </Router>
  );
};

export default App;

