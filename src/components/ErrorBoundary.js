import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor (props) {
        super (props);
        this.state = {
            hasError: false
        }
    }
    render () {
        if (this.state.hasError) {
            return <h1>Oops! There was an error!</h1>
        }
    }
}

export default ErrorBoundary;