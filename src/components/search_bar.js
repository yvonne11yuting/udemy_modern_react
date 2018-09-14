import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
    }

    changeTerm(term) {
        this.setState({term});
        this.props.searchTerm(term)
    }

    render() {
        return (
            <div className="search-bar">
                <input value={this.state.term} onChange={(e)=> this.changeTerm(e.target.value)} />
            </div>
        )
    }
}

export default SearchBar;
