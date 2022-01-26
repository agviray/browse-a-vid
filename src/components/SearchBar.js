import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  }

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  }

  render() {
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