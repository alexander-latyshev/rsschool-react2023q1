import React, { Component } from 'react';
import AboutPage from '../../components/pages/about/aboutPage';
import { Link } from 'react-router-dom';
import './navigation.scss';

class Navigation extends Component<unknown, IState> {
  render() {
    return (
      <ul className="navigation">
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/about'}>About Us</Link>
        </li>
      </ul>
    );
  }
}

export default Navigation;
