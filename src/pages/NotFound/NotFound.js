import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
    render() {
        return (
            <div className="not-found">
                <h1>404 <small>Not Found :(</small> </h1>
                <p>Please go to the <Link to="/">homepage</Link></p>
            </div>
        );
    }
}

export default NotFound;
