import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  render() {
    console.log(this.state.term);
    return(
      <div className="searchbar">
        <form className="searchbar-form">
          <div className="searchbar-field">
            <label className="searchbar-label">Type something</label>
            <input 
              type="text"
              className="searchbar-input" 
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
};

export default SearchBar;