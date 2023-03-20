import React, { Component } from 'react';
import './searchInput.scss';

class SearchInput extends Component<unknown, State> {
  render() {
    return (
      <div>
        <input type="text" className="search" />
      </div>
    );
  }
}

export default SearchInput;
