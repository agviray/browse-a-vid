import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();
  }

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  }

  render() {
    console.log(this.state.term);
    return(
      <div className="searchbar">
        <form className="searchbar-form" onSubmit={this.onFormSubmit}>
          <div className="searchbar-field">
            <label className="searchbar-label">Type something</label>
            <input 
              type="text"
              className="searchbar-input" 
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
};

export default SearchBar;