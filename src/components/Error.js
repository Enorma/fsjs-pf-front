import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class Error extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return(
            <div>
                <h1>HOLA SOY ERROR</h1>
                <Link to="/">HOME</Link>
            </div>
        );
    }
}

export default Error;
