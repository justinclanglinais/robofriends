import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';

class App extends React.Component {
    constructor () {
        super ()
        this.state = {
            robots: robots,
            searchField: ''        
        }
    }
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        console.log(filteredRobots)
    }
    render () {
        return (
            <div className='tc'>
                <h1>Robo Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={this.state.robots} />
            </div>
        )
    }
    
}

export default App;
