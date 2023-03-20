import React, { Component } from 'react';
import './App.scss';
import Header from './components/header/header';
import Main from './components/main/main';

type IState = {
  count: number;
};

class App extends Component<unknown, IState> {
  state: IState = {
    count: 0,
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
