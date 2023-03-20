import React, { Component } from 'react';
import SearchInput from '../../components/searchInput/searchInput';
import Navigation from '../../components/navigation/navigation';
import './header.scss';

type State = {
  count: number;
};

class Header extends Component<unknown, State> {
  state: State = {
    count: 0,
  };

  render() {
    return (
      <header className="header">
        <div className="header__container">
          <SearchInput />
          <Navigation />
        </div>
      </header>
    );
  }
}

export default Header;
