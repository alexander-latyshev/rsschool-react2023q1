import React, { Component } from 'react';
import './main.scss';
import { Route, Routes } from 'react-router-dom';
import AboutPage from '../../components/pages/about/aboutPage';
import HomePage from '../../components/pages/home/homePage';

type State = {
  count: number;
};

class Main extends Component<unknown, State> {
  state: State = {
    count: 0,
  };

  render() {
    return (
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    );
  }
}

export default Main;
