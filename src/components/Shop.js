import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return(
            <div>
                <h1>HOLA SOY SHOP</h1>
                <Link to="/about">ABOUT</Link>
                <Link to="/">HOME</Link>
            </div>
        );
    }
}

export default Shop;
