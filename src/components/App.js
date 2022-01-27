import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import './SearchBar.css';

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    
    this.setState({ videos: response.data.items });
  }

  render() {
    return(
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        Your search found {this.state.videos.length} videos.
      </div>
    );
  }
}

export default App;