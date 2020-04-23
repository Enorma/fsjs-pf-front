import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return(
            <div>
                <h1>HOLA SOY ABOUT</h1>
                <Link to="/">HOME</Link>
                <Link to="/shop">SHOP</Link>
            </div>
        );
    }
}

export default About;
