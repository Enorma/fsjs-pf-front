import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return(
            <div>
                <h1>HOLA SOY HOME</h1>
                <Link to="/about">ABOUT</Link>
                <Link to="/shop">SHOP</Link>
            </div>
        );
    }
}

export default Home;
