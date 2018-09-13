import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props);
         
        this.state = {
            term: '12345'
        };
    }

    render() { 
        return [
        <input key="1" value={this.state.term} onChange={(e)=> this.setState({term: e.target.value})} />,
        <button key="2" onClick={() => this.props.searchTerm(this.state.term)}>Search</button>
        ]
    }
}
 
export default SearchBar;
