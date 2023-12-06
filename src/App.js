import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';

const state = {
    robots: robots,
    searchField: ''
}

class App extends React.Component {
    render () {
        return (
            <div className='tc'>
                <h1>Robo Friends</h1>
                <SearchBox />
                <CardList robots={robots} />
            </div>
        )
    }
    
}

export default App;
