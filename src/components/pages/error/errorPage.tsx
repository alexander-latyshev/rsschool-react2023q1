import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './errorPage.scss';

class ErrorPage extends Component<unknown, State> {
  render() {
    return (
      <div className="error">
        <div className="error__container">
          <h1>Oops!</h1>
          <span>Error 404</span>
          <button>
            <Link to={'/'}>Back to home page!</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default ErrorPage;
