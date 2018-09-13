import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import YTsearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAkhnLDDFGv57eEvL-MT_8PHeQ7KZoke38';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [] 
    }
  }

  searchTerm(term) {
    YTsearch({key: API_KEY, term}, (videos) => {
      this.setState({ videos });
      // this.setState({ videos: videos })
      console.log(this.state.videos)
    });
  }

  render() {
    return (
      <div>
        <SearchBar searchTerm={(keyword) => this.searchTerm(keyword) } />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
