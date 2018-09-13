import React from 'react';
import ReactDOM  from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAkhnLDDFGv57eEvL-MT_8PHeQ7KZoke38';

const App = () => {
  return (
  <div>
    <SearchBar /> 
  </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
