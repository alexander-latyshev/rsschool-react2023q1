import React, { Component } from 'react';
import products from '../../../api/products.json';
import './homePage.scss';

type IState = {
  dataProducts: null;
};

class HomePage extends Component<unknown, IState> {
  state = {
    dataProducts: null,
  };

  render() {
    return (
      <section className="homepage">
        <h1>Home</h1>
        <div className="homepage__container"></div>
      </section>
    );
  }
}

export default HomePage;
