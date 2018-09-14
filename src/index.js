import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import YTsearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAkhnLDDFGv57eEvL-MT_8PHeQ7KZoke38';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }

    YTsearch({key: API_KEY, term: 'Lemon'}, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
      // this.setState({ videos: videos })
    });

  }

  searchTerm(term) {
    YTsearch({key: API_KEY, term}, (videos) => {
      this.setState({ videos });
      // this.setState({ videos: videos })
    });
  }

  render() {
    return (
      <div>
        <SearchBar searchTerm={(keyword) => this.searchTerm(keyword) } />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos} updateSelectedVideo={(selectedVideo)=> this.setState({ selectedVideo })}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
