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
        <div key="2">{this.state.term}</div>
        ]
    }
}
 
export default SearchBar;
