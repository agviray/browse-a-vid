import React from 'react';

class SearchBar extends React.Component {


  render() {
    return(
      <div className="searchbar">
        <form className="searchbar-form" onSubmit="">
          <div className="searchbar-field">
            <label className="searchbar-label">Type something</label>
            <input className="searchbar-input" type="text" />
          </div>
        </form>
      </div>
    );
  }
};

export default SearchBar;